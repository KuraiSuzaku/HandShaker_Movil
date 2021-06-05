import React, { useState } from 'react';
import { View } from 'react-native';
import * as Componentes from '../Indice';
import { Prices } from '../../Classes/Prices';

export default ListaCostos = ( { user, owner } ) => {
    const [costos, setCostos] = useState(null);
    const [uploaded, setUploaded] = useState(false);
    const [firstLoad, setFirstLoad] = useState(true);

    getPrices = async () => {
        console.log("holi")
        const pricesObj = new Prices(user.Email);
        const priceObj= await  pricesObj.GetPrice(user.Email)
        priceObj.ListOfPrices.forEach(element => {
    console.log(element.Name)
    console.log(element.Price)
});
        setCostos( priceObj.ListOfPrices)
        
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