import React, { Component } from 'react';
import {
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
import ImagePicker from 'react-native-image-picker';
import Colores from '../../Estilos/Colores';

export default class NewMultimedia extends Component {
    constructor() {
        super();
        this.state = {
            imageName: null,
        };
        this.publish = this.publish.bind(this);
        this.addImage = this.addImage.bind(this);
    }

    addImage() {
        const options = {
            mediaType: 'photo',
            quality: 1,
            includeBase64: true
        };
        ImagePicker.showImagePicker(options, (response) => {
            //console.log('Response = ', response);
            
            if(response.didCancel) {
              console.log('User cancelled image picker');
            } else {
                this.setState({
                    fileURL: response.uri,
                    imageName: response.fileName
                });
            }
          });
    }

    publish() {
        if(this.state.imageName)
            console.log('Publicate ' + this.state.imageName + '\nURI: ' + this.state.fileURL);
        else
            Alert.alert('Necesita seleccionar una imagen antes de poder publicar');
    };

    render() {        
        return(
            <Card containerStyle={Estilos.Tarjeta}>
                <View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
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
                <Text>
                    {
                        this.state.imageName ?
                        this.state.imageName :
                        null
                    }
                </Text>
                <TextInput
                    placeholder='¿Desea agregar una descripción?'
                    style={Estilos.Input}
                    onChangeText={newDescr => this.setState({ description: newDescr })}
                />
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