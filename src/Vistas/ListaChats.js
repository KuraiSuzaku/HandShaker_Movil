import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Input, Button, Image} from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MonthPicker from 'react-native-month-year-picker';
import moment from "moment"; 
import Colores from '../Estilos/Colores';
import * as Componentes from '../Componentes/Indice';


export default PagoAPremium = (props) => {
    return(
        <SafeAreaProvider style={Estilos.ContenedorApp}>
            <Componentes.EncabezadoApp />
                <Text>asdasd</Text>
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
        fontWeight: 'bold',
        textAlign: 'center',
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
        left: '3%',
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