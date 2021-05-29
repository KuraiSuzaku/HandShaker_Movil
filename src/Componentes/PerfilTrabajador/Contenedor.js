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
                setOwner(false);
                const userObject = new User(route.params.profileUser); // Lee info del usuario de la bd para conseguir tipo de usuario
                userObject.GetUserInformation(route.params.profileUser).then( res => {
                    if(res.isPremium) {
                        let PremiumWorkerObject = new PremiumWorker(route.params.profileUser);
                        PremiumWorkerObject.GetPremiumWorkerInformation(PremiumWorkerObject).then((res) => {
                            const PremiumWorkerObject=res;
                            setProfileUser({...PremiumWorkerObject});
                        });
                    } else {
                        let WorkerObject = new Worker(route.params.profileUser);
                        WorkerObject.GetWorkerInformation(WorkerObject).then((res) => {
                            const WorkerObject=res;
                            setProfileUser({...WorkerObject});
                        });
                    }
                }).catch( err => console.error(err));
            }
        }
        navigation.setParams({ updateProfile: false });
    }, [route.params.updateProfile]);

    const checkPremium = () => {
        if(profileUser.isPremium) {
            return(<Componentes.PerfilPremium.Navegacion {...props} user={profileUser} owner={owner} />);
        } else {
            return(<Componentes.PerfilTrabajador.Navegacion {...props} user={profileUser} owner={owner}  />); // <<< Navegación del perfil trabajador normal
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
                        user={profileUser} // El que se esta viendo
                        loggedUser={props.user.Email} // el usuario logueado
                        owner={owner}
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