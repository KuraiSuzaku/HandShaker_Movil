import React, {useState} from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';
import {Avatar, Card} from 'react-native-elements';
import { useNavigation, useRoute } from '@react-navigation/core';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Colores from '../Estilos/Colores';
import * as Componentes from '../Componentes/Indice';
import { AllChats } from '../Classes/AllChats';
import { Chat } from '../Classes/Chat';
import User from '../Classes/User';

export default PagoAPremium = (props) => {
    const avatar = require('../../public/Profile/user.png');
    const [auxRender, setAuxrender] = useState(false);
    const [Nmensajes, setMensajes] = useState(0);
    const [chats, setChats] = useState({});
    const [flgName, setFlgName] = useState(false);
    const navigation = useNavigation();
    const route = useRoute();

    let mensajes_chat = [
        {
            _id: "msg01",
            EmailUserFrom: "Origen1@email.com",
            EmailUserTo: "Destino1@email.com",
            MessageText: "SOY EL MENSAJE 1! PRIMER MENSAJE :D",
            MessageDate: "01/11/2020"
        },
        {
            _id: "msg02",
            EmailUserFrom: "Origen2@email.com",
            EmailUserTo: "Destino2@email.com",
            MessageText: "SOY EL MENSAJE 2! :D",
            MessageDate: "02/11/2020"
        },
        {
            _id: "msg03",
            EmailUserFrom: "Origen3@email.com",
            EmailUserTo: "Destino3@email.com",
            MessageText: "SOY EL MENSAJE 3! :D",
            MessageDate: "03/11/2020"
        },
        {
            _id: "msg04",
            EmailUserFrom: "Origen4@email.com",
            EmailUserTo: "Destino4@email.com",
            MessageText: "SOY EL MENSAJE 4! :D",
            MessageDate: "04/11/2020"
        },
        {
            _id: "msg05",
            EmailUserFrom: "Origen5@email.com",
            EmailUserTo: "Destino5@email.com",
            MessageText: "SOY EL MENSAJE 5! ÚLTIMO MENSAJE :D",
            MessageDate: "05/11/2020"
        },
    ]

    let lista_chats = [
        {
            _id: "",
            EmailChatWith: "",
            avatar: "",
            Name: "",
        },
       
    ];
      
  
    

    const CambiarAChat = (auxemail) => {
        
        navigation.navigate('Chat', {
            toUser: auxemail,
            fromUser:  props.user.Email
        })
    };

     async function Getchat(email){
         console.log("aqui 1")
       console.log("AQUIIIEmail actual ", email );
        let ArrChats= new Array();

        let allChat= new AllChats()//Login
        const ret = await  allChat.GetChats(email)
       // //console.log("status "+ret)
       
      //  //console.log("status "+ret.status)
     ////console.log("status "+ret.response.status)
       
      let ArrNames=new Array();

         let count=0;
       



        if(typeof(ret.ListOfChats) != "undefined"){
        
            const x =  await ret.ListOfChats.forEach( async (element) => {
       // //console.log(JSON.stringify(element));
        console.log(element.EmailChatWith);
          
      let ArrInfoChatWith=new Array();
       
          ArrNames.push(element.EmailChatWith)
          ArrInfoChatWith
          let UserChatWith= new User()
          const userInfoofChat = await  UserChatWith.GetUserInformation(element.EmailChatWith)
          
         
          ArrInfoChatWith.push(element.EmailChatWith);
          ArrInfoChatWith.push(userInfoofChat.Name);
          ArrInfoChatWith.push(userInfoofChat.ProfilePicture);
          ArrInfoChatWith.push(element.ListOfMessages);
          ArrInfoChatWith.push("element._id");
          ArrChats.push(ArrInfoChatWith);
        
        
         if((ret.ListOfChats.length-1)==count){
           console.log("termino")
            SetChatWithNameAndAvatar(ArrChats,ret);
            setMensajes(ret.ListOfChats.length)
           
        }
        
         count++;
      });
    
    }else{

  console.log("No tiene chats")
  setChats(lista_chats);
  setMensajes(0)
  setAuxrender(true);  
    }
      //console.log("FIIIN aqui 1")
     
    };

    function SetChatWithNameAndAvatar(ArrInfo,AllChats){
        ChatNewArr=new  Array();
      

          //  //console.log("for each");
        ArrInfo.forEach(userInfo => {
            
         //  let chataux=(new Chat(+userInfo[4].Path,userInfo[1],userInfo[2].Path,userInfo[0],userInfo[3].Path));
       
          let auxC=  new Chat();            
          auxC._id=userInfo[4];            
          auxC.Name=userInfo[1]; 
          auxC.Picture=userInfo[2].Path;
          auxC.EmailChatWith=userInfo[0]; 
          auxC.ListOfMessages=userInfo[3];
              
          ChatNewArr.push(auxC);
        });
     
        AllChats.ListOfChats=ChatNewArr;
     
       setChats(AllChats);
     
       setAuxrender(true);           
     
          
    }


    async function GetName(email){
    
        let UserChatWith= new User()//Login    
        const userInfoofChat = await  UserChatWith.GetUserInformation(email)
      
        return userInfoofChat.Name;
    }

    async function GetNames(Array){

       /* Array.forEach(element => {
            //console.log("email"+element)
            let UserChatWith= new User()//Login    
            const userInfoofChat = await  UserChatWith.GetUserInformation(email)
            //console.log("Su nombre es**************" +userInfoofChat.Name)
        });
*/
await Array.forEach( async element => {
   
    let UserChatWith= new User()//Login    
    const userInfoofChat = await  UserChatWith.GetUserInformation(element)
    
});


      /*  //console.log("checar user "+email)
        let UserChatWith= new User()//Login    
        const userInfoofChat = await  UserChatWith.GetUserInformation(email)
        //console.log("Su nombre es**************" +userInfoofChat.Name)
        return userInfoofChat.Name;*/
    }

    
    const Item = ({ item, onpress }) => {
    lastElement = Object.keys(item.ListOfMessages).length - 1;

    return(
       
        <TouchableOpacity onPress={onpress}>
                <Card containerStyle={Estilos.Tarjeta}>
                <View style={{flexDirection: 'row', paddingLeft: 10}}>
                    <Avatar
                        rounded
                        icon={{name:'user', type:'font-awesome', color:'black'}}
                       
                        source={{ uri: item.Picture }}
                        size={50}
                        containerStyle={Estilos.ContenedorAvatar}
                    />
                    <View style={{marginLeft: 15}}>
                        <Text style={Estilos.Texto}>{item.Name}</Text>
                        <Text style={Estilos.TextoSecundario}>{item.ListOfMessages[lastElement].MessageText}</Text>
                    </View>
                </View>
            </Card>
        </TouchableOpacity>
        );
    };

    const renderItem = ({ item }) => {
        return (
            <Item
            item={item}
            onpress={() => CambiarAChat(item.EmailChatWith)}
            cardStyle={Estilos.Tarjeta}
            textStyle={Estilos.Texto}
            />
        );
    };

    const Encabezado = () => {
        return(
            <>
            <Componentes.EncabezadoApp/> 
            <Text style={Estilos.Titulo}>MENSAJES</Text>   
           {(Nmensajes == 0) && <Text style={Estilos.Titulo}> No tiene Mensajes </Text>   }
           
            </>
        );
    };

    if(auxRender==false){
    Getchat(props.user.Email)
    }

    ////console.log(" **VAR CHAR",JSON.stringify(chats));
   return(
        <SafeAreaProvider style={Estilos.ContenedorApp}>
            
            {auxRender &&
            <FlatList
            ListHeaderComponent={<Encabezado/>}
                data={chats.ListOfChats}
                renderItem={renderItem}
                containerStyle={Estilos.ScrollView}
                contentContainerStyle={{flexGrow: 1}}
            ListFooterComponent={<Componentes.Navegacion/>}
            ListFooterComponentStyle={{flex: 1, justifyContent: 'flex-end'}}
            />
            }
        </SafeAreaProvider>
    )
}
  

const Estilos = StyleSheet.create({
    ContenedorApp: {
        flex: 1,
        backgroundColor: Colores.fondo,
    },
    ContenedorAvatar: {
        backgroundColor: 'gray',
    },
    ScrollView: {
        flex: 10,
        width: '100%',
        height: '75%',
    },
    Titulo: {    
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 15,
    },
    Texto: {
        color: Colores.etiquetas,
        fontSize: 16,   
        textAlign: 'left',
        fontWeight: 'bold',
    },
    TextoSecundario: {
        color: Colores.etiquetas,
        fontSize: 14,   
        textAlign: 'left',
        fontWeight: 'normal',
    },
    Tarjeta: {
        borderRadius: 20,
    },
});