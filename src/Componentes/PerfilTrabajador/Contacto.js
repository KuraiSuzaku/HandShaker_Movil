import React from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import {
    Card,
    Text,
} from 'react-native-elements';

export default Contacto = ({contacto}) => {
    return(
        <View>
            <Text style={Estilos.Titulo}>
                Información de contacto
            </Text>
            <Card containerStyle={Estilos.Tarjeta}>
                <Text style={Estilos.Dato}>
                    Correo: <Text>{contacto.correo}</Text>
                </Text>
                <Text style={Estilos.Dato}>
                    Teléfono: <Text>{contacto.telefono}</Text>
                </Text><Text style={Estilos.Dato}>
                    Celular: <Text>{contacto.celular}</Text>
                </Text><Text style={Estilos.Dato}>
                    Domicilio: <Text>{contacto.domicilio}</Text>
                </Text>
            </Card>
            {/*Google Maps*/}
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
    },
    Dato: {
        fontSize: 12,
        fontWeight: 'bold'
    }
});