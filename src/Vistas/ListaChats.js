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
      
    let chats = (
        {
            _id: "iddelusuario",
            Email: "emaildelusuario@email.com",
            ListOfChats: lista_chats,
        }
    );
    

    const CambiarAChat = (auxemail) => {
        console.log("Email actual ", props.user.Email );
        console.log("Debo irme al chat con: ", auxemail);
    };

     async function Getchat(email){
        console.log("AQUIIIEmail actual ", email );
        let ArrChats= new Array();

        let allChat= new AllChats()//Login
     /*   allChat.GetChats(email).then(res=>{       
           // chats.push[res]
              chats.push(res)
              console.log("***********************")
            console.log(JSON.stringify(chats));
            console.log("cada chat " );
            console.log(res.Email)
            ArrChats.push(res);
           //Look at Worker Class, it returns an array of all workers
         /*  res.ListOfChats.forEach(element => {
          
            console.log("Chats**" +element.EmailChatWith)
            let UserChatWith= new User()//Login
            UserChatWith.GetUserInformation(element.EmailChatWith).then(resUser=>{ 

                    console.log("nombre del usuario"+resUser.Name);
             });      
        

        });
        */
        
      /*  });*/

      const ret = await  allChat.GetChats(email)
      console.log(JSON.stringify(chats));
      console.log("********************************") 
      chats=ret;
       
       console.log(" **"+JSON.stringify(chats));
       ArrChats=new Array();
      ArrNames=new Array();

      const x =  await ret.ListOfChats.forEach( async (element) => {
       // console.log(JSON.stringify(element));
      //    console.log(element.EmailChatWith);
        
          console.log("Chats**" +element.EmailChatWith)
          ArrNames.push(element.EmailChatWith)
          let UserChatWith= new User()
          const userInfoofChat = await  UserChatWith.GetUserInformation(element.EmailChatWith)
          console.log(" "+userInfoofChat._id+ "  Su nombre es------  " +userInfoofChat.Name+" su email"+element.EmailChatWith+element.ListOfMessages)
         let Chataux=new Chat(userInfoofChat._id,userInfoofChat.Name,element.EmailChatWith,element.ListOfMessages);
         ArrChats.push(new Chat(userInfoofChat._id,userInfoofChat.Name,element.EmailChatWith,element.ListOfMessages))
      });

      console.log("todos los chats del user "+email)
      console.log(JSON.stringify(ArrChats));

    

    };

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
    lastElement = Object.keys(mensajes_chat).length - 1;

    return(
       
        <TouchableOpacity onPress={onpress}>
                <Card containerStyle={Estilos.Tarjeta}>
                <View style={{flexDirection: 'row', paddingLeft: 10}}>
                    <Avatar
                        rounded
                        icon={{name:'user', type:'font-awesome', color:'black'}}
                        source={avatar}
                        size={50}
                        containerStyle={Estilos.ContenedorAvatar}
                    />
                    <View style={{marginLeft: 15}}>
                        <Text style={Estilos.Texto}>{item.nombre}</Text>
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

    
    Getchat(props.user.Email)
    return(
        <SafeAreaProvider style={Estilos.ContenedorApp}>
            <FlatList
            ListHeaderComponent={<Encabezado/>}
                data={chats.ListOfChats}
                renderItem={renderItem}
                containerStyle={Estilos.ScrollView}
                contentContainerStyle={{flexGrow: 1}}
            ListFooterComponent={<Componentes.Navegacion/>}
            ListFooterComponentStyle={{flex: 1, justifyContent: 'flex-end'}}
            />
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