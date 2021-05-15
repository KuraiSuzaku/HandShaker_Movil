import React, { useState } from 'react';
import {
    ActivityIndicator,
    StyleSheet,
} from 'react-native';
import { Card } from 'react-native-elements';

export default Multimedia = (props) => {
    const [image, setImage] = useState(null);
    const setImageSource = () => {
        setImage({
            name: props.Name,
            uri: props.Path
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
    }
})
