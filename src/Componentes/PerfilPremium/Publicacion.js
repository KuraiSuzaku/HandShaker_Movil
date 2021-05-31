import React from 'react';
import {
    ActivityIndicator,
    StyleSheet,
    View,
} from 'react-native';
import {
    Avatar,
    Card,
    Rating,
    Text,
} from 'react-native-elements';
//////
import Colores from '../../Estilos/Colores';
//////
export default Publicacion = (props, { avatar, valoracion }) => {
    return(
        <Card containerStyle={Estilos.Tarjeta}>
            <View style={Estilos.Encabezado}>
                <Avatar
                    rounded
                    source={{ uri: props.user.ProfilePicture.Path }}
                    size='medium'
                    />
                <View style={Estilos.ContenedorDatos}>
                    <Text style={Estilos.Datos}>{props.user.Name} {props.user.LastName}</Text>
                    <Rating
                        imageSize={15} 
                        readonly 
                        startingValue={valoracion} 
                        ratingColor={Colores.simbolos}
                        ratingBackgroundColor={Colores.fondoOscuro}
                        tintColor={Colores.blanco}
                        type='custom'
                        />
                    <Text style={Estilos.Datos}>{props.DateOfPost.substring(0,10)}</Text>
                </View>
            </View>
            <Text style={Estilos.Contenido}>{props.TextOfPost}</Text>
            {
                props.PicturesOfPost[0].Path ?
                <>
                <Card.Divider style={{ marginTop: 5 }}/>
                <Card.Image
                    source={{ uri: props.PicturesOfPost[0].Path }}
                    resizeMode='contain'
                    style={{borderRadius: 15}}
                    PlaceholderContent={<ActivityIndicator />}
                />
                </> :
                null
            }
        </Card>
    );
}
// ESTILOS
const Estilos = StyleSheet.create({
    Tarjeta: {
        borderRadius: 20,
        padding: 10,
    },
    Encabezado: {
        flexDirection: 'row',
    },
    ContenedorDatos: {
        paddingHorizontal: 15,
    },
    Datos: {
        fontSize: 10,
    },
    Contenido: {
        marginTop: 5,
        fontSize: 11,
    },
});