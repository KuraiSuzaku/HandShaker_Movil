import React from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import {
    Text,
} from 'react-native-elements';
//////
import * as Componentes from '../Indice';
import Colores from '../../Estilos/Colores';
//////
export default ListaPublicacion = ({avatar,
                                    nombre,
                                    valoracion,
                                    publicaciones}) => {
    return(
        <View>
            {
                publicaciones.map((p, i) => (
                    <Componentes.PerfilPremium.Publicacion
                        avatar={avatar}
                        nombre={nombre}
                        valoracion={valoracion}
                        {...p}
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