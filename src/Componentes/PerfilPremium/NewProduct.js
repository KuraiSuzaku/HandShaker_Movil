import React, { useState } from 'react';
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

    const GetImage = () => {
        console.log('Get Image');
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
                <View style={{}}>
                    <TextInput
                        placeholder='Nombre del producto'
                        style={[Estilos.Text, Estilos.Input]}
                        onChangeText={setName}
                        />
                    <Button
                        title='Imagen'
                        buttonStyle={Estilos.BotonImagen}
                        titleStyle={Estilos.Text}
                        onPress={GetImage}
                        />
                </View>
                <View style={{}}>
                    <TextInput
                        placeholder='$ Precio'
                        keyboardType='number-pad'
                        style={[Estilos.Text, Estilos.Input]}
                        onChangeText={setPrice}
                        />
                    <TextInput
                        placeholder='Agregue una descripción de su producto o servicio'
                        multiline={true}
                        style={[Estilos.Text, Estilos.Input]}
                        onChangeText={setDescription}
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
    BotonImagen: {
        backgroundColor: Colors.fondoBotonOscuro,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 25
    },
    EtiquetaBoton: {
        fontSize: 12,
        color: Colors.letrasSobreNegro
    },
    Text: {
        fontSize: 12
    },
    Input: {
        borderWidth: 1,
        margin: 5,
        borderRadius: 5,
        maxWidth: 240
    }
});