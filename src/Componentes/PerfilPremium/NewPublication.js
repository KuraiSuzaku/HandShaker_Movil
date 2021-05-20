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
import { Image } from './../../Classes/Image';
import { Posts } from './../../Classes/Posts';

export default class NewPublication extends Component {
    constructor() {
        super();
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
          });        
    }

    async uploadImage() {
        const { uri, name } = this.state.image;

        try {
            //const reference = firebase.storage().ref('test/testImage.jpg');
            //const task = reference.putFile(uri);
            ImgToBase64.getBase64String(uri)
                .then(base64String => {
                    const base64 = 'data:image/jpg;base64,' + base64String
                    this.setState({ image: { base64: base64 } });
                    console.log(this.state.image);
                })
                .catch(err => console.error(err));
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
             /*Add a new Post*/
             if(typeof this.state.fileURL !== 'undefined'){
             publication=this.state.publication
             var date = new Date(); 
             console.log('Publicate ' + publication);
             img=new Image("NamePicture","ruta/r");
             PostObbject=new Post(date,publication,img);
             PostsObject=new Posts("605fac174791ea436cc76741",PostObbject);
             PostsObject.AddPost(PostsObject).then(res=>{            
                if  (res.status==200){
                   Alert.alert('Se Agrego correctamente');
                 }
            })              
            }
            else{
                publication=this.state.publication
                var date = new Date(); 
                console.log('Publicate ' + publication);
                img=new Image("","");
                PostObbject=new Post(date,publication,img);
                PostsObject=new Posts("605fac174791ea436cc76741",PostObbject);
                PostsObject.AddPost(PostsObject).then(res=>{                     
                    if  (res.status==200){
                       Alert.alert('Se Agrego correctamente');
                     }
                })  
    
    
            }
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
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 5}}>
                    <TouchableOpacity onPress={ () => this.addImage() }>
                        <View style={Estilos.Boton}>
                            <Text style={Estilos.EtiquetaBoton}>
                                Agregar imagen
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <Text style={{fontSize: 11, maxWidth: 200}}>
                        {
                            this.state.image.name ?
                            this.state.image.name :
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