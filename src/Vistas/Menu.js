import React from 'react';
import {
    Text,
    TouchableOpacity,
    useColorScheme,
    View
} from 'react-native';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
//////
import * as Vistas from './Indice';
import * as Componentes from '../Componentes/Indice';
import Colores from '../Estilos/Colores';
import { Avatar } from 'react-native-elements/dist/avatar/Avatar';
//////

const Drawer = createDrawerNavigator();

export default Menu = () => {
    return(
        <Drawer.Navigator 
            drawerContent={props => customDrawerContent(props)}
            initialRouteName='Inicio'
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
                name='Inicio'
                component={Vistas.Construccion}
                />
            <Drawer.Screen 
                name='Perfil' 
                component={Vistas.PerfilPremium}
                />
            <Drawer.Screen
                name='Contrataciones'
                component={Vistas.Construccion}
                options={{
                    title: 'Ver Contrataciones'
                }}
                />
            <Drawer.Screen
                name='Nosotros'
                component={Vistas.Construccion}
                options={{
                    title: 'Sobre Nosotros'
                }}
                />
            <Drawer.Screen
                name='Premium'
                component={Vistas.Construccion}
                options={{
                    title: 'Volverse Trabajador Premium'
                }}
                />
            <Drawer.Screen
                name='Login'
                component={Componentes.Login}
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
            || val === 'Login')
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
        <View style={{flex: 1, marginTop: 40}}>
            <Avatar
                source={require('../../public/Profile/user.png')}
                rounded
                size='medium'
                />
            <Text style={{color:Colores.blanco}}>Usuario</Text>
            <DrawerItemList {...filteredProps} />
            <View>
                <TouchableOpacity onPress={() => {}}>
                    <View>
                        <Text style={{color:Colores.blanco}}>Cerrar Sesión</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}