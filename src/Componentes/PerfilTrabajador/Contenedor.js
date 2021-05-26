import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/core';
import {
    ActivityIndicator,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native';
import * as Componentes from '../Indice';
import {User} from '../../Classes/User';
import {Worker} from '../../Classes/Worker';
import {PremiumWorker} from '../../Classes/PremiumWorker';
import { Icon } from 'react-native-elements';
import Colors from '../../Estilos/Colores';

export default Contenedor = (props) => {
    const navigation = useNavigation();
    const route = useRoute();
    const [profileUser, setProfileUser] = useState(null);
    const [owner, setOwner] = useState(false);

    useEffect(() => {
        if(!profileUser || route.params.updateProfile) {
            if(!route.params.profileUser || route.params.profileUser == props.user.Email) {
                setOwner(true);
                setProfileUser(props.user);
                navigation.setParams({ updateProfile: false });
            } else {
                setOwner(false);/*
                const userObject = new User(route.params.profileUser); // Lee info del usuario de la bd para conseguir tipo de usuario
                userObject.GetUserInformation(route.params.profileUser).then( res => {
                    if(userObject.isPremium) {
                        console.log('ESTA ENTRANDO PREMIUM');
                        let PremiumWorkerObject = new PremiumWorker(route.params.profileUser);
                        PremiumWorkerObject.GetPremiumWorkerInformation(PremiumWorkerObject).then((res) => {
                            const PremiumWorkerObject=res;
                            setProfileUser({...PremiumWorkerObject});
                            console.log('PERFIL DE: ', profileUser);
                        });
                    } else {
                        console.log('FLAG: ', userObject)
                        console.log('ESTA ENTRANDO WORKER');
                        let WorkerObject = new Worker(route.params.profileUser);
                        WorkerObject.GetWorkerInformation(WorkerObject).then((res) => {
                            const WorkerObject=res;
                            setProfileUser({...WorkerObject});
                        });
                    }
                }).catch( err => console.error(err));*/
                userObject = { isPremium: true };
                if(userObject.isPremium) {
                    let PremiumWorkerObject = new PremiumWorker(route.params.profileUser);
                    PremiumWorkerObject.GetPremiumWorkerInformation(PremiumWorkerObject).then((res) => {
                        const PremiumWorkerObject=res;
                        setProfileUser({...PremiumWorkerObject});
                        navigation.setParams({ updateProfile: false });
                    });
                } else {
                    let WorkerObject = new Worker(route.params.profileUser);
                    WorkerObject.GetWorkerInformation(WorkerObject).then((res) => {
                        const WorkerObject=res;
                        setProfileUser({...WorkerObject});
                        navigation.setParams({ updateProfile: false });
                    });
                }
            }
        }
    }, [route.params.updateProfile]);

    const checkPremium = () => {
        if(profileUser.isPremium) {
            console.log('ESTA ENTRANDO NAVEGACION PREMIUM');
            return(<Componentes.PerfilPremium.Navegacion {...props} user={profileUser} owner={owner} />);
        } else {
            console.log('ESTA ENTRANDO NAVEGACION WORKER');
            return(<Componentes.PerfilTrabajador.Navegacion {...props} />); // <<< Navegación del perfil trabajador normal
        }
    }

    return(
        <>
        {
            !route.params.updateProfile && profileUser ?
            <View style={Estilos.Contenido}>
                <ScrollView>
                    <Componentes.PerfilTrabajador.EncabezadoPerfil 
                        {...props}
                        user={profileUser}
                    />
                    {checkPremium()}
                    {
                        !owner ?
                        <View style={Estilos.ChatView} >
                            <TouchableOpacity onPress={() => {
                                navigation.navigate('Chat', {
                                    toUser: profileUser.Email,
                                    fromUser: props.user.Email
                                })
                            }} >
                                <Icon
                                    name='wechat'
                                    type='font-awesome'
                                    size={50}
                                    color={Colors.simbolos}
                                    containerStyle={Estilos.ChatIconContainer}
                                />
                            </TouchableOpacity>
                        </View> :
                        null
                    }
                </ScrollView>
            </View> :
            <ActivityIndicator style={Estilos.Contenido} size='large' />
        }
        </>
    );
};

// ESTILOS
const Estilos = StyleSheet.create({
    Contenido: {
        flex: 10,
    },
    ChatView: {
        height: '100%',
        position: 'absolute',
        alignSelf: 'flex-end',
        paddingTop: 15,
        paddingRight: 15
    },
    ChatIconContainer: {
        padding: 10,
        borderRadius: 100,
        backgroundColor: Colors.fondoOscuro
    }
});