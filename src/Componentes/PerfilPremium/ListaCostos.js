import React from 'react';
import { View } from 'react-native';
import * as Componentes from './Indice';

export default ListaCostos = ({costos}) => {
    return(
        <View>
            {
                costos.map((c, i) => (
                    <Componentes.Costo
                        titulo={c.titulo}
                        icono={c.icono}
                        descripcion={c.descripcion}
                        precio={c.precio}
                        />
                ))
            }
        </View>
    );
}