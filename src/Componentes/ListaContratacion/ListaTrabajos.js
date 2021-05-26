import React from 'react';
import * as Components from '../Indice';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StyleSheet, View } from 'react-native';
import Colors from '../../Estilos/Colores';

const TabNav = createMaterialTopTabNavigator();

export default class ListaTrabajos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstLoad: true
        }
    }

    componentDidMount() {
        if(this.state.firstLoad) {
            /** Cargar trabajos */
            console.log('Usuario: ', this.props.route.params.userEmail);
            this.setState({
                firstLoad: false
            });
        }
    }

    render() {
        if(this.state.firstLoad)
            return( <Components.Loading /> );
        return(
            <TabNav.Navigator
                initialRouteName='Proceso'
                tabBarOptions={{
                    style: Estilos.TabBar,
                    indicatorStyle: Estilos.TabIndicator,
                    activeTintColor: Colors.simbolos,
                    inactiveTintColor: Colors.negro
                }}
            >
                <TabNav.Screen
                    name='Solicitudes'
                    component={() => <View/>}
                    options={{ title: 'x\nSolicitudes' }}
                />
                <TabNav.Screen
                    name='Proceso'
                    component={() => <View/>}
                    options={{ title: 'x\nEn proceso' }}
                />
                <TabNav.Screen
                    name='Finalizadas'
                    component={() => <View/>}
                    options={{ title: 'x\nFinalizadas' }}
                />
            </TabNav.Navigator>
        );
    }
}

const Estilos = StyleSheet.create({
    TabBar: {
        backgroundColor: Colors.fondo,
        borderBottomWidth: 2,
        borderColor: Colors.separador,
        maxHeight: 100
    },
    TabIndicator: {
        backgroundColor: Colors.simbolos,
        marginBottom: 10
    }
});