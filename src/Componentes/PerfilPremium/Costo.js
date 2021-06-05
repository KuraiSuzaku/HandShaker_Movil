import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Card, Text } from 'react-native-elements';

export default Costo = ({   Name,
                            Description,
                            Price,
                            PictureImage
                        }) => {
    return(
        <Card containerStyle={Estilos.Tarjeta}>
            <View style={Estilos.Contenedor}>
                <View style={Estilos.Presentacion}>
                    <Text style={Estilos.Titulo}>{ Name }</Text>
                    <Avatar
                        source={{ uri: PictureImage.Path }}
                        size={70}
                        containerStyle={Estilos.ContenedorIcono}
                        avatarStyle={Estilos.Icono}
                        />
                </View>
                <View style={Estilos.Datos}>
                    <Text style={Estilos.Titulo}>${ Price }</Text>
                    <Text style={Estilos.Texto}>{ Description }</Text>
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