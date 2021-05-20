import React, {useState} from 'react';
import {StyleSheet, View, Text, ScrollView, FlatList, StatusBar, TouchableOpacity} from 'react-native';
import {Input, Button, Image, Avatar, Card} from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MonthPicker from 'react-native-month-year-picker';
import moment from "moment"; 
import { Icon } from 'react-native-elements';
import Colores from '../Estilos/Colores';
import * as Componentes from '../Componentes/Indice';

export default PagoAPremium = (props) => {
    const [selectedId, setSelectedId] = useState(null);
    const avatar = require('../../public/Profile/user.png');

    const mensajes_chat = [
        {
            _id: "msg01",
            EmailUserFrom: "Origen1@email.com",
            EmailUserTo: "Destino1@email.com",
            MessageText: "SOY EL MENSAJE 1! :D",
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
            MessageText: "SOY EL MENSAJE 5! :D",
            MessageDate: "05/11/2020"
        },
    ]

    const lista_chats = [
        {
            _id: "01",
            EmailChatWith: "email1@gmail.com",
            avatar: "bell",
            nombre: "SoyNombre1",
            //ListaDeMensajes: mensajes_chat,
        },
        {
            _id: "02",
            EmailChatWith: "email2@gmail.com",
            avatar: "bell",
            nombre: "SoyNombre2",
            //ListaDeMensajes: mensajes_chat,
        },
        {
            _id: "03",
            EmailChatWith: "email3@gmail.com",
            avatar: "bell",
            nombre: "SoyNombre3",
            //ListaDeMensajes: mensajes_chat,
        },
    ];
      
    const chats = [
        {
            _id: "iddelusuario",
            Email: "emaildelusuario",
            ListaDeChats: lista_chats,
        }
    ]

    console.log("Chats: ", chats.ListaDeChats);

    const CambiarAChat = (email) =>{
        console.log("Debo irme al chat con: ", email);
    }

    const Item = ({ item, onPress }) => (
    <TouchableOpacity onPress={() => {onPress}}>
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
                    <Text style={Estilos.TextoSecundario}>{"ASD"}</Text>
                </View>
            </View>
        </Card>
    </TouchableOpacity>
    );

    const renderItem = ({ item }) => {
        return (
            <Item
            item={item}
            onPress={() => CambiarAChat.bind(item.EmailChatWith)}
            cardStyle={Estilos.Tarjeta}
            textStyle={Estilos.Texto}
            />
        );
    };

    return(
        <SafeAreaProvider style={Estilos.ContenedorApp}>
            <FlatList
            ListHeaderComponent={<Componentes.EncabezadoApp/>}
                data={lista_chats}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                extraData={selectedId}
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
    Icono: {
        flex: 1,
        width: 32,
        height: 32,
    },
    Titulo: {    
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    Texto: {
        color: Colores.etiquetas,
        fontSize: 16,   
        textAlign: 'left',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    TextoSecundario: {
        color: Colores.etiquetas,
        fontSize: 14,   
        textAlign: 'left',
        fontWeight: 'normal',
    },
    Input:{
        flex: 1,
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
        textAlignVertical: 'top',
    },
    InputSecundario:{
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
        textAlignVertical: 'top',
    },
    Tarjeta: {
        borderRadius: 20,
    },
    Imagen: {
        padding: 5,
        width: 80,
        height: 50,
    },
    BotonFechaVencimiento: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 0,
        height: 50,
        width: 160,
    },
    BotonHazmePremium: {
        backgroundColor: Colores.fondoBotonOscuro,
        borderRadius: 20,
        height: 60,
        width: 200,
        padding: 0,
    },
    BotonCancelar: {
        backgroundColor: Colores.fondoBotonOscuro,
        borderRadius: 20,
        height: 35,
        width: 120,
        padding: 0,
    },
    EtiquetaBoton: {
        marginHorizontal: 15,
        marginVertical: 3,
        padding: 0,
        color: Colores.letrasSobreNegro,
        fontSize: 18,
    },
    Separador: {
        height: 2,
        color: Colores.separador,
    },
});