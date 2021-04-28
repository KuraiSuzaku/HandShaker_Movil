import React, { Component, useState } from 'react';
import { PanResponder } from 'react-native';
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
import Colores from '../../Estilos/Colores';

export default class NewPublication extends Component {
    constructor() {
        super();
        this.state = {
            publication: null,
            image: null
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
             this.setState({ fileURL: response.uri,
                 imageName: response.fileName });
            }
          });
    }

    publicar() {
        if(this.state.publication) {
             /*Add a new Post*/
             var date = new Date(); 
             console.log('Publicate ' + publication);
             img=new Image("descripcion","ruta/r");
             PostObbject=new Post(date,publication,img);
             PostsObject=new Posts("605fac174791ea436cc76741",PostObbject);
             PostsObject.AddPost(PostsObject)
        } else {
            Alert.alert('Se necesita un contenido para poder crear una nueva publicación');
        }
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
                                {this.state.imageName ?
                                this.state.imageName :
                                'Agregar imagen'}
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
                {this.state.fileURL ?
                    <>
                    <Card.Divider />
                    <Card.Image
                        uri={this.state.fileURL}
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