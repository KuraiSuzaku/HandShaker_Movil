import React, { Component } from 'react';
import {
    ActivityIndicator,
    Alert,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import {
    Card,
    Text
} from 'react-native-elements';
import { MultimediaItems } from '../../Classes/MultimediaItems';
import { Multimedia } from '../../Classes/Multimedia';
import ImagePicker from 'react-native-image-picker';
import { Image } from './../../Classes/Image';
import ImgToBase64 from 'react-native-image-base64';
import Colores from '../../Estilos/Colores';

export default class NewMultimedia extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uploaded: this.props.uploaded,
            image: {
                description: null,
                name: null,
                uri: null,
                base64: null
            }
        };
        this.publish = this.publish.bind(this);
        this.addImage = this.addImage.bind(this);
    }

    addImage() {
        const options = {
            mediaType: 'photo',
            quality: 1,
            maxWidth: 500,
            maxHeight: 500
        };
        ImagePicker.showImagePicker(options, (response) => {            
            if(response.didCancel) {
              console.log('User cancelled image picker');
            } else {
                try {
                    ImgToBase64.getBase64String(response.uri)
                        .then(base64String => {
                            const base64 = 'data:image/jpg;base64,' + base64String;
                            this.setState({ image: { 
                                description: this.state.image.description,
                                name: response.fileName,
                                uri: response.uri,
                                base64: base64 
                            } });
                        })
                        .catch(err => console.error(err));
                } catch (e) {
                    console.log(e);
                }
            }
        });
    }

    publish() {
        if(typeof this.state.image.uri !== null){
            const { description, name, base64 } = this.state.image;
            var date = new Date();
            img=new Image(name, base64);
            MultimediaItemObject=new MultimediaItems(date, description, img);
            MultimediaObject=new Multimedia(this.props.user.Email, MultimediaItemObject);
            MultimediaObject.AddMultimedia(MultimediaObject).then(res=>{                     
                if  (res.status==200){
                    this.setState(
                        { image: {
                            description: null,
                            name: null,
                            uri: null,
                            base64: null
                        }});
                    this.props.setUploaded(true);
                    Alert.alert('Se Agrego correctamente');
                    }
            })
        }
        else
            Alert.alert('Necesita seleccionar una imagen antes de poder publicar');
    };

    render() {
        return(
            <Card containerStyle={Estilos.Tarjeta}>
                <View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity onPress={ this.addImage }>
                        <View style={Estilos.Boton}>
                            <Text style={Estilos.EtiquetaBoton}>
                                Seleccionar imagen
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={ this.publish }>
                        <View style={[Estilos.Boton, { backgroundColor: Colores.simbolos }]}>
                            <Text style={Estilos.EtiquetaBoton}>
                                Publicar
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <TextInput
                    placeholder='¿Desea agregar una descripción?'
                    style={Estilos.Input}
                    value={this.state.image.description}
                    onChangeText={newDescr => this.setState({ image: {
                        description: newDescr,
                        name: this.state.image.name,
                        uri: this.state.image.uri,
                        base64: this.state.image.base64
                    }})}
                />
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
    Boton: {
        backgroundColor: Colores.fondoBotonOscuro,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 25
    },
    EtiquetaBoton: {
        color: Colores.letrasSobreNegro,
        fontSize: 12
    },
    Input: {
        borderWidth: 1,
        borderColor: Colores.etiquetas,
        borderRadius: 25,
        fontSize: 12,
        paddingVertical: 0,
        paddingHorizontal: 20,
        margin: 5
    }
});