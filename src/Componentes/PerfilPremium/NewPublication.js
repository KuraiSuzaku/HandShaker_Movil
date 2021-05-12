import React, { Component, useState } from 'react';
import {
    ActivityIndicator,
    Alert,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import { Card, Text } from 'react-native-elements';
import ImagePicker from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import firebase from '../../../firebase';
import Colores from '../../Estilos/Colores';

export default class NewPublication extends Component {
    constructor() {
        super();
        this.state = {
            publication: null,
            image: {
                uri: null,
                name: null
            }
        };
        this.setPublication = this.setPublication.bind(this);
        this.addImage = this.addImage.bind(this);
        this.publicar = this.publicar.bind(this);
    }

    setPublication(pubContent) {
        this.setState({
            publication: pubContent
        });
    }

    addImage() {
        const options = {
            mediaType: 'photo',
            quality: 1
        };
        ImagePicker.showImagePicker(options, (response) => {
            //console.log('Response = ', response);
      
            if(response.didCancel){
              console.log('User cancelled image picker');
            }
            else{
             this.setState({
                image: {
                    uri: response.uri,
                    name: response.fileName
                }
             });
            }
            const { uri, name } = this.state.image;
            console.log('URI: ' , uri);
            console.log('Nombre: ' , name);
          });

        
    }

    async uploadImage() {

        const { uri, name } = this.state.image;

        try {
            const reference = firebase.storage().ref('test/testImage.jpg');
            //const task = reference.putFile(uri);
        } catch (e) {
            console.log(e);
        }

        /*
        try{
            const { uri, fileName } = this.state.image;
            const response = await fetch(uri);
            const blob = await response.blob();
            console.log('Name: ' , this.state.image);
            console.log('Blob: ' , blob);
            console.log('========== ready to upload ===========')
            console.log('FIREBASE ::::::::::::');
            console.log(firebase.storage());
            await firebase.app().storage().ref('testImage.jpg').putFile(blob);
            //var ref = firebase.storage().ref().child('image.jpg');
            //await ref.put(blob);
        } catch (e) {
            console.log(e);
        }*/

        //await task;

        Alert.alert(
            'Se ha creado la publicación'
          );
    }

    publicar() {
        if(this.state.publication) {
            console.log('---PUBLICAR---');
            this.uploadImage();
        } else {
            Alert.alert('Se necesita un contenido para poder crear una nueva publicación');
        }
    }

    render() {
        console.log('Carga upload aaaaaaaaaaaaaa');
        return(
            <Card containerStyle={Estilos.Tarjeta} >
                <View>
                <TextInput
                    placeholder='¿Desea publicar algo nuevo?'
                    style={Estilos.Input}
                    onChangeText={ pubContent => this.setPublication(pubContent) }
                />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 5}}>
                    <TouchableOpacity onPress={ () => this.addImage() }>
                        <View style={Estilos.Boton}>
                            <Text style={Estilos.EtiquetaBoton}>
                                Agregar imagen
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <Text style={{fontSize: 11}}>
                        {
                            this.state.imageName ?
                            this.state.imageName :
                            null
                        }
                    </Text>
                    <TouchableOpacity onPress={ () => this.publicar() }>
                        <View style={[Estilos.Boton, { backgroundColor: Colores.simbolos }]}>
                            <Text style={Estilos.EtiquetaBoton}>
                                Publicar
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                {this.state.image.uri ?
                    <>
                    <Card.Divider />
                    <Card.Image
                        source={this.state.image}
                        resizeMode='contain'
                        style={{borderRadius: 15}}
                        PlaceholderContent={<ActivityIndicator />}
                    /></> : 
                    null}
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