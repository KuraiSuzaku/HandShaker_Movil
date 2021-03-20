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
export default PublicacionesPremium = ({nombre,
                                        valoracion,
                                        fecha,
                                        avatar,
                                        contenido,
                                        imagen}) => {
    // METODOS
    const VerificarImagen = () => {
        if(imagen)
            return(<Card.Image
                    source={imagen}
                    style={{borderRadius: 15}}
                    PlaceholderContent={<ActivityIndicator />}
                    />);
        else
            return null;
    }
    //////
    return(
        <Card containerStyle={Estilos.Tarjeta}>
            <View style={Estilos.Encabezado}>
                <Avatar
                    rounded
                    icon={{name:'user', type:'font-awesome', color:'black'}}
                    source={avatar}
                    size='medium'
                    />
                <View style={Estilos.ContenedorDatos}>
                    <Text style={Estilos.Datos}>{nombre}</Text>
                    <Rating 
                        imageSize={15} 
                        readonly 
                        startingValue={valoracion} 
                        ratingColor={Colores.simbolos}
                        ratingBackgroundColor={Colores.fondoOscuro}
                        tintColor={Colores.blanco}
                        type='custom'
                        />
                    <Text style={Estilos.Datos}>{fecha}</Text>
                </View>
            </View>
            <Text style={Estilos.Contenido}>{contenido}</Text>
            <Card.Divider/>
            {VerificarImagen()}
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