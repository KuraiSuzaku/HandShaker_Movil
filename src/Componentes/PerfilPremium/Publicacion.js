import React from 'react';
import {
    ActivityIndicator,
    StyleSheet,
    View,
} from 'react-native';
import {
    Avatar,
    Card,
    Icon,
    Rating,
    Text,
} from 'react-native-elements';
//////
import Colores from '../../Estilos/Colores';
//////
export default Publicacion = (props, { avatar, valoracion }) => {

    const deletePost = () => {
        /**
         * Elimina la publicación
         * Usuario: props.user.Email
         * ID: props._id
         */
        
        props.setUploaded(true);
    }

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
                        style={{ alignItems: 'flex-start' }}
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
        paddingVertical: 10,
    },
    Encabezado: {
        flexDirection: 'row',
    },
    ContenedorDatos: {
        paddingHorizontal: 15,
        flex: 1
    },
    Datos: {
        fontSize: 16,
        //fontWeight: 'bold'
    },
    Contenido: {
        marginTop: 5,
        fontSize: 14,
    },
});