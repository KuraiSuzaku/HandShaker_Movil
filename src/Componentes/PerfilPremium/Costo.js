import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Card, Icon, Text } from 'react-native-elements';
import Colors from '../../Estilos/Colores';

export default Costo = (props) => {
    const deletePrice = () => {

        /**
         *  Elimina el producto registrardo
         *  Usuario: props.user.Email
         *  id del producto: props._id
         */
        
    }

    return(
        <Card containerStyle={Estilos.Tarjeta}>
            <View style={Estilos.Contenedor}>
                <View style={Estilos.Presentacion}>
                    <Text style={Estilos.Titulo}>{ props.Name }</Text>
                    <Avatar
                        source={{ uri: props.PictureImage.Path }}
                        size={70}
                        containerStyle={Estilos.ContenedorIcono}
                        avatarStyle={Estilos.Icono}
                        />
                </View>
                <View style={Estilos.Datos}>
                    <Text style={Estilos.Titulo}>${ props.Price }</Text>
                    <Text style={Estilos.Texto}>{ props.Description }</Text>
                </View>
                {
                    props.owner ?
                    <Icon
                        name='trash'
                        type='font-awesome'
                        color={ Colors.etiquetas }
                        size={ 20 }
                        onPress={ deletePrice }
                    /> :
                    null
                }
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
        flex: 1.8,
    },
    Datos: {
        flex: 4,
        paddingHorizontal: 10,
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