import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import * as Componentes from '../Indice';
import { Reviews } from '../../Classes/Reviews';

export default ListaResenas = (props) => {
    const [reviews, setReviews] = useState(null);
    const [refresh, setRefresh] = useState(true);

    const getAllReviews = () => {
        /**
         * Carga todas las reseñas del usuario
         * usuario: props.user.Email
         */
        Revs = new Reviews();
        Revs.GetReview(props.user.Email).then( res => {
            console.log('RESPONSE RESEÑAS: ', res);
            setReviews(res);
            setRefresh(false);
        }).catch( err => console.error('Error: ', err) );
    }

    if(refresh) {
        getAllReviews();
        return( <Componentes.Loading /> );
    }



    return(
        <View>
            <Text style={Estilos.Titulo}>
                Reseñas
            </Text>
            <FlatList
                renderItem={ Componentes.PerfilTrabajador.Resena }
                data={ reviews }
            />
            <Componentes.PerfilTrabajador.FinSeccion />
        </View>
    );
}

const Estilos = StyleSheet.create({
    Titulo: {    
        fontSize: 12,
        fontWeight: 'bold',
        marginTop: 12,
        marginLeft: 26,
    },
})