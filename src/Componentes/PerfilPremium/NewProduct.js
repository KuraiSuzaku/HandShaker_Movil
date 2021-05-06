import React, { Component } from 'react';
import {
    Alert,
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native';
import {
    Button,
    Overlay
} from 'react-native-elements';
import ImagePicker from 'react-native-image-picker';
import Colors from '../../Estilos/Colores';

export default class NewProduct extends Component {
    constructor() {
        super();
        this.state = {
            visible: null,
            name: null,
            price: null,
            image: {
                name: null,
                uri: null
            },
            description: null
        }
        this.addImage = this.addImage.bind(this);
        this.uploadProduct = this.uploadProduct.bind(this);
    }

    addImage() {
        const options = {
            mediaType: 'photo',
            quality: 1,
        };
        ImagePicker.showImagePicker(options, (response) => {
            //console.log('Response = ', response);
            
            if(response.didCancel) {
              console.log('User cancelled image picker');
            } else {
                this.setState({
                    image: {
                        name: null,
                        uri: null
                    }
                });
            }
          });
    }

    uploadProduct() {
        if( !this.state.name
            || !this.state.price
            || !this.state.description) {
            Alert.alert('Todos los campos deben ser llenados para publicar un nuevo producto.');
            return;
        }
        // REGISTRAR NUEVO PRODUCTO
    }

    render() {
        return(
            <>
            <Button
                title='Nuevo Producto o Servicio'
                containerStyle={Estilos.ContenedorComponente}
                buttonStyle={Estilos.Boton}
                titleStyle={Estilos.EtiquetaBoton}
                onPress={() => this.setState({ visible: !this.state.visible})}
                />
            <Overlay isVisible={this.state.visible} onBackdropPress={() => this.setState({ visible: !this.state.visible })} >
                <Text style={[Estilos.Text, { textAlign: 'center' }]}>
                    Nuevo Producto o Servicio
                </Text>
                <View style={{flexDirection: 'row'}}>
                    <View style={{}}>
                        <TextInput
                            placeholder='Nombre del producto'
                            style={[Estilos.Text, Estilos.Input]}
                            onChangeText={ newName => this.setState({ name: newName })}
                            />
                        <Button
                            title='Imagen'
                            buttonStyle={Estilos.BotonForm}
                            titleStyle={Estilos.Text}
                            onPress={() => this.addImage()}
                            />
                        <Text>
                            {
                                this.state.image.name ?
                                this.state.image.name :
                                null
                            }
                        </Text>
                    </View>
                    <View style={{}}>
                        <TextInput
                            placeholder='$ Precio'
                            keyboardType='number-pad'
                            style={[Estilos.Text, Estilos.Input]}
                            onChangeText={ newPrice => this.setState({ price: newPrice })}
                            />
                        <TextInput
                            placeholder='Agregue una descripción de su producto o servicio'
                            multiline={true}
                            style={[Estilos.Text, Estilos.Input]}
                            onChangeText={ newDescr => this.setState({ description: newDescr })}
                            />
                    </View>
                </View>
                <Button
                    title='Publicar'
                    buttonStyle={[Estilos.BotonForm, Estilos.BotonConfirmar]}
                    titleStyle={Estilos.Text}
                    onPress={() => this.uploadProduct()}
                />
            </Overlay>
            </>
        );
    }
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
    BotonForm: {
        backgroundColor: Colors.fondoBotonOscuro,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 25
    },
    BotonConfirmar: {
        backgroundColor: Colors.simbolos
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
        maxWidth: 240,
        paddingVertical: 2
    }
});