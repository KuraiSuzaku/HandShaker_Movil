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
                                    valoracion,
                                    publicaciones}) => {
    return(
        <View>
            {
                publicaciones.map((p, i) => (
                    <PublicacionPremium
                        avatar={avatar}
                        nombre={nombre}
                        fecha={p.fecha}
                        valoracion={valoracion}
                        contenido={p.contenido}
                        imagen={p.imagen}
                        />
                ))
            }
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