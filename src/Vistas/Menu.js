import React, { useState } from 'react';
import {
    ActivityIndicator,
    StyleSheet,
    Text,
    View
} from 'react-native';
import {
    Avatar,
    Icon
} from 'react-native-elements';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import * as Vistas from './Indice';
import * as Componentes from '../Componentes/Indice';
import Colores from '../Estilos/Colores';
import { TouchableOpacity } from 'react-native';

const Drawer = createDrawerNavigator();

export default props => {
    const [logged, setLogged] = useState(false);
    return(
        <Drawer.Navigator 
            drawerContent={(auxprops) => <CustomDrawerContent {...auxprops}
                                        {...props}
                                        logged={ logged }
                                        />}//(props) => {customDrawerContent(props)}}
            initialRouteName='Login'
            drawerContentOptions={{
                activeTintColor: Colores.simbolos,
                inactiveTintColor: Colores.blanco,
                activeBackgroundColor: Colores.fondoOscuro
            }}
            drawerStyle={{
                backgroundColor: Colores.fondoOscuro
            }}
            >
            <Drawer.Screen
                name='Nosotros'
                component={Vistas.Construccion}
                options={{  title: 'Información de la APP',
                            unmountOnBlur: true,
                            drawerIcon: ({ focused, size }) => 
                                <Icon
                                    name='info'
                                    type='font-awesome'
                                    size={25}
                                    color={focused ? Colores.simbolos : Colores.blanco}
                                /> }}
                />
            <Drawer.Screen
                name='Premium'
                options={{  title: 'Volverse Trabajador Premium',
                            unmountOnBlur: true }}
                >
                { ()=><Vistas.PagoAPremium
                user={props.user}/> }
                </Drawer.Screen>
            <Drawer.Screen
                name='Cerrar Sesión'
                options={{  unmountOnBlur: true, 
                            drawerIcon: ({ focused, size }) => 
                                <Icon
                                    name='sign-out'
                                    type='font-awesome'
                                    size={25}
                                    color={focused ? Colores.simbolos : Colores.blanco}
                                /> }}
            >
                {
                    ({ navigation }) => 
                        <Componentes.LogOut
                            {...props}
                            navigation={ navigation }
                            setLogged={ val => setLogged(val) }
                        />
                }
            </Drawer.Screen>
            <Drawer.Screen
                name='Contrataciones'
                options={{ title: 'Ver Contrataciones',
                            unmountOnBlur: true,
                            drawerIcon: ({ focused, size }) => 
                                <Icon
                                    name='book'
                                    type='font-awesome'
                                    size={25}
                                    color={focused ? Colores.simbolos : Colores.blanco}
                                />}}

             >   
              { ({ navigation }) => <Vistas.ListaContratacion
                                {...props}
                                navigation={ navigation }
                            />
                    }
                </Drawer.Screen>
            <Drawer.Screen 
                name='Perfil' 
                initialParams={{
                    profileUser: null,
                    updateProfile: true
                }}
                options={{
                    unmountOnBlur: true,
                    drawerIcon: ({ focused, size }) => 
                        <Icon
                            name='user'
                            type='font-awesome'
                            size={25}
                            color={focused ? Colores.simbolos : Colores.blanco}
                        />
                }}
                >
                { ()=><Validar_perfil
                    {...props}
                /> }
            </Drawer.Screen>
            <Drawer.Screen
                name='Login'
                options={{ swipeEnabled: false,
                    unmountOnBlur: true }}
                >
                    { ({navigation}) =>
                    <Componentes.Login 
                        setUser={ (userLogged)=>props.setUser(userLogged)}
                        navigation={navigation}
                        setLogged={ val => setLogged(val) }
                    /> }
                </Drawer.Screen>
            <Drawer.Screen
                name='Registro'
                component={Componentes.Registro}
                options={{ swipeEnabled: false,
                    unmountOnBlur: true }}
                />
            <Drawer.Screen
                name='Contratar'
                options={{ swipeEnabled: false,
                    unmountOnBlur: true }}
            >

                { ({route})=><Vistas.Contratacion {...props}  route={route}/> 
                
                
                }
            </Drawer.Screen>
            <Drawer.Screen
                name='Home'
                component={Componentes.Home}
                options={{  
                            unmountOnBlur: true }}
                >
                </Drawer.Screen>
            <Drawer.Screen
                name='FilterByCategory'
                component={Componentes.FilterByCategory}
                options={{  
                            unmountOnBlur: true }}
                >
                </Drawer.Screen>
            <Drawer.Screen
                name='Chat'
                component={Vistas.Chat}
                options={{ unmountOnBlur: true }}
            />

            <Drawer.Screen
                name='ListaChats' 
                initialParams={{
                    profileUser: null,
                    updateProfile: true
                }}
                options={{
                    unmountOnBlur: true,
                }}
                >
                { ()=><Vistas.ListaChats
                    {...props}
                /> }
            </Drawer.Screen>
            <Drawer.Screen
                name='TarjetaContratacion' 
                initialParams={{
                    profileUser: null,
                    updateProfile: true
                }}
                options={{
                    unmountOnBlur: true,
                }}
                >
                { ()=><Componentes.TarjetaContratacion.TarjetaContratacion
                    {...props}
                /> }
            </Drawer.Screen>
            <Drawer.Screen
                name='Promociones'
                options={{
                    unmountOnBlur: true
                }}
                >
                { ()=><Vistas.Promociones
                    {...props}
                />}
            </Drawer.Screen>
            <Drawer.Screen
                name='TarjetaDarResena' 
                initialParams={{
                    profileUser: null,
                    updateProfile: true
                }}
                options={{
                    unmountOnBlur: true,
                }}
                >
                { ()=><Componentes.TarjetaDarResena.TarjetaDarResena
                    {...props}
                /> }
            </Drawer.Screen>
            <Drawer.Screen
                name='Notificaciones'
                options={{
                    unmountOnBlur: true
                }}
            >
                {
                    () => <Vistas.Notificaciones {...props} />
                }
            </Drawer.Screen>
        </Drawer.Navigator>
    );
}

