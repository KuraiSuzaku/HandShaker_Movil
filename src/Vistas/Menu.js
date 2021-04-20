import React from 'react';
import {
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

const Drawer = createDrawerNavigator();

export default props => {
    return(
        <Drawer.Navigator 
            drawerContent={props => customDrawerContent(props)}
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
                name='Perfil' 
                component={Vistas.PerfilPremium}
                options={{
                    drawerIcon: ({ focused, size }) => 
                                        <Icon
                                            name='user'
                                            type='font-awesome'
                                            size={25}
                                            color={focused ? Colores.simbolos : Colores.blanco}
                                        />
                }}
                />
            <Drawer.Screen
                name='Contrataciones'
                component={Vistas.Construccion}
                options={{ title: 'Ver Contrataciones',
                            drawerIcon: ({ focused, size }) => 
                                            <Icon
                                                name='book'
                                                type='font-awesome'
                                                size={25}
                                                color={focused ? Colores.simbolos : Colores.blanco}
                                            />}}
                />
            <Drawer.Screen
                name='Nosotros'
                component={Vistas.Construccion}
                options={{  title: 'Sobre Nosotros',
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
                component={Vistas.Construccion}
                options={{  title: 'Volverse Trabajador Premium',
                            unmountOnBlur: true }}
                />
            <Drawer.Screen
                name='Cerrar Sesión'
                component={Componentes.LogOut}
                options={{  unmountOnBlur: true, 
                            drawerIcon: ({ focused, size }) => 
                                            <Icon
                                                name='sign-out'
                                                type='font-awesome'
                                                size={25}
                                                color={focused ? Colores.simbolos : Colores.blanco}
                                            /> }}
                />
            <Drawer.Screen
                name='Login'
                component={Componentes.Login}
                options={{ swipeEnabled: false,
                    unmountOnBlur: true }}
                />
            <Drawer.Screen
                name='Registro'
                component={Componentes.Registro}
                options={{ swipeEnabled: false,
                    unmountOnBlur: true }}
                />
        </Drawer.Navigator>
    );
}

const customDrawerContent = (props) => {
    const check = (val) => {
        if( val === 'Inicio'
            || val === 'Perfil'
            || val === 'Contrataciones'
            || val === 'Nosotros'
            || val === 'Premium'
            || val === 'Cerrar Sesión')
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
            <View style={Estilos.MenuHeader}>
                <Avatar
                    source={require('../../public/Profile/user.png')}
                    rounded
                    size='large'
                    />
                <Text style={Estilos.UserName}>Usuario</Text>
            </View>
            <DrawerItemList {...filteredProps} />
        </View>
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
    },
    UserName: {
        paddingTop: 5,
        color: Colores.blanco
    }
});