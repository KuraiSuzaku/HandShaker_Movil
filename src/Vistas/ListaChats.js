import React, {useState} from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';
import {Avatar, Card} from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Colores from '../Estilos/Colores';
import * as Componentes from '../Componentes/Indice';

export default PagoAPremium = (props) => {
    const avatar = require('../../public/Profile/user.png');

    const mensajes_chat = [
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

    const lista_chats = [
        {
            _id: "01",
            EmailChatWith: "email1@gmail.com",
            avatar: "bell",
            nombre: "SoyNombre1",
            ListaDeMensajes: mensajes_chat,
        },
        {
            _id: "02",
            EmailChatWith: "email2@gmail.com",
            avatar: "bell",
            nombre: "SoyNombre2",
            ListaDeMensajes: mensajes_chat,
        },
        {
            _id: "03",
            EmailChatWith: "email3@gmail.com",
            avatar: "bell",
            nombre: "SoyNombre3",
            ListaDeMensajes: mensajes_chat,
        },
    ];
      
    const chats = (
        {
            _id: "iddelusuario",
            Email: "emaildelusuario@email.com",
            ListaDeChats: lista_chats,
        }
    );
    

    const CambiarAChat = (auxemail) => {
        console.log("Debo irme al chat con: ", auxemail);
    };

    
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
                        <Text style={Estilos.TextoSecundario}>{item.ListaDeMensajes[lastElement].MessageText}</Text>
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

    return(
        <SafeAreaProvider style={Estilos.ContenedorApp}>
            <FlatList
            ListHeaderComponent={<Encabezado/>}
                data={chats.ListaDeChats}
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