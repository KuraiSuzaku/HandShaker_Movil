import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Input, Button, Image} from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MonthPicker from 'react-native-month-year-picker';
import moment from "moment"; 
/////////
import Colores from '../Estilos/Colores';
import * as Componentes from '../Componentes/Indice';
/////////

export default PagoAPremium = () => {

    let img_tarjeta = require('../../public/Images/otratarjeta.png');
    const img_handshaker = require('../../public/Icons/handshaker.png');
    const [fecha_vencimiento, setFechaVencimiento] = useState(new Date());
    const [state, setState] = useState('no');

    const [numero, setNumero] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [codigo, setCodigo] = useState("");

    const mostrar_picker = () => {
        setState('si');      
    };

    const ocultar_picker = () =>{
        setState('no');
    };

    onValueChange = (event, fecha) => {
        console.log(fecha);
        const nuevafecha = fecha || fecha_vencimiento;
        ocultar_picker();
        setFechaVencimiento(nuevafecha);
    };

    const HacerPremium = () =>{
        if(ValidarCampos()){
            console.log("Numero Tarjeta: ", numero);
            console.log("Nombre: ", nombre);
            console.log("Apellidos: ", apellidos);
            console.log("Fecha Vencimiento: ", moment(fecha_vencimiento).format("MM/YYYY"));
            console.log("Codigo: ", codigo);
            console.log('YA ERES PREMIUM WUUUUUU'); //Enviar valor de premium con el trabajador obtenido
        }
    };

    const ValidarTarjeta = (inputtexto) => {
        visa = "^4[0-9]{12}(?:[0-9]{3})?$";
        mastercard = "mastercard";

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
        return true;
    };

    const navigation = useNavigation();
    const Cancelar = () =>{
        navigation.goBack();
    };

    return(
        <SafeAreaProvider style={Estilos.ContenedorApp}>
            <Componentes.EncabezadoApp />
            <View style={{flexDirection: 'row', flex: 1, justifyContent: 'space-between', padding: 10, marginLeft: 15, marginRight: 15}}>
                <Image
                    source={img_handshaker}
                    style={Estilos.Icono}
                />
                <Text style={Estilos.Titulo}>
                    Estás a un paso de convertirte en premium
                </Text>
            </View>
            <View style={{flexDirection: 'row', flex: 1, width: "100%", justifyContent: 'space-between', padding: 10, marginLeft: 15, marginRight: 15, marginBottom: 10}}>
                <View style={{flex: 3}}>
                    <Input
                        name='numero_tarjeta'
                        label='Número de Tarjeta'
                        labelStyle={Estilos.TextoSecundario}
                        placeholder='xxxx-xxxx-xxxx-xxxx'
                        keyboardType = 'numeric'
                        onChangeText={(inputtexto)=>{ValidarTarjeta(inputtexto)}}
                        style={Estilos.Input}
                        inputContainerStyle={{borderBottomWidth:0}}
                    />  
                </View>
                <View style={{flex: 1, padding: 10, marginTop: 10}}>
                    <Image
                        source={img_tarjeta}
                        style={Estilos.Imagen}
                    />  
                </View>
            </View>
            <View style={{flexDirection: 'row', flex: 1, width: "50%", justifyContent: 'space-between', padding: 10, marginLeft: 15, marginRight: 15, marginBottom: 10}}>
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
            <View style={{flexDirection: 'row', flex: 1, justifyContent: 'space-between', padding: 10, marginLeft: 15, marginRight: 15, marginBottom: 10}}>
                <View style={{flex: 1, width: "50%", marginLeft: 15}}>
                    <Text style={Estilos.TextoSecundario}>Fecha Vencimiento</Text>
                    <Button
                        title={moment(fecha_vencimiento).format("MM/YYYY")}
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
                        onChangeText={(inputtexto)=>{setCodigo(inputtexto)}}
                        style={Estilos.Input}
                        inputContainerStyle={{borderBottomWidth:0}}
                    />
                    
                </View>
            </View>
            <View style={{flexDirection: 'row', flex: 1, justifyContent: 'space-between', padding: 10, marginLeft: 15, marginRight: 15, marginBottom: 10, marginTop:25}}>
                <Text style={Estilos.Texto}>Usted está de acuerdo con el montón de cláusulas que vamos a poner aquí</Text>
            </View>
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
            <Componentes.Navegacion />
        </SafeAreaProvider>
    )
}

const Estilos = StyleSheet.create({
    ContenedorApp: {
        flex: 1,
        backgroundColor: Colores.fondo,
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
        left: '3%',
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