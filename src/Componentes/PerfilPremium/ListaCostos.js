import React from 'react';
import { View } from 'react-native';
import * as Componentes from '../Indice';

export default ListaCostos = ({ owner,
                                costos}) => {
    return(
        <View>
            { owner ? <Componentes.PerfilPremium.NewProduct /> : <></> }
            {
                costos.map((c, i) => (
                    <Componentes.PerfilPremium.Costo
                        titulo={c.titulo}
                        icono={c.icono}
                        descripcion={c.descripcion}
                        precio={c.precio}
                        />
                ))
            }
            <Componentes.PerfilTrabajador.FinSeccion />
        </View>
    );
}