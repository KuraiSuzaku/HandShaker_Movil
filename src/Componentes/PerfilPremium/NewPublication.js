import React, { Component, useState } from 'react';
import {
    Alert,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import { Card, Text } from 'react-native-elements';
import ImagePicker, { launchImageLibrary } from 'react-native-image-picker';
import Colores from '../../Estilos/Colores';

export default class NewPublication extends Component {
    constructor() {
        super();
        this.state = {
            publication: null,
            image: null
        };
    }

    setPublication(pubContent) {
        this.setState({
            publication: pubContent
        });
    }

    addImage() {
        const options = {
            mediaType: 'photo',
            quality: 1,
            includeBase64: true
        };
        launchImageLibrary(options, res => {
            console.log('Response: ' + res);
        });
    }

    publicar() {
        if(this.state.publication)
            console.log('Publicate ' + this.state.publication);
        else
            Alert.alert('Se necesita un contenido para poder crear una nueva publicación');
    }

    render() {
        return(
            <Card containerStyle={Estilos.Tarjeta} >
                <View>
                <TextInput
                    placeholder='¿Desea publicar algo nuevo?'
                    style={Estilos.Input}
                    onChangeText={ pubContent => this.setPublication(pubContent) }
                />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <TouchableOpacity onPress={ () => this.addImage() }>
                        <View style={Estilos.Boton}>
                            <Text style={Estilos.EtiquetaBoton}>
                                Agregar imagen
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={ () => this.publicar() }>
                        <View style={[Estilos.Boton, { backgroundColor: Colores.simbolos }]}>
                            <Text style={Estilos.EtiquetaBoton}>
                                Publicar
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </Card>
        );
    }
};

const Estilos = StyleSheet.create({
    Tarjeta: {
        borderRadius: 20,
        padding: 10
    },
    Input: {
        borderWidth: 1,
        borderColor: Colores.etiquetas,
        borderRadius: 25,
        fontSize: 12,
        paddingVertical: 0,
        paddingHorizontal: 20,
        margin: 5
    },
    Boton: {
        backgroundColor: Colores.fondoBotonOscuro,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 25
    },
    EtiquetaBoton: {
        color: Colores.letrasSobreNegro,
        fontSize: 12
    }
});