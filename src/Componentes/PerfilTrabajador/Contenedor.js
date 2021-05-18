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
    const navigation = useNavigation();
    const route = useRoute();
    let owner = false;

    useEffect(() => {
        console.log('Parametro: ', route.params);
        if(route.params.updateProfile) {
            console.log('Entra a Update');
            if(!route.params.profileUser) {
                console.log('Entra a Owner');
                owner = true;
                setProfileUser(props.user);
            } else {
                userObject = { userType: 'Worker' }; // Lee info del usuario de la bd para conseguir tipo de usuario
                if(userObject.userType) {
                    console.log('Entra a Get Premium');
                    let PremiumWorkerObject = new PremiumWorker(route.params.profileUser);
                    PremiumWorkerObject.GetPremiumWorkerInformation(PremiumWorkerObject).then((res) => {
                        const PremiumWorkerObject=res;
                        setProfileUser({...PremiumWorkerObject});
                    });
                } else {
                    console.log('Entra a Get Worker');
                    let WorkerObject = new Worker(route.params.profileUser);
                    WorkerObject.GetWorkerInformation(WorkerObject).then((res) => {
                        const WorkerObject=res;
                        setProfileUser({...WorkerObject});
                    });
                }
            }
            navigation.setParams({ updateProfile: false });
        }
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
            !route.params.updateProfile ?
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