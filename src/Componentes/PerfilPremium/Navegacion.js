import React from 'react';
import { StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
//////
import Colores from '../../Estilos/Colores';
import * as Componentes from '../Indice';
//////

const Pestañas = createMaterialTopTabNavigator();

export default Navegacion = (props) => {
    return(
        <Pestañas.Navigator
            initialRouteName='Publicaciones'
            lazy={true}
            tabBarOptions={{
                style: Estilos.BarraPestañas,
                tabStyle: Estilos.Pestañas,
                labelStyle: Estilos.EtiquetasPestañas,
                activeTintColor: Colores.simbolos,
                inactiveTintColor: Colores.negro,
                indicatorStyle: { backgroundColor: Colores.simbolos }
            }}
            >
            <Pestañas.Screen name='Publicaciones'>
                {() => <Componentes.PerfilPremium.ListaPublicacion
                        {...props}
                        />}
            </Pestañas.Screen>
            <Pestañas.Screen name='Multimedia'>
                {() => <Componentes.PerfilPremium.ListaMultimedia
                        {...props}
                        />}
            </Pestañas.Screen>
            <Pestañas.Screen name='Contacto'>
                {() => <Componentes.PerfilTrabajador.Contacto
                        {...props}
                        />}
            </Pestañas.Screen>
            <Pestañas.Screen name='Costos'>
                {() => <Componentes.PerfilPremium.ListaCostos
                        {...props}
                        />}
            </Pestañas.Screen>
            <Pestañas.Screen name='Resenas' options={{title: 'Reseñas'}}>
                {() => <Componentes.PerfilTrabajador.ListaResenas
                        {...props}
                        />}
            </Pestañas.Screen>
        </Pestañas.Navigator>
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