import React from 'react';
import {
    Text,
    View,
} from 'react-native';
import * as Componentes from '../Indice';

export default ListaPublicacion = ({owner,
                                    avatar,
                                    nombre,
                                    valoracion,
                                    publicaciones}) => {
    return(
        <View>
            {owner ?
            <View>
                <Componentes.PerfilPremium.NewPublication />
            </View> : <></>}
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
            <Componentes.PerfilTrabajador.FinSeccion />
        </View>
    );
}