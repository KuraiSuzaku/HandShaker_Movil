import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
//////
import Colores from '../Estilos/Colores';
//////
// COMPONENTES GLOBALES
const BarraNavegacion = createBottomTabNavigator();
//////
export default BarraNavegacion = () => {
    // ATRIBUTOS
    const notificaciones = 0;
    //////
    return(
        <BarraNavegacion.Navigator
            initialRouteName='Home'
            tabBarOptions={{
                showLabel: false,
                tabStyle: Estilos.BarraNavegacion,
                activeTintColor: Colores.simbolos,
                inactiveTintColor: Colores.blanco,
            }}
            >
            <BarraNavegacion.Screen
                name='Inicio'
                component={PerfilPremium}
                options={{
                    tabBarIcon: () => <Icon name='home' type='font-awesome' color={Colores.simbolos} />
                }}
                />
            <BarraNavegacion.Screen
                name='Promociones'
                component={PerfilPremium}
                options={{
                    tabBarIcon: () => <Icon name='money' type='font-awesome' color={Colores.simbolos} />
                }}
                />
            <BarraNavegacion.Screen
                name='Chats'
                component={PerfilPremium}
                options={{
                    tabBarIcon: () => <Icon name='envelope' type='font-awesome' color={Colores.simbolos} />
                }}
                />
            <BarraNavegacion.Screen
                name='Notificaciones'
                component={PerfilPremium}
                options={{
                    tabBarBadge: notificaciones ? notificaciones : null,
                    tabBarIcon: () => <Icon name='bell' type='font-awesome' color={Colores.simbolos} />
                }}
                />
            <BarraNavegacion.Screen
                name='Ayuda'
                component={PerfilPremium}
                options={{
                    tabBarIcon: () => <Icon name='question' type='font-awesome' color={Colores.simbolos} />
                }}
                />
        </BarraNavegacion.Navigator>
    );
};
// ESTILOS
const Estilos = StyleSheet.create({
  BarraNavegacion: {
    backgroundColor: Colores.fondoOscuro,
    borderBottomWidth: 2,
  },
});