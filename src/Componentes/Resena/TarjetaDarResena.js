import React, {useState} from 'react';
import {StyleSheet, View, Text, ScrollView, Alert} from 'react-native';
import {Avatar, Card, Button, Rating, Input,} from 'react-native-elements';
import Colores from '../../Estilos/Colores';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default Resena = (props) => {
    const avatar = require('../../../public/Profile/user.png');    
    const route= useRoute();

    const [resena, setResena] = useState("");
    const [valoracion, setValoracion] = useState(5);

    const data = {
        EmailWorker: route.params.data.EmailWorker,
        Email:route.params.data.Email,
        ProfilePicture:((route.params.data.EmailWorker === props.user.Email) ? route.params.data.userClient[0].ProfilePicture.Path:route.params.data.userWorker[0].ProfilePicture.Path),
        ID:route.params.data.IDcreated,
        Name:((route.params.data.EmailWorker === props.user.Email) ? route.params.data.userClient[0].Name+" "+route.params.data.userClient[0].LastName:route.params.data.userWorker[0].Name+" "+route.params.data.userWorker[0].LastName),

        IDcreated: route.params.data.IDcreated,
    }

    const onSend = () => {
        console.log("Enviar desmadre wuuu");
        console.log("Resena = ", resena);
        console.log("Valoracion = ", valoracion);
        console.log("Cliente = ", data.Email);
        console.log("Trabajador = ", data.EmailWorker);
    }

    const onCancel = () =>{
        navigation.goBack();
    }

    return(
        <SafeAreaProvider>
            <ScrollView>
            <Card containerStyle={Estilos.Tarjeta}>
                <View>
                    <Text style={Estilos.TextoHeader}>¡HAZ TERMINADO LA CONTRATACIÓN!</Text>
                    <Text style={Estilos.TextoSubHeader}>¿Cómo fue tu servicio?</Text>
                </View>
                <Card.Divider style={Estilos.Separador}/>
                <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 10, marginBottom: 10}}>
                    
                    <View style={{justifyContent: 'center'}}>
                        <Avatar
                            rounded
                            icon={{name:'user', type:'font-awesome', color:'black'}}
                            source={{uri: data.ProfilePicture}}
                            size={50}
                            containerStyle={Estilos.ContenedorAvatar}
                        />
                    </View>
                    <View style={{padding: 10, justifyContent: 'center', maxWidth: "75%"}}>
                        <Text style={Estilos.TextoNombre}>{data.Name}</Text>
                    </View>
                </View>
                <View style={{marginTop: 10, marginBottom: 10}}>
                    <Text style={Estilos.Titulo}>Calificación</Text>
                    <Rating 
                        imageSize={50} 
                        readonly = {false}
                        startingValue={5} 
                        minValue={1}
                        ratingColor={Colores.simbolos}
                        ratingBackgroundColor={Colores.fondoOscuro}
                        tintColor={Colores.fondo}
                        type='custom'
                        onFinishRating={(rating) => {setValoracion(rating)}}
                        style={Estilos.ContenedorComponente}
                    />
                </View>
                <View>
                <Input
                    name='resena'
                    placeholder={'Escriba aqui su reseña, recuerde ser respetuoso y evitar palabras antisonantes \n \n \n \n \n'}
                    style={Estilos.Input}
                    multiline={true}
                    inputContainerStyle={{borderBottomWidth:0}}
                    onChangeText={(inputtexto) =>{setResena(inputtexto)}}
                />
                </View>
                <Card.Divider style={Estilos.Separador}/>
                <View style={{flexDirection: 'row', width: "100%", justifyContent: 'space-evenly'}}>
                    <Button
                        title='Cancelar Reseña'
                        buttonStyle={Estilos.BotonCancelar}
                        titleStyle={Estilos.EtiquetaBoton}
                        onPress={onCancel}
                    />
                    <Button
                        title='Enviar Reseña'
                        buttonStyle={Estilos.BotonEnviar}
                        titleStyle={Estilos.EtiquetaBoton}
                        onPress={onSend}
                    />
                </View>
            </Card>
            </ScrollView>
        </SafeAreaProvider>
    );
}

const Estilos = StyleSheet.create({
    ContenedorApp: {
        flex: 1,
        backgroundColor: Colores.fondo,
    },
    ContenedorComponente: {
        padding:0,
        marginTop: 10,
        marginBottom: 10,
    },
    ContenedorAvatar: {
        backgroundColor: 'gray',
    },
    Tarjeta: {
        borderRadius: 20,
        backgroundColor: Colores.fondo,
    },
    Titulo: {    
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    TextoHeader: {
        color: 'purple',
        fontSize: 32,   
        textAlign: 'center',
        fontWeight: 'bold',
    },
    TextoSubHeader: {
        color: Colores.etiquetas,
        fontSize: 24,   
        textAlign: 'center',
    },
    TextoNombre: {
        color: Colores.etiquetas,
        fontSize: 20,   
        textAlign: 'left',
        fontWeight: 'bold',
    },
    Imagen: {
        flex: 1,
        width: '100%',
        height: 300,
    },
    Input:{
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
        textAlignVertical: 'top',
    },
    BotonEnviar: {
        backgroundColor: 'green',
        borderRadius: 20,
        height: 50,
        width: 130,
        padding: 0,
        margin: 10,
    },
    BotonCancelar: {
        backgroundColor: 'red',
        borderRadius: 20,
        height: 50,
        width: 130,
        padding: 0,
        margin: 10,
    },
    EtiquetaBoton: {
        marginHorizontal: 15,
        marginVertical: 3,
        padding: 0,
        color: Colores.letrasSobreNegro,
        fontSize: 16,
    },
    Separador: {
        height: 2,
        color: Colores.separador,
        marginTop: 10,
        marginBottom: 10,
    },
});