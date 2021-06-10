import React, {useState} from 'react';

import {StyleSheet, View, Text, ScrollView, ToastAndroid, Alert} from 'react-native';

import {Input, Button, Image} from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {Worker} from './../Classes/Worker'
import AsyncStorage from '@react-native-async-storage/async-storage';

import MonthPicker from 'react-native-month-year-picker';
import moment from "moment"; 
/////////
import Colores from '../Estilos/Colores';
import * as Componentes from '../Componentes/Indice';
import PremiumWorker from '../Classes/PremiumWorker';
import User from '../Classes/User';
/////////

export default PagoAPremium = (props) => {

    let img_otra = require('../../public/Images/otratarjeta.png');
    let img_visa = require('../../public/Images/visa.png');
    let img_mastercard = require('../../public/Images/mastercard.png');
    const img_handshaker = require('../../public/Icons/handshaker.png');
    const [fecha_vencimiento, setFechaVencimiento] = useState(new Date());
    const [state, setState] = useState('no');
    const [img_tarjeta, setImageTarjeta] = useState('otra')

    const [numero, setNumero] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [codigo, setCodigo] = useState("");
    const [contrasenia, setContrasenia] = useState("");

    const navigation = useNavigation();

    const mostrar_picker = () => {
        setState('si');      
    };

    const ocultar_picker = () =>{
        setState('no');
    };

    onValueChange = (event, fecha) => {
         
        const nuevafecha = fecha || fecha_vencimiento;
        ocultar_picker();
        setFechaVencimiento(nuevafecha);
    };

    const HacerPremium = () =>{
        if(ValidarCampos()){
            Alert.alert(
                "¡Está a punto de volverse trabajador premium!",
                "Si la información ingresada es correcta puede continuar sin problemas",
                [
                    {
                    text: "Cancelar",
                    style: "cancel"
                    },
                    { 
                    text: "Hazme Premium", 
                    onPress: async () =>{
                            let WorkerObject = new Worker(props.user.Email);
                                
                            let userObject= new User()
                            userObject.Email=props.user.Email;
                            userObject.Password=contrasenia;
                            let res= await userObject.Login(userObject)
                            
                            if(res.Response.includes("1")){
                    
                                let PremiumWorkerObject = new PremiumWorker(props.user.Email);
                                
                                PremiumWorkerObject.isPremium = true;
                                PremiumWorkerObject.Email=props.user.Email
                                PremiumWorkerObject.SuscriptionDate=fecha_vencimiento
                                PremiumWorkerObject.Password=contrasenia
                                let Change= await  WorkerObject.ChangeToPremium(PremiumWorkerObject);
                                logOut();
                            }
                            else{
                                alert("Algo salió mal, por favor intentelo de nuevo más tarde");
                            }
                        }
                    },
                ]
            );
        }
    };

    const logOut = () => {
        alert('¡Felicidades ya es premium! por favor ingrese de nuevo a su cuenta');
        navigation.navigate('Cerrar Sesión');
    }

    const ValidarTarjeta = (inputtexto) => {
        let visa = new RegExp("^4[0-9]{12}(?:[0-9]{3})?$");
        let mastercard = new RegExp("^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$");
        if(visa.test(inputtexto)){
            setImageTarjeta("visa");
        }
        else if(mastercard.test(inputtexto)){
            setImageTarjeta("mastercard");
        }
        else{
            setImageTarjeta("otra");
        }
        setNumero(inputtexto);
    };

    const ValidarCampos = () => {
        if (!numero.trim()) {
            alert('Falta el número de tarjeta');
            return false;
        }
        if (!nombre.trim()) {
            alert('Falta el nombre del propietario');
            return false;
        }
        if (!apellidos.trim()) {
            alert('Faltan los apellidos del propietario');
            return false;
        }
        if (!codigo.trim()) {
            alert('Falta el código de seguridad de la tarjeta');
            return false;
        }
        if (!contrasenia.trim()) {
            alert('Falta la contraseña de seguridad');
            return false;
        }
        return true;
    };

    const Cancelar = () =>{
        navigation.goBack();
    };

    return(
        <SafeAreaProvider style={Estilos.ContenedorApp}>
            <Componentes.EncabezadoApp/>
            <ScrollView style={Estilos.ScrollView}>
            <View style={{flexDirection: 'row', flex: 1, justifyContent: 'space-between', padding: 10, marginLeft: 15, marginRight: 15}}>
                <Image
                    source={img_handshaker}
                    style={Estilos.Icono}
                />
                <Text style={Estilos.Titulo}>
                    Estás a un paso de convertirte en premium
                </Text>
            </View>
            <View style={{flexDirection: 'row', flex: 1, width: "100%", justifyContent: 'space-between', padding: 10, marginLeft: 15, marginRight: 15}}>
                <View style={{flex: 3}}>
                    <Input
                        name='numero_tarjeta'
                        label='Número de Tarjeta'
                        labelStyle={Estilos.TextoSecundario}
                        placeholder='xxxx-xxxx-xxxx-xxxx'
                        keyboardType = 'numeric'
                        maxLength={16}
                        onChangeText={(inputtexto)=>{ValidarTarjeta(inputtexto)}}
                        style={Estilos.Input}
                        inputContainerStyle={{borderBottomWidth:0}}
                    />  
                </View>
                <View style={{flex: 1, padding: 10, marginTop: 10}}>
                    {img_tarjeta==="otra" &&
                    <Image
                        source={img_otra}
                        style={Estilos.Imagen}
                    />}
                    {img_tarjeta==="visa" &&  
                    <Image
                        source={img_visa}
                        style={Estilos.Imagen}
                    />}
                    {img_tarjeta==="mastercard" &&
                    <Image
                        source={img_mastercard}
                        style={Estilos.Imagen}
                    />}  
                </View>
            </View>
            <View style={{flexDirection: 'row', flex: 1, width: "50%", justifyContent: 'space-between', padding: 10, marginLeft: 15, marginRight: 15}}>
                <Input
                    name='nombre'
                    label='Nombre(s)'
                    labelStyle={Estilos.TextoSecundario}
                    placeholder=''
                    onChangeText={(inputtexto)=>{setNombre(inputtexto)}}
                    style={Estilos.Input}
                    inputContainerStyle={{borderBottomWidth:0}}
                />
                <Input
                    name='apellidos'
                    label='Apellidos'
                    labelStyle={Estilos.TextoSecundario}
                    placeholder=''
                    onChangeText={(inputtexto)=>{setApellidos(inputtexto)}}
                    style={Estilos.Input}
                    inputContainerStyle={{borderBottomWidth:0}}
                />
            </View>
            <View style={{flexDirection: 'row', flex: 1, justifyContent: 'space-between', padding: 10, marginLeft: 15, marginRight: 15}}>
                <View style={{flex: 1, width: "50%", marginLeft: 15}}>
                    <Text style={Estilos.TextoSecundario}>Fecha Vencimiento</Text>
                    <Button
                        title={moment(fecha_vencimiento).format("YYYY-MM")}
                        buttonStyle={Estilos.BotonFechaVencimiento}
                        padding= '100'
                        titleStyle={Estilos.TextoSecundario}
                        onPress={mostrar_picker}
                    />
                    {state === 'si' && 
                    <MonthPicker
                        onChange = {onValueChange}
                        value={fecha_vencimiento}
                        minimumDate={new Date()}
                        maximumDate={new Date(2050, 12)}
                        mode='shortNumber'
                        okButton='Confirmar'
                        cancelButton='Cancelar'
                        onPress={ocultar_picker}
                    />}
                </View>
                <View style={{flex: 1, width: "50%"}}>
                    <Input
                        name='codigo_seguridad'
                        label='Código de seguridad'
                        labelStyle={Estilos.TextoSecundario}
                        keyboardType = 'numeric'
                        placeholder='xxx'
                        secureTextEntry={true}
                        maxLength={3}
                        onChangeText={(inputtexto)=>{setCodigo(inputtexto)}}
                        style={Estilos.Input}
                        inputContainerStyle={{borderBottomWidth:0}}
                    />
                    
                </View>
            </View>
            <View style={{flex: 1, justifyContent: 'space-between', padding: 10, marginLeft: 15, marginRight: 15, marginBottom: 10}}>
                <Input
                    name='contrasenia'
                    label='Ingrese su contraseña actual como medida de seguridad'
                    labelStyle={Estilos.TextoSecundario}
                    placeholder='**********'
                    maxLength={100}
                    secureTextEntry={true}
                    onChangeText={(inputtexto)=>{setContrasenia(inputtexto)}}
                    style={Estilos.Input}
                    inputContainerStyle={{borderBottomWidth:0}}
                />
                <Text style={Estilos.Texto}>Al oprimir el siguiente botón usted confirma que está de acuerdo con nuestras políticas de uso</Text>
            </View>
            <View style={{flex: 1, justifyContent: 'space-between', padding: 10, marginLeft: 15, marginRight: 15,}}>
                 <View style={{flexDirection: 'row', justifyContent: 'center', flex: 1, marginBottom: 10,}}>
                    <Button
                        title={"¡Hazme Premium!"}
                        buttonStyle={Estilos.BotonHazmePremium}
                        padding= '100'
                        titleStyle={Estilos.EtiquetaBoton}
                        onPress={HacerPremium}
                    />              
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center', flex: 3, marginBottom: 10, marginTop:25}}>
                    <Button
                        title={"Cancelar"}
                        buttonStyle={Estilos.BotonCancelar}
                        titleStyle={Estilos.EtiquetaBoton}
                        onPress={Cancelar}
                    />       
                </View>
            </View>
            </ScrollView>
            <Componentes.Navegacion/>
        </SafeAreaProvider>
    )
}

