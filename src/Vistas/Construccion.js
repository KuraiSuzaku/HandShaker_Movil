import React from 'react';
import { Text, View } from 'react-native';
import * as Componentes from '../Componentes/Indice';

export default Construccion = () => {
    return(
        <>
        <Componentes.EncabezadoApp />
        <View style={{flex: 10, justifyContent: 'center'}}>
            <Text style={{fontSize: 45, textAlign: 'center', color: '#999'}}>
                Vista en construcción
            </Text>
        </View>
        <Componentes.Navegacion />
        </>
    )
}