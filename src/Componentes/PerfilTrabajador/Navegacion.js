import React from 'react';
import { StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
//////
import Colores from '../../Estilos/Colores';
import * as Componentes from '../Indice';
//////

const Pestanas = createMaterialTopTabNavigator();

export default Navegacion = (props) => {
    return(
        <Pestanas.Navigator
            initialRouteName='AcercaDe'
            lazy={true}
            tabBarOptions={{
                style: Estilos.BarraPestañas,
                tabStyle: Estilos.Pestañas,
                labelStyle: Estilos.EtiquetasPestañas,
                activeTintColor: Colores.simbolos,
                inactiveTintColor: Colores.negro,
            }}
            >
            <Pestanas.Screen name='AcercaDe' options={{title: 'Acerca De'}}>
                {() => <Componentes.PerfilTrabajador.AcercaDe
                    {...props}
                    />}
            </Pestanas.Screen>
            <Pestanas.Screen name='Contacto'>
                {() => <Componentes.PerfilTrabajador.Contacto
                    {...props}
                    />}
            </Pestanas.Screen>
            <Pestanas.Screen name='Resenas' options={{title: 'Reseñas'}}>
                {() => <Componentes.PerfilTrabajador.ListaResenas
                    {...props}
                    />}
            </Pestanas.Screen>
        </Pestanas.Navigator>
    );
}
// ESTILOS
const Estilos = StyleSheet.create({
    BarraPestañas: {
        height: 20,
        backgroundColor: Colores.fondo,
        borderBottomWidth: 1,
    },
    EtiquetasPestañas: {
        fontSize: 9,
        fontWeight: 'bold',
    },
    Pestañas: {
        padding: 0,
        justifyContent: 'flex-start',
        alignContent: 'center',
    },
});