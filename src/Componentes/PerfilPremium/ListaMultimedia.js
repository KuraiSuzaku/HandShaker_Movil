import {Multimedia} from '../../Classes/Multimedia';
import React, { useState } from 'react';
import {
    View,
} from 'react-native';
import * as Componentes from '../Indice';

export default ListaMultimedia = (props) => {
    const [mediaList, setMediaList] = useState(null);
    const [uploaded, setUploaded] = useState(false);
    const [firstLoad, setFirstLoad] = useState(true);

    const getMultimedia = (user) => {
        MultimediaObject = new Multimedia(user);
        MultimediaObject.GetMultimedia(user)
            .then( (res) => {
                setMediaList(res.ListOfMultimediaItems);
            });
    }

    if(uploaded || firstLoad) { // updates the list if uploaded or first load
        getMultimedia(props.user.Email);
        setUploaded(false);
        setFirstLoad(false);
    }

    return(
        <View>
            {props.owner ? <Componentes.PerfilPremium.NewMultimedia
                uploaded={ uploaded }
                setUploaded={ val => setUploaded(val) }
                { ...props }
            /> : <></>}
            {
                mediaList ?
                mediaList.map((m, i) => (
                    <Componentes.PerfilPremium.Multimedia
                        {...m}
                        />
                )) :
                null
            }
            <Componentes.PerfilTrabajador.FinSeccion />
        </View>
    );
}