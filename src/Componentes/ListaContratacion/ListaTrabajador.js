import React from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import * as Components from '../Indice';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Colors from '../../Estilos/Colores';

const TabsNav = createMaterialTopTabNavigator();

export default class ListaTrabajador extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstLoad: true
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
            <View style={{ flex: 10 }}>
                <TabsNav.Navigator
                    initialRouteName='Trabajos'
                    lazy={true}
                    tabBarOptions={{
                        style: Estilos.TabBar,
                        labelStyle: Estilos.TabLabel,
                        indicatorStyle: Estilos.TabIndicator
                    }}
                >
                    <TabsNav.Screen
                        name='Trabajos'
                        component={ Components.ListaContratacion.ListaTrabajos }
                        options={{ title: 'Mis Trabajos' }}
                        initialParams={{
                            userEmail: this.props.user.Email
                        }} 
                    />
                    <TabsNav.Screen
                        name='Contrataciones'
                        component={ Components.ListaContratacion.ListaContrataciones }
                        options={{ title: 'Mis Contrataciones' }} 
                        initialParams={{
                            userEmail: this.props.user.Email
                        }}
                    />
                </TabsNav.Navigator>
            </View>
        );
    }
}

const Estilos = StyleSheet.create({
    TabBar: {
        backgroundColor: Colors.fondoOscuro
    },
    TabLabel: {
        color: Colors.blanco
    },
    TabIndicator: {
        backgroundColor: Colors.blanco,
        marginBottom: 5
    }
});