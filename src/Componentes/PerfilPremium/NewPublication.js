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
import ImgToBase64 from 'react-native-image-base64';
//import storage from '@react-native-firebase/storage';
//import firebase from '../../../firebase';
import Colores from '../../Estilos/Colores';
import { Post } from './../../Classes/Post';
import  ImageN  from '../../Classes/Image';
import { Posts } from './../../Classes/Posts';

export default class NewPublication extends Component {
    constructor(props) {
        super(props);
        this.state = {
            publication: null,
            image: {
                uri: null,
                name: null,
                base64: null
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
            quality: 1,
            maxWidth: 500,
            maxHeight: 500,
            includeBase64: true
        };
        ImagePicker.showImagePicker(options, (response) => {      
            if(response.didCancel){
              //console.log('User cancelled image picker');
            }
            else{
                try {
                    ImgToBase64.getBase64String(response.uri)
                        .then(base64String => {
                            const base64 = 'data:image/jpg;base64,' + base64String;
                            this.setState({
                                image: {
                                    uri: response.uri,
                                    name: response.fileName,
                                    base64: base64
                                }
                             });
                        })
                        .catch(err => console.error(err));
                } catch (e) {
                    //console.log(e);
                }
            }
          });        
    }

    publicar() {
        if(this.state.publication) {
             /*Add a new Post*/
             const { publication, image } = this.state;
             var date = new Date(); 
             //console.log('Publicate ' + publication);
             if(image.uri != null)
                img=new ImageN(image.name, image.base64);
            else
                img=new ImageN("", "");
             PostObbject=new Post(date,publication,img);
             PostsObject=new Posts(this.props.user.Email, PostObbject);
             PostsObject.AddPost(PostsObject).then(res=>{ 
                   Alert.alert('Se Agrego correctamente');
                   this.setState({
                       publication: null,
                       image: {
                           uri: null,
                           name: null,
                           base64: null
                       }
                   });
                   this.props.setUploaded(true);
            });
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
                    value={ this.state.publication }
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
                    <Text style={{fontSize: 11, maxWidth: 100}}>
                        { this.state.image.name }
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
                        source={ this.state.image }
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
        fontSize: 13,
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