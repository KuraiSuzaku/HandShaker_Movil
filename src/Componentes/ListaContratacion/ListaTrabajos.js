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
            firstLoad: true,
            reqCount: 0,
            processCount: 0,
            endedCount: 0
        }
    }

    componentDidMount() {
        if(this.state.firstLoad) {
            /** Cargar trabajos */
            console.log('Usuario: ', this.props.user.Email);
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
                    component={Components.ListaContratacion.Lista}
                    options={{ title: this.state.reqCount + '\nSolicitudes' }}
                />
                <TabNav.Screen
                    name='Proceso'
                    component={Components.ListaContratacion.Lista}
                    options={{ title: this.state.processCount + '\nEn proceso' }}
                />
                <TabNav.Screen
                    name='Finalizadas'
                    component={Components.ListaContratacion.Lista}
                    options={{ title: this.state.endedCount + '\nFinalizadas' }}
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