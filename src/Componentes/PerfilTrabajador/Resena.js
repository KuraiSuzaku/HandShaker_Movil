import React from 'react';
import { ImageEditor, StyleSheet, View } from 'react-native';
import {
    Avatar,
    Card,
    Rating,
    Text,
} from 'react-native-elements';
import Colores from '../../Estilos/Colores';

export default Resena = ({ item }) => {
    return(
        <Card containerStyle={Estilos.Tarjeta}>
            <View style={Estilos.Contenedor}>
                <View style={Estilos.ContenedorAvatar}>
                    <Avatar
                        rounded
                        source={{ uri: item.userFrom.ProfilePicture[0].Path }}
                        size='medium'
                        />
                </View>
                <View style={Estilos.Datos}>
                    <Rating 
                        imageSize={15} 
                        readonly 
                        startingValue={ item.RatingStar } 
                        ratingColor={Colores.simbolos}
                        ratingBackgroundColor={Colores.fondoOscuro}
                        tintColor={Colores.blanco}
                        type='custom'
                        />
                    <Text style={Estilos.Nombre}>{ item.userFrom.Name }</Text>
                    <Text style={Estilos.Comentario}>{ item.TextReview }</Text>
                    <Text style={[Estilos.Comentario, Estilos.Fecha]}>{ item.DateReview.substring(0,10) }</Text>
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