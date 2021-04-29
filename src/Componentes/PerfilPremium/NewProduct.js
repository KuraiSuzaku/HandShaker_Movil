import React, { Component } from 'react';
import { Image } from './../../Classes/Image';
import { Prices } from './../../Classes/Prices';
import { ItemPrice } from './../../Classes/ItemPrice';
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
            image: null,
            description: null
        }
        this.addImage = this.addImage.bind(this);
        this.uploadProduct = this.uploadProduct.bind(this);
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

    uploadProduct() {
        if( !this.state.name
            || !this.state.price
            || !this.state.description)
            Alert.alert('Todos los campos deben ser llenados para publicar un nuevo producto.');
            //please add date and hour to the image so there can;t be duplicates
            var date = new Date(); 
            if(typeof this.state.fileURL === 'undefined'){
                console.log(this.state.name+" * "+this.state.price+" * "+this.state.description);
                img=new Image("","");
                ItemPriceObject=new ItemPrice(this.state.name,this.state.description,this.state.price,img);
                PriceObject=new Prices("605fac174791ea436cc76741",ItemPriceObject);
                PriceObject.AddPrice(PriceObject)
             }
            else{            
            console.log(this.state.name+this.state.price+this.state.description+"foto"+this.state.fileURL+this.state.imageName);
            img=new Image("NamePicture","ruta/r");
            ItemPriceObject=new ItemPrice(this.state.name,this.state.description,this.state.price,img);
            PriceObject=new Prices("605fac174791ea436cc76741",ItemPriceObject);
            PriceObject.AddPrice(PriceObject)       
            }             
            return;
        // REGISTRAR NUEVO 
       
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