import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
    ScrollView,
    StyleSheet,
    View,
} from 'react-native';
//////
import Colores from '../../Estilos/Colores';
import * as Componentes from '../Indice';
//////
export default Contenedor = (props) => {
    const checkPremium = () => {
        if(props.isPremium)
            return(<Componentes.PerfilPremium.Navegacion {...props} />);
        else
            return(null); // <<< Navegación del perfil trabajador normal
    }
    return(
        <SafeAreaProvider style={Estilos.ContenedorApp}>
            <Componentes.EncabezadoApp />
            <View style={Estilos.Contenido}>
                <ScrollView>
                    <Componentes.PerfilTrabajador.EncabezadoPerfil 
                        {...props}
                        />
                    {checkPremium()}
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
});