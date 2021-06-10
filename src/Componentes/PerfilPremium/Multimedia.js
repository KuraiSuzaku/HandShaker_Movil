import React, { useState } from 'react';
import {
    ActivityIndicator,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Card, Icon } from 'react-native-elements';
import Colors from '../../Estilos/Colores';

export default Multimedia = (props) => {
    const [image, setImage] = useState(null);

    const setImageSource = () => {
        setImage({
            name: props.MultimediaImage.Name,
            uri: props.MultimediaImage.Path
        });
    }

    const deleteMedia = () => {
        /**
         * Eliminar multimedia
         * Usuario: props.user.Email
         * ID: props.MultimediaImage._id
         */
        
        props.setUploaded(true);
    }

    if(!image)
        setImageSource();

    return(
        <Card containerStyle={Estilos.Tarjeta}>
            <Card.Image
                source={image}
                resizeMode='contain'
                style={Estilos.Imagen}
                PlaceholderContent={<ActivityIndicator />}
                />
            <View style={{ flexDirection: 'row' }}>
                <Text style={Estilos.Text}>
                    {props.MultimediaText}
                </Text>
            </View>
        </Card>
    );
}

const Estilos = StyleSheet.create({
    Tarjeta: {
        borderRadius: 20,
        paddingVertical: 10,
    },
    Imagen: {
        borderRadius: 15
    },
    Text: {
        flex: 1,
        color: Colors.etiquetas,
        fontSize: 10,
        paddingHorizontal: 15,
        marginTop: 5,
        textAlign: 'center'
    }
})
