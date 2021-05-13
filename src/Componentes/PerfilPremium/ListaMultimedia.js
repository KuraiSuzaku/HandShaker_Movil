import React from 'react';
import {
    View,
} from 'react-native';
import * as Componentes from '../Indice';


export default ListaMultimedia = (props) => {
    return(
        <View>
            {props.owner ? <Componentes.PerfilPremium.NewMultimedia {...props} /> : <></>}
            {
                props.multimedia.map((m, i) => (
                    <Componentes.PerfilPremium.Multimedia
                        {...m}
                        />
                ))
            }
            <Componentes.PerfilTrabajador.FinSeccion />
        </View>
    );
}