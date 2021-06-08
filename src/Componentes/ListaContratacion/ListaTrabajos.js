import React from 'react';
import * as Components from '../Indice';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StyleSheet } from 'react-native';
import Colors from '../../Estilos/Colores';
import { Hiring } from '../../Classes/Hiring';
import { WorkersHiring } from '../../Classes/WorkersHiring';

const TabNav = createMaterialTopTabNavigator();

const StatusTypes = ['Inicio', 'Proceso', 'Finalizado'];

export default class ListaTrabajos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstLoad: true,
            startCount: 0,
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
           AllJobs.GetJobs(this.props.user.Email).then(  data=> { 
               
            //console.log("--",data);
            if(data=="0"){
                //console.log("no tienes trabajo")
                
                this.setState({
                    firstLoad: false,
                    startCount: 0,
                    processCount: 0,
                    endedCount: 0,
                    data: null 
                });

            }  else{

            //console.log("responde "+ data[0].Email)

            let { startCount, processCount, endedCount } = this.state;

            data.map((d, i) => {
                if(d.Status == StatusTypes[0])
                    startCount++;
                else if(d.Status == StatusTypes[1])
                    processCount++;
                else
                    endedCount++;
            });
            
            this.setState({
                firstLoad: false,
                startCount: startCount,
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
                    name='Solicitudes'
                    options={{ title: this.state.startCount + '\nSolicitudes' }}
                >
                    {
                        ({ navigation }) => <Components.ListaContratacion.Lista
                                navigation= { navigation }
                                data={ this.state.data }
                                type={ StatusTypes[0] }
                                jobs={ true }
                            />
                    }
                </TabNav.Screen>
                <TabNav.Screen
                    name='Proceso'
                    options={{ title: this.state.processCount + '\nEn proceso' }}
                >
                    {
                        ({ navigation }) => <Components.ListaContratacion.Lista
                                navigation= { navigation }
                                data={ this.state.data }
                                type={ StatusTypes[1] }
                                jobs={ true }
                            />
                    }
                </TabNav.Screen>
                <TabNav.Screen
                    name='Finalizados'
                    options={{ title: this.state.endedCount + '\nFinalizadas' }}
                >
                    {
                        ({ navigation }) => <Components.ListaContratacion.Lista
                                navigation= { navigation }
                                data={ this.state.data }
                                type={ StatusTypes[2] }
                                jobs={ true }
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