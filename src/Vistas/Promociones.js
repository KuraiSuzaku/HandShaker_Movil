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
import { PromotionAll } from '../Classes/PromotionAll';
import { Promotion } from '../Classes/Promotion';
import { useNavigation } from '@react-navigation/native';

export default PagoAPremium = (props) => {
    const [refresh, setRefresh] = useState(true);
    const [promos, setPromos] = useState({});
    const avatar = require('../../public/Profile/user.png');
    const imgpromocion = require('../../public/Icons/gift.png');
    const navigation = useNavigation();
  
    let data = [
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
    
    const  getAllPromos = async () => {
        /**
         * Obtiene todas las promociones
        props.user.email 
        */
        let arrayData= new Array();
        let arrayDataAll= new Array();
        let promo = new PromotionAll()      
       const allPromotion= await promo.GetPromotion()
       
       allPromotion.forEach(element => {
       
        console.log(element.EmailPremiumWorker)    
        //console.log(element.userWorker.UserProfile.Name)    
        element.ListOfPromotions.forEach(element2 => {
            var obj = new Object();
            console.log(element2.Title)   
            console.log(element2.Description)   
           let Email=element.userWorker[0].Email
           let  Name= element.userWorker[0].Name
           console.log("em",Email)   
           console.log("em-",Name)  
           let Avatar= element.userWorker[0].ProfilePicture.Path
           let Title = element2.Title
           let Content =element2.Description
         
           obj.Email=Email
           obj.Name=Name
           obj.Avatar=Avatar
           obj.Title=Title
           obj.Content=Content
         
         
           arrayDataAll.push(obj)
        });
      
        });
       // console.log("respuestaaa *"+ JSON.stringify(arrayDataAll))
        data=arrayDataAll;
        setPromos(arrayDataAll)
        setRefresh(false);
    }

    const CambiarAChat = (auxemail) => {
        console.log("Debo mostrar promocion: ", auxemail);
    };

    const toUser = (email) =>{
        navigation.navigate("Perfil", {profileUser: email, updateProfile: true});
    }

    const Item = ({ item, onpress }) => {

        return(
            <Card containerStyle={Estilos.Tarjeta}>
                <View style={{width: '100%'}}>
                    <Image
                        source={imgpromocion}
                        style={Estilos.ContenedorIcono}
                    />
                    <Text style={Estilos.TituloPromocion}>{item.Title}</Text>
                    <Text style={Estilos.TextoPromocion }>{item.Content}</Text>
                </View>
                <TouchableOpacity onPress={() => {toUser(item.Email)}}>
                <View style={{flexDirection: 'row', paddingLeft: 10, marginTop: 30}}>
                    <Avatar
                        rounded
                        icon={{name:'user', type:'font-awesome', color:'black'}}
                        source={{ uri: item.Avatar}}
                        size={50}
                        containerStyle={Estilos.ContenedorAvatar}
                    />
                    <View style={{marginLeft: 15, justifyContent: "center"}}>
                        <Text style={Estilos.Texto}>{item.Name}</Text>
                        <Text style={Estilos.TextoSecundario}>Ver más</Text>
                    </View>
                </View>
                </TouchableOpacity>
            </Card>
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
            <View style={{ marginBottom: 10, marginTop: 10 }}>
                <Text style={Estilos.Titulo}>PROMOCIONES</Text>
                <NewButton
                    {...props}
                    setRefresh={ setRefresh }
                />
            </View>
            <View style={{flex: 1}}>
            <FlatList
                    data={promos}
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

  async  uploadNewPromo() {

        /**AGREEEGAR
         * Sube la nueva promoción
         * usuario: props.user.Email
         * titulo: this.state.name
         * descripcion: this.state.description
         */
        console.log("upload");
        let promo = new PromotionAll()
        promo.EmailPremiumWorker = this.props.user.Email;
        let arrPromos= new Array()
        let promoNew = new Promotion()
        promoNew.Title=this.state.name
        promoNew.Description=this.state.description    
        arrPromos.push(promoNew);
         promo.ListOfPromotions=arrPromos

        const add=  await promo.AddPromotion(promo);

        this.setState({
            visible: false,
            name: null,
            description: null
        })
        this.props.setRefresh(true);
        alert("Su nueva promoción ha sido publicada");
        getAllPromos()
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
                            maxLength={20}
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