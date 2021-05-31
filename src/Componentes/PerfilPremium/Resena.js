import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
    Avatar,
    Card,
    Rating,
    Text,
} from 'react-native-elements';
import Colores from '../../Estilos/Colores';

export default Resena = ({  nombre,
                            valoracion,
                            comentario,
                            fecha,
                            avatar,}) => {
    return(
        <Card containerStyle={Estilos.Tarjeta}>
            <View style={Estilos.Contenedor}>
                <View style={Estilos.ContenedorAvatar}>
                    <Avatar
                        rounded
                        source={avatar}
                        size='medium'
                        />
                </View>
                <View style={Estilos.Datos}>
                    <Rating 
                        imageSize={15} 
                        readonly 
                        startingValue={valoracion} 
                        ratingColor={Colores.simbolos}
                        ratingBackgroundColor={Colores.fondoOscuro}
                        tintColor={Colores.blanco}
                        type='custom'
                        />
                    <Text style={Estilos.Nombre}>{nombre}</Text>
                    <Text style={Estilos.Comentario}>{comentario}</Text>
                    <Text style={[Estilos.Comentario, Estilos.Fecha]}>{fecha}</Text>
                </View>
            </View>
        </Card>
    );
}

const Estilos = StyleSheet.create({
    Tarjeta: {
        borderRadius: 20,
        marginTop: 10,
    },
    Contenedor: {
        flexDirection: 'row',
    },
    ContenedorAvatar: {
        flex: 1,
        justifyContent: 'center',
    },
    Datos: {
        flex: 6,
        alignItems: 'flex-start',
        paddingLeft: 10,
    },
    Nombre: {
        fontSize: 10,
        fontWeight: 'bold',
    },
    Comentario: {
        fontSize: 9,
    },
    Fecha: {
        marginTop: 10,
    },
});