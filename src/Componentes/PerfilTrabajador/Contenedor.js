import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/core';
import {
    ScrollView,
    StyleSheet,
    View,
} from 'react-native';
import * as Componentes from '../Indice';
import Worker from '../../Classes/Worker';
import PremiumWorker from '../../Classes/PremiumWorker';
import { ActivityIndicator } from 'react-native';

export default Contenedor = (props) => {
    const [profileUser, setProfileUser] = useState(null);
    const [owner, setOwner] = useState(false);
    const [load, setLoad] = useState(false);
    const navigation = useNavigation();
    const route = useRoute();

    useEffect(() => {
        if(!profileUser || route.params.updateProfile) {
            if(!route.params.profileUser) {
                setOwner(true);
                setProfileUser(props.user);
            } else {
                setOwner(false);
                userObject = { userType: 'PremiumWorker' }; // Lee info del usuario de la bd para conseguir tipo de usuario
                if(userObject.userType == 'PremiumWorker') {
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
            }
        }
        navigation.setParams({
            profileUser: null,
            updateProfile: false
        });
    }, [route.params.updateProfile]);

    const checkPremium = () => {
        if(profileUser.isPremium) {
            return(<Componentes.PerfilPremium.Navegacion {...props} user={profileUser} owner={owner} />);
        } else {
            return(<Componentes.PerfilTrabajador.Navegacion {...props} />); // <<< Navegación del perfil trabajador normal
        }
    }

    return(
        <>
        {
            profileUser ?
            <View style={Estilos.Contenido}>
                <ScrollView>
                    <Componentes.PerfilTrabajador.EncabezadoPerfil 
                        {...props}
                        user={profileUser}
                    />
                    {checkPremium()}
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
});