import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import * as Componentes from '../Indice';
import { Reviews } from '../../Classes/Reviews';

export default ListaResenas = (props) => {
    const [reviews, setReviews] = useState(null);
    const [refresh, setRefresh] = useState(true);

    const getAllReviews = async() => {
        /**
         * Carga todas las reseñas del usuario
         * usuario: props.user.Email
         */
        Revs = new Reviews();
       /* Revs.GetReview(props.user.Email).then( res => {
            console.log('RESPONSE RESEÑAS: ', res.status);
            console.log('RESPONSE RESEÑAS: ', res);
           if(res.status!=2){
           
            setReviews(res.data);
            setRefresh(false);}
        }).catch( err => console.error('Error: ', err) );
    */
   const rev= await  Revs.GetReview(props.user.Email);

 console.log('RESPONSE RESEÑAS: ', rev.status);
 
 console.log('RESPONSE RESEÑAS: ', rev.data.EmailPremiumWorker);
 
 console.log('RESPONSE RESEÑAS: ', rev.data.ListOfReviews[0].RatingStar);
            //console.log('RESPONSE RESEÑAS: ', rev);
            setReviews(rev.data.ListOfReviews);
            setRefresh(false);
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
            {reviews.map( (r, i) => (
                <Componentes.PerfilTrabajador.Resena
                    item={ r }
                />
            ))}
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