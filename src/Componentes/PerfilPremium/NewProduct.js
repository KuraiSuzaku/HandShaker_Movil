import React, { Component } from 'react';
import ImagenN  from './../../Classes/Image';
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
import ImgToBase64 from 'react-native-image-base64';

export default class NewProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            name: null,
            price: null,
            image: {
                name: null,
                uri: null,
                base64: null
            },
            description: null
        }
    }

    addImage() {
        const options = {
            mediaType: 'photo',
            quality: 1,
        };
        ImagePicker.showImagePicker(options, (response) => {
            if(response.didCancel) {
              //console.log('User cancelled image picker');
            } else {
                ImgToBase64.getBase64String(response.uri)
                .then(base64String => {
                    const base64 = 'data:image/jpg;base64,' + base64String;
                    this.setState({ image: { 
                        name: response.fileName,
                        uri: response.uri,
                        base64: base64 
                    } });
                })
                .catch(err => console.error(err));
            }
          });
    }

     async uploadProduct() {
        console.log("nuevo producto")
        if( !this.state.name
            || !this.state.price
            || !this.state.description) {
            Alert.alert('Todos los campos deben ser llenados para publicar un nuevo producto.');
            return;
        }
            //please add date and hour to the image so there can;t be duplicates
            var date = new Date(); 
                //console.log(this.state.name+" * "+this.state.price+" * "+this.state.description);
                if(this.state.image.name)
                    img=new ImagenN(this.state.image.name, this.state.image.base64);
                else
                    img=new ImagenN("","");
                ItemPriceObject=new ItemPrice(this.state.name,this.state.description,this.state.price,img);
                PriceObject=new Prices(this.props.user.Email,ItemPriceObject);

                const SendPrice= await  PriceObject.AddPrice(PriceObject);
                Alert.alert('Se Agrego correctamente');
                this.setState({
                     visible: false,
                     name: null,
                     price: null,
                     image: {
                         name: null,
                         uri: null,
                         base64: null
                     },
                     description: null
                });
 
                this.props.setUploaded(true);
  

           /*     PriceObject.AddPrice(PriceObject).then(res=>{                     
                   console.log(res)
                              
                }).catch( e => console.error(e) );*/
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
                    <View style={{ maxWidth: '35%' }}>
                        <TextInput
                            placeholder='Nombre del producto'
                            style={[Estilos.Text, Estilos.Input]}
                            value={ this.state.name }
                            onChangeText={ newName => this.setState({ name: newName })}
                            />
                        <Button
                            title='Imagen'
                            buttonStyle={Estilos.BotonForm}
                            titleStyle={Estilos.Text}
                            onPress={() => this.addImage()}
                            />
                        <Text>
                            { this.state.image.name }
                        </Text>
                    </View>
                    <View style={{ maxWidth: '65%' }}>
                        <TextInput
                            placeholder='$ Precio'
                            keyboardType='number-pad'
                            style={[Estilos.Text, Estilos.Input]}
                            value={ this.state.price }
                            onChangeText={ newPrice => this.setState({ price: newPrice })}
                            />
                        <TextInput
                            placeholder='Agregue una descripción de su producto o servicio'
                            multiline={true}
                            style={[Estilos.Text, Estilos.Input]}
                            value={ this.state.description }
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