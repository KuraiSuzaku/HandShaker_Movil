import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
    ScrollView,
    StyleSheet,
    View,
    Text,
} from 'react-native';
// ========================
import Colores from '../Estilos/Colores';
import {
    EncabezadoApp,
    EncabezadoPerfil,
    Navegacion,
} from '../Componentes/Index';
// =========================

const Estilos = StyleSheet.create({
    ContenedorApp: {
        flex: 1,
        backgroundColor: Colores.fondo,
    },
    Contenido: {
        flex: 10,
    },
});

export default PerfilTrabajador = () => {
    
    return(
        <SafeAreaProvider style={Estilos.ContenedorApp}>
            <EncabezadoApp />
            <View style={Estilos.Contenido}>
                <ScrollView>
                    <EncabezadoPerfil />
                </ScrollView>
            </View>
            <Text>AAAAAAAAAAAAAAAAAAAAA</Text>
            <Navegacion />
        </SafeAreaProvider>
    );
};