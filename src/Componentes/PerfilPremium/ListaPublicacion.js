import { useNavigation, useRoute } from '@react-navigation/core';
import React, { useState } from 'react';
import {
    Text,
    View,
} from 'react-native';
import { Button } from 'react-native-elements';
import { TabRouter } from 'react-navigation';
import * as Componentes from '../Indice';

export default ListaPublicacion = (props) => {
    const navigation = useNavigation();
    const route = useRoute();
    console.log('Perfil: ', props.user.Email);
    return(
        <View>
            <Button
                onPress={() => {
                    navigation.navigate('Perfil', {
                        profileUser: 'Worker@gmail.com',
                        updateProfile: true
                    });
                }}
                title='Perfil Worker'
            />
            <Button
                onPress={() => {
                    navigation.navigate('Perfil', {
                        profileUser: null,
                        updateProfile: true
                    });
                }}
                title='Perfil Premium (usuario)'
            />
            {props.owner ?
            <View>
                <Componentes.PerfilPremium.NewPublication />
            </View> : <></>}
            {
                props.publicaciones.map((p, i) => (
                    <Componentes.PerfilPremium.Publicacion
                        {...props}
                        {...p}
                        />
                ))
            }
            <Componentes.PerfilTrabajador.FinSeccion />
        </View>
    );
}