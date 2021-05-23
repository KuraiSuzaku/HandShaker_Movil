import React, {useState} from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';
import {Avatar, Card} from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Colores from '../Estilos/Colores';
import * as Componentes from '../Componentes/Indice';
import { AllChats } from '../Classes/AllChats';
import { Chat } from '../Classes/Chat';
import User from '../Classes/User';

export default PagoAPremium = (props) => {
    const avatar = require('../../public/Profile/user.png');
    const [auxRender, setAuxrender] = useState(false);
    const [chats, setChats] = useState({});
    const [flgName, setFlgName] = useState(false);

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
            _id: "01",
            EmailChatWith: "email1@gmail.com",
            avatar: "bell",
            Name: "SoyNombre1",
            ListOfMessages: mensajes_chat,
        },
        {
            _id: "02",
            EmailChatWith: "email2@gmail.com",
            avatar: "bell",
            Name: "SoyNombre2",
            ListOfMessages: mensajes_chat,
        },
        {
            _id: "03",
            EmailChatWith: "email3@gmail.com",
            avatar: "bell",
            Name: "SoyNombre3",
            ListOfMessages: mensajes_chat,
        },
    ];
      
  
    

    const CambiarAChat = (auxemail) => {
        console.log("Email actual ", props.user.Email );
        console.log("Debo irme al chat con: ", auxemail);
    };

     async function Getchat(email){
        console.log("AQUIIIEmail actual ", email );
        let ArrChats= new Array();

        let allChat= new AllChats()//Login
        const ret = await  allChat.GetChats(email)
     
     
      let ArrNames=new Array();

         let count=0;
         console.log("contador "+ret.ListOfChats.length);

     const x =  await ret.ListOfChats.forEach( async (element) => {
       // console.log(JSON.stringify(element));
      //    console.log(element.EmailChatWith);
          
      let ArrInfoChatWith=new Array();
          console.log("Chats**" +element.EmailChatWith)
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
        
        console.log("contador "+count);
         if((ret.ListOfChats.length-1)==count){
            console.log("TERMINOOOO");
            SetChatWithNameAndAvatar(ArrChats,ret);
        }
        
         count++;
      });

      console.log("fin ");
    };

    function SetChatWithNameAndAvatar(ArrInfo,AllChats){
        ChatNewArr=new  Array();
      

            console.log("for each");
        ArrInfo.forEach(userInfo => {
            console.log("id"+userInfo[4]);   
            console.log("Nombre "+userInfo[1]);  
            console.log("avatar "+userInfo[2].Path);     
            console.log("avatar2 "+userInfo[2]);     
            console.log("email "+userInfo[0]);    
            console.log("mensajes "+userInfo[3]);   
         //  let chataux=(new Chat(+userInfo[4].Path,userInfo[1],userInfo[2].Path,userInfo[0],userInfo[3].Path));
          //  console.log("chat aux "+JSON.stringify(chataux));
          let auxC=  new Chat();            
          auxC._id=userInfo[4];            
          auxC.Name=userInfo[1]; 
          auxC.Picture=userInfo[2].Path;
          auxC.EmailChatWith=userInfo[0]; 
          auxC.ListOfMessages=userInfo[3];
          console.log("chat  "+ auxC.Name);
          console.log("chat  "+JSON.stringify(auxC));
          ChatNewArr.push(auxC);
        });
        console.log("chat completo "+JSON.stringify(ChatNewArr));
        AllChats.ListOfChats=ChatNewArr;
       console.log("RET BIEN "+JSON.stringify(AllChats));
       console.log("********************************") 
       setChats(AllChats);
       console.log("var antes "+auxRender);
       setAuxrender(true);           
       console.log("var"+auxRender);  
       console.log("ahora debe renderizar");
          
    }


    async function GetName(email){
        console.log("checar user "+email)
        let UserChatWith= new User()//Login    
        const userInfoofChat = await  UserChatWith.GetUserInformation(email)
        console.log("Su nombre es**************" +userInfoofChat.Name)
        return userInfoofChat.Name;
    }

    async function GetNames(Array){

       /* Array.forEach(element => {
            console.log("email"+element)
            let UserChatWith= new User()//Login    
            const userInfoofChat = await  UserChatWith.GetUserInformation(email)
            console.log("Su nombre es**************" +userInfoofChat.Name)
        });
*/
await Array.forEach( async element => {
    console.log("email"+element)
    let UserChatWith= new User()//Login    
    const userInfoofChat = await  UserChatWith.GetUserInformation(element)
    console.log("Su nombre es**************" +userInfoofChat.Name)
});


      /*  console.log("checar user "+email)
        let UserChatWith= new User()//Login    
        const userInfoofChat = await  UserChatWith.GetUserInformation(email)
        console.log("Su nombre es**************" +userInfoofChat.Name)
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
                        source={item.Picture}
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
            </>
        );
    };

    if(auxRender==false){
    Getchat(props.user.Email)
    }

    console.log(" **VAR CHAR",JSON.stringify(chats));
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