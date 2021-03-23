import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Card, Text } from 'react-native-elements';

export default Costo = ({   titulo,
                            icono,
                            descripcion,
                            precio}) => {
    return(
        <Card containerStyle={Estilos.Tarjeta}>
            <View style={Estilos.Contenedor}>
                <View style={Estilos.Presentacion}>
                    <Text style={Estilos.Titulo}>{titulo}</Text>
                    <Avatar
                        source={icono}
                        size={70}
                        containerStyle={Estilos.ContenedorIcono}
                        avatarStyle={Estilos.Icono}
                        />
                </View>
                <View style={Estilos.Datos}>
                    <Text style={Estilos.Titulo}>${precio}</Text>
                    <Text style={Estilos.Texto}>{descripcion}</Text>
                </View>
            </View>
        </Card>
    );
}
// ESTILOS
const Estilos = StyleSheet.create({
    Tarjeta: {
        borderRadius: 20,
        marginTop: 10,
    },
    Contenedor: {
        flexDirection: 'row',
    },
    Presentacion: {
        flex: 1.2,
    },
    Datos: {
        flex: 4,
        paddingLeft: 10,
    },
    ContenedorIcono: {
        marginTop: 5,
    },
    Icono: {
        borderRadius: 10,
    },
    Titulo: {
        fontSize: 15,
    },
    Texto: {
        fontSize: 12,
        borderWidth: 0,
    },
});