import React, { useState } from 'react';
import {
    ActivityIndicator,
    StyleSheet,
    Text
} from 'react-native';
import { Card } from 'react-native-elements';
import Colors from '../../Estilos/Colores';

export default Multimedia = (props) => {
    const [image, setImage] = useState(null);
    const setImageSource = () => {
        setImage({
            name: props.MultimediaImage.Name,
            uri: props.MultimediaImage.Path
        });
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
            <Text style={Estilos.Text}>
                {props.MultimediaText}
            </Text>
        </Card>
    );
}

const Estilos = StyleSheet.create({
    Tarjeta: {
        borderRadius: 20,
        padding: 10
    },
    Imagen: {
        borderRadius: 15
    },
    Text: {
        color: Colors.etiquetas,
        fontSize: 10,
        paddingHorizontal: 15,
        marginTop: 5,
        textAlign: 'center'
    }
})
