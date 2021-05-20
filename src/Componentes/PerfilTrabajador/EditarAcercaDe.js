import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Card, Text, Input} from 'react-native-elements';
import Colores from '../../Estilos/Colores';

export default EditarAcercaDe = (props) => {

    return(
        <Card containerStyle={Estilos.Tarjeta}>
            <Input
                name='texto'
                placeholder={props.auxTexto}
                style={Estilos.Input}
                label='Algo acerca de mi'
                onChangeText={(inputtexto)=>{props.setTexto(inputtexto)}}
                labelStyle={Estilos.TextoSecundario}
                multiline={true}
                inputContainerStyle={{borderBottomWidth:0}}
                maxLength={200}
            />
            <Text>Aquí debo subir imag</Text>
        </Card>
    );
}

const Estilos = StyleSheet.create({
    Tarjeta: {
        borderRadius: 20,
        backgroundColor: Colores.fondo,
    },
    Input:{
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
        textAlignVertical: 'top',
        width: '100%',
    },
    TextoSecundario: {
        color: Colores.etiquetas,
        fontSize: 16,   
        textAlign: 'left',
        fontWeight: 'normal',
    },
    Imagen: {
        flex: 1,
        width: '100%',
        height: 300,
    },
});