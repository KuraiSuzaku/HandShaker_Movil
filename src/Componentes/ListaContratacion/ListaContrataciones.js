import React from 'react';
import * as Components from '../Indice';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StyleSheet } from 'react-native';
import Colors from '../../Estilos/Colores';

const TabNav = createMaterialTopTabNavigator();

const data = [
    {
        _id: "60aed1c866c7da22388ffc27",
        Email: "brendasamant@gmail.com",
        Subject: "Contratacion fontaneria",
        Date: "2021-10-04T00:00:00.000Z",
        HiringDate: "2021-10-04T00:00:00.000Z",
        indications: "Qkldsjklsad",
        Status: "Finalizada",
        Addresses: [
            {
                _id: "60aed1c866c7da22388ffc28",
                Address: "Calle Nueva Escocia",
                Number: "1885",
                Reference: "cerca del bosque Colomos",
                LinkMaps: "https://www.google.com/maps/place/CETI+Plantel+Colomos/@20.7022442,-103.3884804,15z/data=!4m5!3m4!1s0x0:0xc4fdd3929a2ecbd1!8m2!3d20.7022442!4d-103.3884804?pli=1&source=sign_in_save_to_list"
            }
        ],
        userWorker: {
            Name: 'Trabajador 3',
            ProfilePicture: {
                Path: ''
            }
        }
    },
    {
        _id: "60aed1d866c7da22388ffc29",
        Email: "brendasamant2@gmail.com",
        Subject: "Contratacion fontaneria",
        Date: "2021-10-04T00:00:00.000Z",
        HiringDate: "2021-10-04T00:00:00.000Z",
        indications: "Qkldsjklsad",
        Status: "Finalizada",
        Addresses: [
            {
                _id: "60aed1d866c7da22388ffc2a",
                Address: "Calle Nueva Escocia",
                Number: "1885",
                Reference: "cerca del bosque Colomos",
                LinkMaps: "https://www.google.com/maps/place/CETI+Plantel+Colomos/@20.7022442,-103.3884804,15z/data=!4m5!3m4!1s0x0:0xc4fdd3929a2ecbd1!8m2!3d20.7022442!4d-103.3884804?pli=1&source=sign_in_save_to_list"
            }
        ],
        userWorker: {
            Name: 'Trabajador 3',
            ProfilePicture: {
                Path: ''
            }
        }
    },
    {
        _id: "60aed31166c7da22388ffc2e",
        Email: "WorkerPremium@gmail.com",
        Subject: "Contratacion fontaneria",
        Date: "2021-10-04T00:00:00.000Z",
        HiringDate: "2021-10-04T00:00:00.000Z",
        indications: "Qkldsjklsad",
        Status: "Proceso",
        Addresses: [
            {
                _id: "60aed31166c7da22388ffc2f",
                Address: "Calle Nueva Escocia",
                Number: "1885",
                Reference: "cerca del bosque Colomos",
                LinkMaps: "https://www.google.com/maps/place/CETI+Plantel+Colomos/@20.7022442,-103.3884804,15z/data=!4m5!3m4!1s0x0:0xc4fdd3929a2ecbd1!8m2!3d20.7022442!4d-103.3884804?pli=1&source=sign_in_save_to_list"
            }
        ],
        userWorker: {
            Name: 'Trabajador 3',
            ProfilePicture: {
                Path: ''
            }
        }
    },
    {
        _id: "60aed31166c7da22388ffc2e",
        Email: "WorkerPremium@gmail.com",
        Subject: "Contratacion fontaneria",
        Date: "2021-10-04T00:00:00.000Z",
        HiringDate: "2021-10-04T00:00:00.000Z",
        indications: "Qkldsjklsad",
        Status: "Proceso",
        Addresses: [
            {
                _id: "60aed31166c7da22388ffc2f",
                Address: "Calle Nueva Escocia",
                Number: "1885",
                Reference: "cerca del bosque Colomos",
                LinkMaps: "https://www.google.com/maps/place/CETI+Plantel+Colomos/@20.7022442,-103.3884804,15z/data=!4m5!3m4!1s0x0:0xc4fdd3929a2ecbd1!8m2!3d20.7022442!4d-103.3884804?pli=1&source=sign_in_save_to_list"
            }
        ],
        userWorker: {
            Name: 'Trabajador 3',
            ProfilePicture: {
                Path: ''
            }
        }
    },
    {
        _id: "60aed31166c7da22388ffc2e",
        Email: "WorkerPremium@gmail.com",
        Subject: "Contratacion fontaneria",
        Date: "2021-10-04T00:00:00.000Z",
        HiringDate: "2021-10-04T00:00:00.000Z",
        indications: "Qkldsjklsad",
        Status: "Proceso",
        Addresses: [
            {
                _id: "60aed31166c7da22388ffc2f",
                Address: "Calle Nueva Escocia",
                Number: "1885",
                Reference: "cerca del bosque Colomos",
                LinkMaps: "https://www.google.com/maps/place/CETI+Plantel+Colomos/@20.7022442,-103.3884804,15z/data=!4m5!3m4!1s0x0:0xc4fdd3929a2ecbd1!8m2!3d20.7022442!4d-103.3884804?pli=1&source=sign_in_save_to_list"
            }
        ],
        userWorker: {
            Name: 'Trabajador 3',
            ProfilePicture: {
                Path: ''
            }
        }
    },
    {
        _id: "60aed31166c7da22388ffc2e",
        Email: "WorkerPremium@gmail.com",
        Subject: "Contratacion fontaneria",
        Date: "2021-10-04T00:00:00.000Z",
        HiringDate: "2021-10-04T00:00:00.000Z",
        indications: "Qkldsjklsad",
        Status: "Proceso",
        Addresses: [
            {
                _id: "60aed31166c7da22388ffc2f",
                Address: "Calle Nueva Escocia",
                Number: "1885",
                Reference: "cerca del bosque Colomos",
                LinkMaps: "https://www.google.com/maps/place/CETI+Plantel+Colomos/@20.7022442,-103.3884804,15z/data=!4m5!3m4!1s0x0:0xc4fdd3929a2ecbd1!8m2!3d20.7022442!4d-103.3884804?pli=1&source=sign_in_save_to_list"
            }
        ],
        userWorker: {
            Name: 'Trabajador 1',
            ProfilePicture: {
                Path: ''
            }
        }
    },
    {
        _id: "60aed31166c7da22388ffc2e",
        Email: "WorkerPremium@gmail.com",
        Subject: "Contratacion fontaneria",
        Date: "2021-10-04T00:00:00.000Z",
        HiringDate: "2021-10-04T00:00:00.000Z",
        indications: "Qkldsjklsad",
        Status: "Proceso",
        Addresses: [
            {
                _id: "60aed31166c7da22388ffc2f",
                Address: "Calle Nueva Escocia",
                Number: "1885",
                Reference: "cerca del bosque Colomos",
                LinkMaps: "https://www.google.com/maps/place/CETI+Plantel+Colomos/@20.7022442,-103.3884804,15z/data=!4m5!3m4!1s0x0:0xc4fdd3929a2ecbd1!8m2!3d20.7022442!4d-103.3884804?pli=1&source=sign_in_save_to_list"
            }
        ],
        userWorker: {
            Name: 'Trabajador 2',
            ProfilePicture: {
                Path: ''
            }
        }
    },
    {
        _id: "60aed31166c7da22388ffc2e",
        Email: "WorkerPremium@gmail.com",
        Subject: "Contratacion fontaneria",
        Date: "2021-10-04T00:00:00.000Z",
        HiringDate: "2021-10-04T00:00:00.000Z",
        indications: "Qkldsjklsad",
        Status: "Proceso",
        Addresses: [
            {
                _id: "60aed31166c7da22388ffc2f",
                Address: "Calle Nueva Escocia",
                Number: "1885",
                Reference: "cerca del bosque Colomos",
                LinkMaps: "https://www.google.com/maps/place/CETI+Plantel+Colomos/@20.7022442,-103.3884804,15z/data=!4m5!3m4!1s0x0:0xc4fdd3929a2ecbd1!8m2!3d20.7022442!4d-103.3884804?pli=1&source=sign_in_save_to_list"
            }
        ],
        userWorker: {
            Name: 'Trabajador 3',
            ProfilePicture: {
                Path: ''
            }
        }
    }
]

const StatusTypes = ['Proceso', 'Finalizada'];

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
            /** Cargar Contrataciones
             *      Usuario: this.props.user.Email
             */

             let { processCount, endedCount } = this.state;

             data.map((d, i) => { // <<<<<< Cambiar 'data' por la respuesta de la bd
                 if(d.Status == StatusTypes[0])
                     processCount++;
                 else 
                     endedCount++;
             });
             
             this.setState({
                 firstLoad: false,
                 processCount: processCount,
                 endedCount: endedCount,
                 data: data // <<<<< Cambiar segundo 'data' por la respuesta de la bd
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