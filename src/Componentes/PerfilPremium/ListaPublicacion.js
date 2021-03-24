import React from 'react';
import {
    View,
} from 'react-native';
import * as Componentes from '../Indice';

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
            <Componentes.PerfilTrabajador.FinSeccion />
        </View>
    );
}