import { useNavigation, useRoute } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import {
    ActivityIndicator,
    View,
} from 'react-native';
import { Button } from 'react-native-elements';
import * as Componentes from '../Indice';
import { Posts } from '../../Classes/Posts';

export default ListaPublicacion = (props) => {
    const [postList, setPostList] = useState(null);
    const [firstLoad, setFirstLoad] = useState(true);
    const [uploaded, setUploaded] = useState(false);
    const navigation = useNavigation();

    getPosts = () => {
        console.log('Getting ' + props.user.Email + ' posts');
        const postsObject = new Posts(props.user.Email);
        postsObject.GetPosts(props.user.Email).then( res => {
            setPostList(res.ListOfPosts);
        });
    }

    if(uploaded || firstLoad) {
        getPosts();
        setUploaded(false);
        setFirstLoad(false);
    }

    return(
        <>
        {
            !firstLoad ?
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
                        <Componentes.PerfilPremium.NewPublication 
                            uploaded={ uploaded }
                            setUploaded={ val => setUploaded(val) }
                            { ...props }
                        />
                    </View> :
                    null
                }
                {
                    postList ?
                    postList.slice(0).reverse().map((p, i) => (
                        <Componentes.PerfilPremium.Publicacion
                            {...props}
                            {...p}
                            />
                    )) :
                    null
                }
                <Componentes.PerfilTrabajador.FinSeccion />
            </View> :
            <ActivityIndicator />
        }
        </>
    );
}