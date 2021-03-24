import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import Colores from '../../Estilos/Colores';

export default FinSeccion = () => {
    return(
        <Text style={Estilos.EtiquetaFinal}>No hay más contenido</Text>
    );
}

const Estilos = StyleSheet.create({
    EtiquetaFinal: {
        color: Colores.etiquetas,
        textAlign: 'center',
        marginVertical: 10,
        marginHorizontal: 50,
        padding: 10,
    }
})