const CustomDrawerContent = (props) => {

    const check = (val) => {
        if( val === 'Nosotros'
            || val === 'Cerrar Sesión')
            return true;
            if(props.user.UserType === "Worker")
                if(val === 'Premium')
                return true;
        return false;
    };

    const filteredProps = {
      ...props,
      state: {
        ...props.state,
        routeNames: props.state.routeNames.filter((routeName) => check(routeName)),
        routes: props.state.routes.filter((route) => check(route.name)),
      },
    };

    return (
        <View style={Estilos.MenuContainer}>
            <TouchableOpacity onPress={() => 
                    props.navigation.navigate('Perfil', {
                        profileUser: null,
                        updateProfile: true
                })} 
            >
                <View style={Estilos.MenuHeader}>
                    {
                    <Avatar
                        source={
                            props.logged ?
                            { uri: props.user.ProfilePicture.Path } :
                            require('../../public/Profile/user.png')
                         }
                        rounded
                        size='large'
                    /> 
                    }
                    <Text style={Estilos.UserName}>{props.user.Name} {props.user.LastName}</Text>
                </View>
            </TouchableOpacity>
            <DrawerItemList {...filteredProps} />
        </View>
    );
};

const Validar_perfil = (props) => {
    
    if(props.user.UserType == "PremiumWorker"){
        return (
            <Vistas.PerfilPremium 
                {...props}
            />
        );
    }
    else if(props.user.UserType == "Worker"){
        return (
            <Vistas.PerfilTrabajador

                setUser={props.setUser} //AGREGAR ESTA LINEA A LOS DEMÁS
                user={props.user}

                {...props}

            />
        );
    }
    else if(props.user.UserType == "Client"){
        return (
            <Vistas.PerfilCliente
                {...props}
            />
        );
    }

    return(
        <ActivityIndicator size='large' />
    );
};

const Estilos = StyleSheet.create({
    MenuContainer: {
        marginTop: 40
    },
    MenuHeader: {
        paddingVertical: 5,
        paddingHorizontal: 20,
        paddingBottom: 20,
        borderBottomColor: Colores.etiquetas,
        borderBottomWidth: 2,
        alignItems: 'center'
    },
    UserName: {
        paddingTop: 5,
        color: Colores.blanco
    }
});