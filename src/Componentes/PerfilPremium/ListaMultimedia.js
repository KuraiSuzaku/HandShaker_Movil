import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import * as Componentes from '../Indice';
import Colores from '../../Estilos/Colores';

export default ListaMultimedia = ({ multimedia }) => {
    return(
        <View>
            {
                multimedia.map((m, i) => (
                    <Componentes.PerfilPremium.Multimedia
                        {...m}
                        />
                ))
            }
            <Text style={Estilos.EtiquetaFinal}>No hay más multimedia</Text>
        </View>
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