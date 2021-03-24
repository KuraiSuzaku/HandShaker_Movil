import React from 'react';
import {
    ActivityIndicator,
    StyleSheet,
} from 'react-native';
import { Card } from 'react-native-elements';

export default Multimedia = ({ imagen }) => {
    return(
        <Card containerStyle={Estilos.Tarjeta}>
            <Card.Image
                source={imagen}
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