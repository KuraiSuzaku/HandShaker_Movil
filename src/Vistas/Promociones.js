import React, { useState } from 'react';
import {
    Alert,
    StyleSheet,
    View,
    Text,
    FlatList,
    TextInput,
    TouchableOpacity,
    Image
} from 'react-native';
import {
    Avatar,
    Button,
    Card,
    Overlay
} from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Colores from '../Estilos/Colores';
import * as Componentes from '../Componentes/Indice';

export default PagoAPremium = (props) => {
    const [refresh, setRefresh] = useState(true);

    const avatar = require('../../public/Profile/user.png');
    const imgpromocion = require('../../public/Icons/gift.png');
  
    const data = [
        {
            _id: '1',
            Email: 'promocion1@promocion.com',
            Name: 'trabajadorpromocionado1',
            Avatar: 'home',
            Title: 'Promoción 1',
            Content: 'Esta es la descripción de la promoción 1.',
        },
        {
            _id: '2',
            Email: 'promocion2@promocion.com',
            Name: 'trabajadorpromocionado2',
            Avatar: 'home',
            Title: 'Promoción 2',
            Content: 'Esta es la descripción de la promoción 2.',
        },
        {
            _id: '3',
            Email: 'promocion3@promocion.com',
            Name: 'trabajadorpromocionado3',
            Avatar: 'home',
            Title: 'Promoción 3',
            Content: 'Esta es la descripción de la promoción 3.',
        }
    ];
    
    const getAllPromos = () => {
        /**
         * Obtiene todas las promociones
         */
        setRefresh(false);
    }

    const CambiarAChat = (auxemail) => {
        console.log("Debo mostrar promocion: ", auxemail);
    };

    
    const Item = ({ item, onpress }) => {

        return(
            <TouchableOpacity onPress={onpress}>
                <Card containerStyle={Estilos.Tarjeta}>
                    <View style={{width: '100%'}}>
                        <Image
                            source={imgpromocion}
                            style={Estilos.ContenedorIcono}
                        />
                        <Text style={Estilos.TituloPromocion}>{item.Title}</Text>
                        <Text style={Estilos.TextoPromocion }>{item.Content}</Text>
                    </View>

                    <View style={{flexDirection: 'row', paddingLeft: 10, marginTop: 30}}>
                        <Avatar
                            rounded
                            icon={{name:'user', type:'font-awesome', color:'black'}}
                            source={avatar}
                            size={50}
                            containerStyle={Estilos.ContenedorAvatar}
                        />
                        <View style={{marginLeft: 15}}>
                            <Text style={Estilos.Texto}>{item.Name}</Text>
                            <Text style={Estilos.TextoSecundario}>Ver más</Text>
                        </View>
                    </View>
                </Card>
            </TouchableOpacity>
        );
    };

    const renderItem = ({ item }) => {
        return (
            <Item
            item={item}
            onpress={() => CambiarAChat(item.EmailChatWith)}
            cardStyle={Estilos.Tarjeta}
            textStyle={Estilos.Texto}
            />
        );
    };

    const Container = () => {
        if(refresh) {
            getAllPromos();
            return(<Componentes.Loading/>);
        }
        return(
            <>
            <View style={{ marginBottom: 10 }}>
                <Text style={Estilos.Titulo}>PROMOCIONES</Text>
                <NewButton
                    {...props}
                    setRefresh={ setRefresh }
                />
            </View>
            <View style={{flex: 1}}>
            <FlatList
                    data={data}
                    renderItem={renderItem}
                    containerStyle={Estilos.ScrollView}
                    contentContainerStyle={{flexGrow: 1}}
                />
            </View> 
            </>
        );
    }

    return(
        <SafeAreaProvider style={Estilos.ContenedorApp}>
            <View style={{flex: 1}}>
                <Componentes.EncabezadoApp/>
                <Container />
                <Componentes.Navegacion/>
            </View> 
        </SafeAreaProvider>
    )
}

class NewButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            nombre: null,
            description: null
        }
    }

    toggleVisible() {
        this.setState({
            visible: !this.state.visible
        });
    }

    uploadNewPromo() {

        /**
         * Sube la nueva promoción
         * usuario: props.user.Email
         * titulo: this.state.name
         * descripcion: this.state.description
         */

        this.setState({
            visible: false,
            name: null,
            description: null
        })
        this.props.setRefresh(true);
        alert("Su nueva promoción ha sido publicada");
    }

    confirmUpload() {
        if(!this.state.name || !this.state.description) {
            alert("Se requiere de un título y una descripción para poder publicar una nueva promoción.");
            return;
        }
        Alert.alert("Publicar Promoción", "¿Esta seguro(a) de querer publicar una promoción con los datos ingresados?", [
            {
                text: "Cancelar"
            },
            {
                text: "Confirmar",
                onPress: () => this.uploadNewPromo()
            }
        ])
    }

    render() {
        if(this.props.user.UserType != 'PremiumWorker')
            return null;       
        return(
            <View 
                style={{
                    position: 'absolute',
                    marginTop: 5,
                    marginLeft: 15
                }}>
                <Button
                    title='Nueva'
                    buttonStyle={{
                        backgroundColor: Colores.fondoBotonOscuro,
                        borderRadius: 25,
                        paddingVertical: 5,
                        paddingHorizontal: 15
                    }}
                    titleStyle={{
                        color: Colores.letrasSobreNegro,
                        fontSize: 12
                    }}
                    onPress={ () => this.toggleVisible() }
                />
                <Overlay isVisible={ this.state.visible } onBackdropPress={ () => this.toggleVisible() } >
                    <View style={Estilos.NewPromoView}>
                        <Text style={{ alignSelf: 'center' }}> Nueva Promoción </Text>
                        <TextInput
                            placeholder='Título'
                            value={ this.state.name }
                            onChangeText={ (newName) => this.setState({ name: newName }) }
                            style={Estilos.NewName}
                        />
                        <TextInput
                            multiline={ true }
                            placeholder='Descripción detallada de la promoción'
                            value={ this.state.description }
                            onChangeText={ (text) => this.setState({ description: text }) }
                            style={Estilos.NewName}
                        />
                        <Button
                            title='Publicar'
                            onPress={ () => this.confirmUpload() }
                            containerStyle={Estilos.PostButtonContainer}
                            buttonStyle={Estilos.PostButton}
                            titleStyle={Estilos.PostButtonLabel}
                        />
                    </View>
                </Overlay>
            </View>
        );
    }
}
  

const Estilos = StyleSheet.create({
    ContenedorApp: {
        flex: 1,
        backgroundColor: Colores.fondo,
    },
    ContenedorAvatar: {
        backgroundColor: 'gray',
    },
    ContenedorIcono: {
        backgroundColor: 'white',
        alignSelf: 'center',
    },
    ScrollView: {
        flex: 10,
        width: '100%',
        height: '75%',
    },
    Titulo: {    
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 5
    },
    TituloPromocion: {    
        fontSize: 36,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    Texto: {
        color: Colores.etiquetas,
        fontSize: 16,   
        textAlign: 'left',
        fontWeight: 'bold',
    },
    TextoPromocion: {
        color: Colores.etiquetas,
        fontSize: 16,   
        textAlign: 'center',
    },
    TextoSecundario: {
        color: Colores.etiquetas,
        fontSize: 14,   
        textAlign: 'left',
        fontWeight: 'normal',
    },
    Tarjeta: {
        borderRadius: 20,
    },
    NewPromoView: {
        maxWidth: '95%',
        maxHeight: '80%'
    },
    NewName: {
        borderWidth: 1,
        borderColor: Colores.separador,
        paddingVertical: 0,
        paddingHorizontal: 10,
        borderRadius: 25,
        marginVertical: 10,
    },
    PostButtonContainer: {
        alignSelf: 'center'
    },
    PostButton: {
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 25,
        backgroundColor: Colores.simbolos
    },
    PostButtonLabel: {
        color: Colores.letrasSobreNegro,
        fontSize: 14
    }
});