const Estilos = StyleSheet.create({
    ContenedorApp: {
        flex: 1,
        backgroundColor: Colores.fondo,
    },
    ScrollView: {
        width: '100%',
        height: '75%',
    },
    Icono: {
        flex: 1,
        width: 32,
        height: 32,
    },
    Titulo: {    
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    Texto: {
        color: Colores.etiquetas,
        fontSize: 16,   
        textAlign: 'left',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    TextoSecundario: {
        color: Colores.etiquetas,
        fontSize: 16,   
        textAlign: 'left',
        fontWeight: 'normal',
    },
    Input:{
        flex: 1,
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
        textAlignVertical: 'top',
    },
    InputSecundario:{
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
        textAlignVertical: 'top',
    },
    Tarjeta: {
        borderRadius: 20,
        backgroundColor: Colores.fondo,
    },
    Imagen: {
        padding: 5,
        width: 80,
        height: 50,
    },
    BotonFechaVencimiento: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 0,
        height: 50,
        width: 160,
    },
    BotonHazmePremium: {
        backgroundColor: Colores.fondoBotonOscuro,
        borderRadius: 20,
        height: 60,
        width: 200,
        padding: 0,
    },
    BotonCancelar: {
        backgroundColor: Colores.fondoBotonOscuro,
        borderRadius: 20,
        height: 35,
        width: 120,
        padding: 0,
    },
    EtiquetaBoton: {
        marginHorizontal: 15,
        marginVertical: 3,
        padding: 0,
        color: Colores.letrasSobreNegro,
        fontSize: 18,
    },
    Separador: {
        height: 2,
        color: Colores.separador,
    },
});