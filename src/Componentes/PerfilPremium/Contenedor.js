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
//////
// COMPONENTES GLOBALES
const Pestañas = createMaterialTopTabNavigator();
//////
export default Contenedor = (props) => {
    return(
        <SafeAreaProvider style={Estilos.ContenedorApp}>
            <Componentes.EncabezadoApp />
            <View style={Estilos.Contenido}>
                <ScrollView>
                    <Componentes.EncabezadoPerfil 
                        {...props}
                        />
                    <Pestañas.Navigator
                        initialRouteName='Resenas'
                        lazy={true}
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
                                <Componentes.PerfilPremium.ListaPublicacion
                                    {...props}
                                    />}
                            />
                       <Pestañas.Screen
                            name='Multimedia'
                            component={() =>
                                <Componentes.PerfilPremium.Multimedia
                                    {...props}
                                    />}
                            />
                        <Pestañas.Screen
                            name='Contacto'
                            component={() =>
                                <Componentes.PerfilPremium.Contacto
                                    {...props}
                                    />}
                            />
                        <Pestañas.Screen
                            name='Costos'
                            component={() =>
                                <Componentes.PerfilPremium.ListaCostos
                                    {...props}
                                    />}
                            />
                        <Pestañas.Screen
                            name='Resenas'
                            component={() =>
                                <Componentes.PerfilPremium.ListaResenas
                                    {...props}
                                    />}
                            options={{title: 'Reseñas'}}
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