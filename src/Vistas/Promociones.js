import React, {useState} from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import {Avatar, Card} from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Colores from '../Estilos/Colores';
import * as Componentes from '../Componentes/Indice';

export default PagoAPremium = (props) => {
    const avatar = require('../../public/Profile/user.png');
    const imgpromocion = require('../../public/Icons/gift.png');
  
    const data = [
        {
            _id: '1',
            Email: 'promocion1@promocion.com',
            Name: 'trabajadorpromocionado1',
            Avatar: 'home',
            Title: 'Promoción 1',
            Content: 'Esta es la descripción de la promoción 1.',
        },
        {
            _id: '2',
            Email: 'promocion2@promocion.com',
            Name: 'trabajadorpromocionado2',
            Avatar: 'home',
            Title: 'Promoción 2',
            Content: 'Esta es la descripción de la promoción 2.',
        },
        {
            _id: '3',
            Email: 'promocion3@promocion.com',
            Name: 'trabajadorpromocionado3',
            Avatar: 'home',
            Title: 'Promoción 3',
            Content: 'Esta es la descripción de la promoción 3.',
        }
    ];
    

    const CambiarAChat = (auxemail) => {
        console.log("Debo mostrar promocion: ", auxemail);
    };

    
    const Item = ({ item, onpress }) => {

        return(
            <TouchableOpacity onPress={onpress}>
                <Card containerStyle={Estilos.Tarjeta}>
                    <View style={{width: '100%'}}>
                        <Image
                            source={imgpromocion}
                            style={Estilos.ContenedorIcono}
                        />
                        <Text style={Estilos.TituloPromocion}>{item.Title}</Text>
                        <Text style={Estilos.TextoPromocion }>{item.Content}</Text>
                    </View>

                    <View style={{flexDirection: 'row', paddingLeft: 10, marginTop: 30}}>
                        <Avatar
                            rounded
                            icon={{name:'user', type:'font-awesome', color:'black'}}
                            source={avatar}
                            size={50}
                            containerStyle={Estilos.ContenedorAvatar}
                        />
                        <View style={{marginLeft: 15}}>
                            <Text style={Estilos.Texto}>{item.Name}</Text>
                            <Text style={Estilos.TextoSecundario}>Ver más</Text>
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
            <Text style={Estilos.Titulo}>PROMOCIONES</Text>   
            </>
        );
    };

    return(
        <SafeAreaProvider style={Estilos.ContenedorApp}>
            <View style={{flex: 1}}>
                <View style={{flex: 0.175}}><Encabezado/></View>
                <View style={{flex: 0.75}}>
                <FlatList
                        data={data}
                        renderItem={renderItem}
                        containerStyle={Estilos.ScrollView}
                        contentContainerStyle={{flexGrow: 1}}
                    />
                </View> 
                <View style={{flex: 0.075}}><Componentes.Navegacion/></View>
            </View> 
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
    ContenedorIcono: {
        backgroundColor: 'white',
        alignSelf: 'center',
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
    TituloPromocion: {    
        fontSize: 36,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    Texto: {
        color: Colores.etiquetas,
        fontSize: 16,   
        textAlign: 'left',
        fontWeight: 'bold',
    },
    TextoPromocion: {
        color: Colores.etiquetas,
        fontSize: 16,   
        textAlign: 'center',
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