import React from 'react';
import {
    View,
} from 'react-native';
import * as Componentes from '../Indice';

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
            <Componentes.PerfilTrabajador.FinSeccion />
        </View>
    );
}