import React from 'react';
import {StyleSheet} from 'react-native';
import {Card, Text, Input} from 'react-native-elements';
import Colores from '../../Estilos/Colores';

export default EditarPerfil = () => {

    profesion = "Obtener profesión";
    descripcion = "Obtener descripción";

    return(
        <Card containerStyle={Estilos.Tarjeta}>
            <Text>Categoría</Text>
            <Input
                name='profesion'
                placeholder={profesion}
                style={Estilos.Input}
                multiline={true}
                inputContainerStyle={{borderBottomWidth:0}}
                maxLength={200}
            />
            <Input
                name='descripcion'
                placeholder={descripcion}
                style={Estilos.Input}
                multiline={true}
                inputContainerStyle={{borderBottomWidth:0}}
                maxLength={200}
            />
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