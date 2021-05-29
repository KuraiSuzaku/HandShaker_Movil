import React, { useState } from 'react';
import { View } from 'react-native';
import * as Componentes from '../Indice';
import { Prices } from '../../Classes/Prices';

export default ListaCostos = ( { user, owner } ) => {
    const [costos, setCostos] = useState(null);
    const [uploaded, setUploaded] = useState(false);
    const [firstLoad, setFirstLoad] = useState(true);

    getPrices = () => {
        const pricesObj = new Prices(user.Email);
        pricesObj.GetPrice(user.Email)
        .then( res => {
            console.log('Prices Response: ', res);
        }).catch( e => console.error(e) );
    }

    if(firstLoad || uploaded) {
        getPrices();
        setFirstLoad(false);
        setUploaded(false);
    }

    return(
        <View>
            {
                owner ?
                <Componentes.PerfilPremium.NewProduct
                    user={ user }
                    setUploaded={ val => setUploaded(val) }
                /> :
                null
            }
            {
                costos ?
                costos.map((c, i) => (
                    <Componentes.PerfilPremium.Costo
                        {...c}
                        />
                )) :
                null
            }
            <Componentes.PerfilTrabajador.FinSeccion />
        </View>
    );
}