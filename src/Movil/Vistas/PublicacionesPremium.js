import React from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import {
    Text,
} from 'react-native-elements';
//////
import { PublicacionPremium } from '../Componentes/Indice';
import Colores from '../Estilos/Colores';
//////
export default VistaPublicacion = ({avatar,
                                    nombre,
                                    valoracion}) => {
    return(
        <View>
            <PublicacionPremium
                avatar={avatar}
                nombre={nombre}
                fecha='xx/xx/xxxx'
                valoracion={valoracion}
                contenido='Contenido de la publicacion'
                imagen={require('../../../public/Images/test.jpg')}
                />
            <PublicacionPremium
                avatar={avatar}
                nombre={nombre}
                fecha='xx/xx/xxxx'
                valoracion={valoracion}
                contenido='Contenido de la publicacion'
                />
            <Text style={Estilos.EtiquetaFinal}>No hay más publicaciones</Text>
        </View>
    );
}
// ESTILOS
const Estilos = StyleSheet.create({
    EtiquetaFinal: {
        color: Colores.etiquetas,
        borderTopColor: Colores.separador,
    /*    borderTopWidth: 2,*/
        textAlign: 'center',
        marginVertical: 10,
        marginHorizontal: 50,
        padding: 10,
    }
});