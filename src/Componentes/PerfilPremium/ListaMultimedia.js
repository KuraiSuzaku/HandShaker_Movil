import {Multimedia} from '../../Classes/Multimedia';
import MultimediaItems from '../../Classes/MultimediaItems';
import React from 'react';
import {
    View,
} from 'react-native';
import * as Componentes from '../Indice';


export default ListaMultimedia = (props) => {
    const getMultimedia = (user) => {

        MultimediaObject = new Multimedia(user);

        MultimediaObject.GetMultimedia(user)
            .then( (res) => {
                console.log(res.ListOfMultimediaItems[0].MultimediaImage);
            });
    
    }
    
    getMultimedia(props.user.Email);
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