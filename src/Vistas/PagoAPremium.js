import React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import {Input, Button, Image, Divider} from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import DatePicker from 'react-native-datepicker'
/////////
import Colores from '../Estilos/Colores';
import * as Componentes from '../Componentes/Indice';
/////////

export default Construccion = () => {

    let img_tarjeta = require('../../public/Images/otratarjeta.png');
    const img_handshaker = require('../../public/Icons/handshaker.png');

    return(
        <SafeAreaProvider style={Estilos.ContenedorApp}>
            <Componentes.EncabezadoApp />
            <View style={{flexDirection: 'row', flex: 1, justifyContent: 'space-between', padding: 10, marginLeft: 15, marginRight: 15}}>
                <Image
                    source={img_handshaker}
                    style={Estilos.Icono}
                />
                <Text style={Estilos.Titulo}>
                    Estás a un paso de convertirte en premium
                </Text>
            </View>
            <View style={{flexDirection: 'row', flex: 1, width: "100%", justifyContent: 'space-between', padding: 10, marginLeft: 15, marginRight: 15, marginBottom: 10}}>
                <View style={{flex: 3}}>
                    <Input
                        name='numero_tarjeta'
                        label='Número de Tarjeta'
                        labelStyle={Estilos.TextoSecundario}
                        placeholder='xxxx-xxxx-xxxx-xxxx'
                        style={Estilos.Input}
                        inputContainerStyle={{borderBottomWidth:0}}
                    />  
                </View>
                <View style={{flex: 1, padding: 10, marginTop: 10}}>
                    <Image
                        source={img_tarjeta}
                        style={Estilos.Imagen}
                    />  
                </View>
            </View>
            <View style={{flexDirection: 'row', flex: 1, width: "50%", justifyContent: 'space-between', padding: 10, marginLeft: 15, marginRight: 15, marginBottom: 10}}>
                <Input
                    name='nombre'
                    label='Nombre(s)'
                    labelStyle={Estilos.TextoSecundario}
                    placeholder=''
                    style={Estilos.Input}
                    inputContainerStyle={{borderBottomWidth:0}}
                />
                <Input
                    name='apellidos'
                    label='Apellidos'
                    labelStyle={Estilos.TextoSecundario}
                    placeholder=''
                    style={Estilos.Input}
                    inputContainerStyle={{borderBottomWidth:0}}
                />
            </View>
            <View style={{flexDirection: 'row', flex: 6, justifyContent: 'space-between', padding: 10, marginLeft: 15, marginRight: 15}}>
                <View style={{flexDirection: 'row', flex: 1, justifyContent: 'space-between'}}>
                    <Input
                        name='mes_vencimiento'
                        label='Mes'
                        labelStyle={Estilos.TextoSecundario}
                        placeholder='01'
                        style={Estilos.Input}
                        inputContainerStyle={{borderBottomWidth:0}}
                    />
                    <Input
                        name='año_vencimiento'
                        label='Año'
                        labelStyle={Estilos.TextoSecundario}
                        placeholder=''
                        style={Estilos.Input}
                        inputContainerStyle={{borderBottomWidth:0}}
                    />
                </View>
                <View style={{flex: 1}}>
                    <Input
                        name='codigo_seguridad'
                        label='Código de seguridad'
                        labelStyle={Estilos.TextoSecundario}
                        placeholder=''
                        style={Estilos.Input}
                        inputContainerStyle={{borderBottomWidth:0}}
                    />
                </View>
            </View>
            <Componentes.Navegacion />
        </SafeAreaProvider>
    )
}

const Estilos = StyleSheet.create({
    ContenedorApp: {
        flex: 1,
        backgroundColor: Colores.fondo,
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
    },
    TextoSecundario: {
        color: Colores.etiquetas,
        fontSize: 16,   
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
        backgroundColor: Colores.fondo,
    },
    Imagen: {
        padding: 5,
        width: 80,
        height: 50,
    },
    BotonAutocompletar: {
        left: '145%' ,
        backgroundColor: Colores.fondoBotonOscuro,
        borderRadius: 20,
        height: 55,
        width: 200,
        padding: 0,
    },
    BotonContratar: {
        backgroundColor: Colores.fondoBotonOscuro,
        borderRadius: 20,
        left: '3%',
        height: 60,
        width: 150,
        padding: 0,
    },
    BotonCancelar: {
        backgroundColor: Colores.fondoBotonOscuro,
        borderRadius: 20,
        top: '3%',
        left: '50%',
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