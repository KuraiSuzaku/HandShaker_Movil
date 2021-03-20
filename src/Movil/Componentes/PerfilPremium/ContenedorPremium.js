import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
    ScrollView,
    StyleSheet,
    View,
} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
//////
import Colores from '../../Estilos/Colores';
import * as Componentes from '../Indice';
import * as Vistas from '../../Vistas/Indice';
//////
// COMPONENTES GLOBALES
const Pestañas = createMaterialTopTabNavigator();
//////
export default PerfilPremium = (props) => {
    return(
        <SafeAreaProvider style={Estilos.ContenedorApp}>
            <Componentes.EncabezadoApp />
            <View style={Estilos.Contenido}>
                <ScrollView>
                    <Componentes.EncabezadoPerfil 
                        {...props}
                        />
                    <Pestañas.Navigator
                        initialRouteName='Publicaciones'
                        tabBarOptions={{
                            style: Estilos.BarraPestañas,
                            tabStyle: Estilos.Pestañas,
                            labelStyle: Estilos.EtiquetasPestañas,
                            activeTintColor: Colores.simbolos,
                            inactiveTintColor: Colores.negro,
                        }}
                        >
                        <Pestañas.Screen
                            name='Publicaciones'
                            component={() => 
                                <Vistas.PublicacionesPremium
                                    {...props}
                                    />}
                            />
                        <Pestañas.Screen
                            name='Multimedia'
                            component={() =>
                                <Componentes.MultimediaPremium
                                    {...props}
                                    />}
                            />
                        <Pestañas.Screen
                            name='Contacto'
                            component={() =>
                                <Componentes.ContactoPremium
                                    {...props}
                                    />}
                            />
                        <Pestañas.Screen
                            name='Costos'
                            component={() =>
                                <Componentes.CostosPremium
                                    {...props}
                                    />}
                            />
                        <Pestañas.Screen
                            name='Reseñas'
                            component={() =>
                                <Componentes.ReseñasPremium
                                    {...props}
                                    />}
                            />
                    </Pestañas.Navigator>
                </ScrollView>
            </View>
            <Componentes.Navegacion />
        </SafeAreaProvider>
    );
};
// ESTILOS
const Estilos = StyleSheet.create({
    ContenedorApp: {
        flex: 1,
        backgroundColor: Colores.fondo,
    },
    Contenido: {
        flex: 10,
    },
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