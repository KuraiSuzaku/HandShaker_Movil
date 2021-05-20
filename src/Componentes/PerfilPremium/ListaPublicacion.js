import { useNavigation, useRoute } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import {
    ActivityIndicator,
    View,
} from 'react-native';
import { Button } from 'react-native-elements';
import * as Componentes from '../Indice';

export default ListaPublicacion = (props) => {
    const [loadView, setLoadView] = useState(false);
    const navigation = useNavigation();

    useEffect(() => {
        
        setLoadView(true);
    }, []);

    return(
        <>
        {
            loadView ?
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
                {
                    props.owner ?
                    <View>
                        <Componentes.PerfilPremium.NewPublication />
                    </View> :
                    null
                }
                {
                    props.publicaciones.map((p, i) => (
                        <Componentes.PerfilPremium.Publicacion
                            {...props}
                            {...p}
                            />
                    ))
                }
                <Componentes.PerfilTrabajador.FinSeccion />
            </View> :
            <ActivityIndicator />
        }
        </>
    );
}