import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Card, Input, Text, Button} from 'react-native-elements';
import Colores from '../../Estilos/Colores';

export default EditarContacto = (props) => {
    return(
        <Card containerStyle={Estilos.Tarjeta}>
            <Input 
                name='correo'
                label='Correo'
                labelStyle={Estilos.TextoSecundario}
                placeholder={props.auxCorreo}
                onChangeText={(inputtexto)=>{props.setCorreo(inputtexto)}}
                style={Estilos.Input}
                inputContainerStyle={{borderBottomWidth:0}}
                maxLength={200}
            />
            <Input 
                name='telefono'
                label='Telefono'
                labelStyle={Estilos.TextoSecundario}
                placeholder={props.auxTelefono}
                onChangeText={(inputtexto)=>{props.setTelefono(inputtexto)}}
                keyboardType = 'numeric'
                style={Estilos.Input}
                inputContainerStyle={{borderBottomWidth:0}}
                maxLength={200}
            />
            <Input 
                name='celular'
                label='Celular'
                labelStyle={Estilos.TextoSecundario}
                placeholder={props.auxCelular}
                onChangeText={(inputtexto)=>{props.setCelular(inputtexto)}}
                keyboardType = 'numeric'
                style={Estilos.Input}
                inputContainerStyle={{borderBottomWidth:0}}
                maxLength={200}
            />
            <Input 
                name='domicilio'
                label='Domicilio'
                labelStyle={Estilos.TextoSecundario}
                placeholder={props.auxDomicilio}
                onChangeText={(inputtexto)=>{props.setDomicilio(inputtexto)}}
                style={Estilos.Input}
                inputContainerStyle={{borderBottomWidth:0}}
                maxLength={200}
            />
        </Card>
    );
}

const Estilos = StyleSheet.create({
    Tarjeta: {
        borderRadius: 20,
        paddingVertical: 10,
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
});