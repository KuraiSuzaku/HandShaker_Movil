import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Card, Text, Input} from 'react-native-elements';
//////////
import Colores from '../../Estilos/Colores';
//////////

export default EditarAcercaDe = ({perfil}) => {

    const texto = "Hola \n\n\naaa"; //Este texto es el que tiene el perfil de trabajador ya escrito y debe obtenerse

    return(
        <Card containerStyle={Estilos.Tarjeta}>
            <Input
                name='texto'
                placeholder={texto}
                style={Estilos.Input}
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
    Imagen: {
        flex: 1,
        width: '100%',
        height: 300,
    },
});