import React from 'react';
import {
    View,
} from 'react-native';
import * as Componentes from '../Indice';

export default ListaMultimedia = ({ owner,
                                    multimedia }) => {
    return(
        <View>
            {owner ? <Componentes.PerfilPremium.NewMultimedia /> : <></>}
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