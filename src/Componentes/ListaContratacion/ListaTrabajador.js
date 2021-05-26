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
                    <TabsNav.Screen name='Trabajos' options={{ title: 'Mis Trabajos' }} >
                        { 
                            () => <Components.ListaContratacion.ListaTrabajos
                                    {...this.props}
                                />
                        }
                    </TabsNav.Screen>
                    <TabsNav.Screen name='Contrataciones' options={{ title: 'Mis Contrataciones' }} >
                        {
                            () => <Components.ListaContratacion.ListaContrataciones
                                    {...this.props}
                                />
                        }
                    </TabsNav.Screen>
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