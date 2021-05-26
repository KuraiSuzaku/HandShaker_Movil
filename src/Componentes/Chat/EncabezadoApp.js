import React, {useState, Component} from 'react';
import {
    StyleSheet,
    Text,
} from 'react-native';
import {
    Avatar,
    Header,
    Icon,
} from 'react-native-elements';
import { set } from 'react-native-reanimated';
import Colores from '../../Estilos/Colores';
import User from '../../Classes/User';

export default Encabezado = ({route, navigation}) => {
const [Name, setName] = useState("Prubea");
const [Picture, setPicture] = useState(route.params.Avatar);
    // METODOS
    const AbrirMenu = () => {
        navigation.toggleDrawer();
    };





    async function getInfo(){
        console.log("aqui");
        console.log("email tooo "+route.params.toUser)
        let UserChatWith= new User()
        const userInfoofChat = await  UserChatWith.GetUserInformation(route.params.toUser)
        console.log("email tooo "+userInfoofChat.Name) 

       
        setName(userInfoofChat.Name+" "+userInfoofChat.LastName)
         setPicture(userInfoofChat.ProfilePicture.Path)
    }
    //////
    getInfo();
    return(
        <Header
            backgroundColor={Colores.fondoOscuro}
            containerStyle={Estilos.Encabezado}
            leftContainerStyle={Estilos.ContenedorComponente}
            centerContainerStyle={[Estilos.ContenedorComponente, {flex: 5}]}
            rightContainerStyle={Estilos.ContenedorComponente}
            >
            <Icon
                name='bars'
                type='font-awesome'
                size={25}
                color={Colores.blanco}
                containerStyle={Estilos.ContenedorIcono}
                iconStyle={Estilos.Icono}
                onPress={() => AbrirMenu()}
                />
            <Text
                style={Estilos.Nombre}
                >
                    {Name}
            </Text>
            <Avatar
            source={{ uri: Picture }}
            rounded
                />
        </Header>
    );
};
// ESTILOS
const Estilos = StyleSheet.create({
    Encabezado: {
        flexDirection: 'row',
    },
    ContenedorComponente: {
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    Nombre: {
        color: Colores.blanco
    }
});