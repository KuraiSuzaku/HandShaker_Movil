import React from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import {
    Card,
    Text,
    Image,
} from 'react-native-elements';

export default AcercaDe = ({acercade}) => {
    
    return(
        <View>
            <Text style={Estilos.Titulo}>
                Acerca De <Text>{acercade.nombre}</Text>
            </Text>
            <Card containerStyle={Estilos.Tarjeta}>
                <Text>{acercade.informacion}</Text>
                    <Image
                        source={acercade.imagen}
                        style={Estilos.Imagen}
                    />
            </Card>
        </View>
    );
}


// ESTILOS
const Estilos = StyleSheet.create({
    Titulo: {    
        fontSize: 12,
        fontWeight: 'bold',
        marginTop: 12,
        marginLeft: 26,
    },
    Tarjeta: {
        borderRadius: 20,
        paddingVertical: 10,
        flexDirection: 'row',
    },
    Imagen: {
        flex: 1,
        width: '100%',
        height: 300,
    },
});