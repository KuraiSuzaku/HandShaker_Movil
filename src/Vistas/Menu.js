import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
//////
import * as Vistas from './Indice';
import * as Componentes from '../Componentes/Indice';
import Colores from '../Estilos/Colores';
//////

const Drawer = createDrawerNavigator();

export default Menu = () => {
    return(
        <Drawer.Navigator 
            initialRouteName='PerfilPremium'
            drawerContentOptions={{
                activeTintColor: Colores.simbolos,
                inactiveTintColor: Colores.blanco,
                activeBackgroundColor: Colores.fondoOscuro
            }}
            drawerStyle={{
                backgroundColor: Colores.fondoOscuro
            }}
            sceneContainerStyle={{
                
            }}
            >
            <Drawer.Screen 
                name='Perfil' 
                component={Vistas.PerfilPremium}
                options={{

                }}
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
        </Drawer.Navigator>
    );
}