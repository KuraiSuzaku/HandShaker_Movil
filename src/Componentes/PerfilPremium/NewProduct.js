import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import {
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native';
import {
    Button,
    Overlay
} from 'react-native-elements';
import Colors from '../../Estilos/Colores';

export default () => {
    const [visible, setVisible] = useState(false);
    const [name, setName] = useState(null);
    const [price, setPrice] = useState(null);
    const [image, setImage] = useState(null);
    const [desciption, setDescription] = useState(null);

    const toggleOverlay = () => {
      setVisible(!visible);
    };

    return(
        <>
        <Button
            title='Nuevo Producto o Servicio'
            containerStyle={Estilos.ContenedorComponente}
            buttonStyle={Estilos.Boton}
            titleStyle={Estilos.EtiquetaBoton}
            onPress={toggleOverlay}
            />
        <Overlay isVisible={visible} onBackdropPress={toggleOverlay} >
            <Text style={[Estilos.Text, { textAlign: 'center' }]}>
                Nuevo Producto o Servicio
            </Text>
            <View style={{flexDirection: 'row'}}>
                <View>
                    <TextInput
                        placeholder='Nombre del producto'
                        style={Estilos.Text}
                        />
                    <Button
                        title='Imagen'
                        style={Estilos.Text}
                        />
                </View>
                <View>
                    <TextInput
                        placeholder='$ Precio'
                        keyboardType='number-pad'
                        />
                    <TextInput
                        placeholder='Agregue una descripción de su producto o servicio'
                        multiline={true}
                        style={Estilos.Text}
                        />
                </View>
            </View>
        </Overlay>
        </>
    );
};

const Estilos = StyleSheet.create({
    Boton: {
        marginTop: 15,
        marginHorizontal: 15,
        backgroundColor: Colors.simbolos,
        paddingVertical: 5,
        paddingHorizontal: 25,
        borderRadius: 25,
    },
    EtiquetaBoton: {
        fontSize: 12,
        color: Colors.letrasSobreNegro
    },
    Text: {
        fontSize: 12
    }
});