import React from 'react';
import {
    Text,
    View
} from 'react-native';
import * as Components from '../Indice';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StyleSheet } from 'react-native';
import Colors from '../../Estilos/Colores';

const TabNav = createMaterialTopTabNavigator();

export default class ListaContrataciones extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstLoad: true,
            processCount: 0,
            endedCount: 0
        }
    }

    componentDidMount() {
        if(this.state.firstLoad) {
            
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