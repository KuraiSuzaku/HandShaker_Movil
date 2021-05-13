import React from 'react';
import {
    View,
} from 'react-native';
import Multimedia from '../../Classes/Multimedia';
import * as Componentes from '../Indice';

const getMultimedia = (user) => {
    
    MultimediaObject = new Multimedia(user, null);

    MultimediaObject.getMultimedia(user)
        .then( (res) => {
            console.log(res);
        });

}

export default ListaMultimedia = (props) => {
    //getMultimedia(props.user.Email);
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