import React from 'react';
import * as Components from '../Indice';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StyleSheet } from 'react-native';
import Colors from '../../Estilos/Colores';
import { WorkersHiring } from '../../Classes/WorkersHiring';
const TabNav = createMaterialTopTabNavigator();

const StatusTypes = ['Proceso', 'Finalizado'];

export default class ListaContrataciones extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstLoad: true,
            processCount: 0,
            endedCount: 0,
            data: null
        }
    }

    componentDidMount() {
        if(this.state.firstLoad) {
               /** Cargar trabajos
             *      Usuario: this.props.user.Email
             */
                let AllJobs= new WorkersHiring()
               AllJobs.GetHiring(this.props.user.Email).then(  data=> { 
                   
                if(data=="0"){
                    console.log("no has contratado")
                    
                    this.setState({
                        firstLoad: false,
                        processCount: 0,
                        endedCount: 0,
                        data: null
                    });
    
                }  else{
                    console.log(" has contratado")
                let { processCount, endedCount } = this.state;
    
                data.map((d, i) => {
                    if(d.Status == StatusTypes[0])
                        processCount++;
                    else
                        endedCount++;
                });
                
                this.setState({
                    firstLoad: false,
                    processCount: processCount,
                    endedCount: endedCount,
                    data: data 
                });
                }
    
    
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
                    options={{ title: this.state.processCount + '\nEn proceso' }}
                >
                    {
                        ({ navigation }) => <Components.ListaContratacion.Lista
                                navigation= { navigation }
                                data={ this.state.data }
                                type={ StatusTypes[0] }
                                jobs={ false }
                            />
                    }
                </TabNav.Screen>
                <TabNav.Screen
                    name='Finalizadas'
                    options={{ title: this.state.endedCount + '\nFinalizadas' }}
                >
                    {
                        ({ navigation }) => <Components.ListaContratacion.Lista
                                navigation= { navigation }
                                data={ this.state.data }
                                type={ StatusTypes[1] }
                                jobs={ false }
                            />
                    }
                </TabNav.Screen>
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