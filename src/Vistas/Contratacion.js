import React, {useState} from 'react';
import {StyleSheet, View, Text, ScrollView, Alert} from 'react-native';
import {Card, Input, Button} from 'react-native-elements';
import Colores from '../Estilos/Colores';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import DatePicker from 'react-native-datepicker'

export default Contratacion = (props) => {

    console.log("Props en contratación: ", props);

    const [nombre_trabajador, setNombreTrabajador] = useState("Nombre Trabajador PlaceHolder");
    const [asunto, setAsunto] = useState("");
    const [fecharealizacion, setFechaRealizacion] = useState("");
    const [indicaciones, setIndicaciones] = useState("");
    const [calleprincipal, setCallePrincipal] = useState("");
    const [numcasa, setNumCasa] = useState("");
    const [colonia, setColonia] = useState("");
    const [calle1, setCalle1] = useState("");
    const [calle2, setCalle2] = useState("");
    const [referencia, setReferencia] = useState("");
    const [linkmaps, setLinkMaps] = useState("");

    const Contratar = () => {
        //se ocupa ID del trabajador que está contratando 
        if(ValidarCampos()){
            Alert.alert(
                "¡Está a punto de contratar al trabajador " + nombre_trabajador + "!",
                "Si la información ingresada es correcta puede continuar sin problemas",
                [
                    {
                    text: "Cancelar",
                    onPress: () => console.log("Cancelado"),
                    style: "cancel"
                    },
                    { text: "Contratar", onPress: () => {
                        console.log("Enviada la contratación con los datos!")
                        console.log("ID: " + "aqui debe haber un id pero no lo tengo :C");
                        console.log("Asunto: " + asunto);
                        console.log("Fecha realizacion: " + fecharealizacion);
                        console.log("Indicaciones: " + indicaciones);
                        console.log("Calle principal: " + calleprincipal);
                        console.log("Numero casa: " + numcasa);
                        console.log("Colonia: " + colonia);
                        console.log("Calle1: " + calle1);
                        console.log("Calle2: " + calle2);console.log("Referencia: " + referencia);
                        console.log("Link Maps: " + linkmaps);
                        console.log('Conexión a la base de datos con la info para contratar, estoy en PerfilTrabajador/Contratacion.js');    
                         
                        EnviarDatos();
                        alert('¡Contratado con éxito!');
                        Cancelar(); //Quizá añadir validación de que fue un éxito la contratación
                        } 
                    }
                ]
            );

            }

       };

    const EnviarDatos = () =>{
        console.log("(enviar a BD) Adress: Calle " + calleprincipal + ", Colonia " + colonia + " #" + numcasa);
        auxreferencia = calle1 + calle2 + referencia;
        if (!auxreferencia.trim()){
            console.log("(enviar a BD) Referencia: NO HAY");
        }
        else{
            auxreferencia = "";
            if(calle1.trim()){
                auxreferencia = "Calle " + calle1;
            }
            if(calle2.trim()){
                auxreferencia = auxreferencia + ", y calle: " + calle2;
            }
            if(referencia.trim()){
                auxreferencia = auxreferencia + ", " + referencia;
            }
            console.log("(enviar a BD) Referencia: " + auxreferencia);
        }
        console.log("(enviar a BD) LinkMaps: " + linkmaps);
    }

    const navigation = useNavigation();
    const Cancelar = () =>{
        navigation.goBack();
        console.log('Regresando al perfil');
    };

    const fechaactual = new Date().getDate();
    const aniolimite = new Date().getFullYear() + 1;
    
    const ValidarCampos = () => {
        if (!asunto.trim()) {
            alert('Falta el Asunto del trabajo');
            return false;
        }
        if (!fecharealizacion.trim()) {
            alert('Falta la fecha para realizar el trabajo');
            return false;
        }
        if (!indicaciones.trim()) {
            alert('Faltan las indicaciones de realizacion del trabajo');
            return false;
        }
        if (!calleprincipal.trim()) {
            alert('Falta la calle dónde se va a realizar el trabajo');
            return false;
        }
        if (!numcasa.trim()) {
            alert('Falta el número de casa dónde se va a realizar el trabajo');
            return false;
        }
        if (!colonia.trim()) {
            alert('Falta la Colonia donde se va a hacer el trabajo');
            return false;
        }
        return true;
    };

    return(
        <SafeAreaProvider>
            <ScrollView>
            <Card containerStyle={Estilos.Tarjeta}>
                <Text style={Estilos.Titulo, {padding: 10, fontSize: 18, textAlign: "center", marginBottom: 10}}>Solicitar contratación de {nombre_trabajador}</Text>
                <Input
                    name='asunto'
                    placeholder='Asunto'
                    style={Estilos.Input}
                    inputContainerStyle={{borderBottomWidth:0}}
                    onChangeText={(inputtexto) =>{setAsunto(inputtexto)}}
                />
                <View style={{flexDirection:'row', padding: 10, marginBottom: 10, justifyContent:'space-between'}}>
                    <Text style={Estilos.Texto}>
                        Fecha de{"\n"}realización
                    </Text>
                    <DatePicker
                        style={{width: 200}}
                        date={fechaactual}
                        mode="date"
                        placeholder="Elija Fecha"
                        format="DD-MM-YYYY"
                        minDate={fechaactual}
                        maxDate={"31-12-"+aniolimite}
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                              position: 'absolute',
                              left: 0,
                              top: 4,
                              marginLeft: 0
                            },
                            dateInput: {
                                borderRadius: 10,
                                backgroundColor: '#FFFFFF',
                                textAlignVertical: 'top',
                                borderColor: '#FFFFFF',
                                borderBottomWidth: 0,
                            }
                          }}
                        onDateChange={(date)=>{setFechaRealizacion(date)}}
                    />
                </View>
                <Input
                    name='indicaciones'
                    placeholder={'Indicaciones o información del trabajo a realizar \n \n \n \n \n'}
                    style={Estilos.Input}
                    multiline={true}
                    inputContainerStyle={{borderBottomWidth:0}}
                    onChangeText={(inputtexto) =>{setIndicaciones(inputtexto)}}
                />
                <Card.Divider style={Estilos.Separador}/>
                <Text style={Estilos.Texto}>
                    Dirección donde se llevará a cabo el trabajo
                </Text>
                <View style={{flexDirection: 'row', flex: 1, width: "100%", justifyContent: 'center'}}>
                    
                <Input
                    name='calleprincipal'
                    label='Calle Principal'
                    labelStyle={Estilos.TextoSecundario}
                    placeholder='Calle del lugar donde se realizará el trabajo'
                    style={Estilos.Input}
                    inputContainerStyle={{borderBottomWidth:0}}
                    onChangeText={(inputtexto) => {setCallePrincipal(inputtexto)}}
                />
                </View>
                <View style={{flexDirection:'row', width: '50%'}}>
                    <Input
                        name='callenumero'
                        label='Numero'
                        labelStyle={Estilos.TextoSecundario}
                        keyboardType = 'numeric'
                        style={Estilos.InputSecundario}
                        containerStyle={{width: '50%'}}
                        inputContainerStyle={{borderBottomWidth:0}}
                        maxLength={4}
                        onChangeText={(inputtexto) => {setNumCasa(inputtexto)}}
                    />
                    <Input
                        name='colonia'
                        label='Colonia'
                        labelStyle={Estilos.TextoSecundario}
                        style={Estilos.InputSecundario}
                        containerStyle={{width: '150%'}}
                        inputContainerStyle={{borderBottomWidth:0}}
                        onChangeText={(inputtexto) => {setColonia(inputtexto)}}
                    />
                </View>
                <View style={{flexDirection:'row'}}>
                    <Input 
                        name='calle1'
                        label='Entre'
                        labelStyle={Estilos.TextoSecundario}
                        placeholder={'Lateral 1'}
                        style={Estilos.InputSecundario}
                        containerStyle={{width: '50%'}}
                        inputContainerStyle={{borderBottomWidth:0}}
                        onChangeText={(inputtexto) => {setCalle1(inputtexto)}}
                    />
                    <Input 
                        name='calle2'
                        label='Y'
                        labelStyle={Estilos.TextoSecundario}
                        placeholder={'Lateral 2'}
                        style={Estilos.InputSecundario}
                        containerStyle={{width: '50%'}}
                        inputContainerStyle={{borderBottomWidth:0}}
                        onChangeText={(inputtexto) => {setCalle2(inputtexto)}}
                    />
                </View>
                <Input
                    name='referencia'
                    label='Referencia (opcional)'
                    labelStyle={Estilos.TextoSecundario}
                    placeholder='Algo icónico del lugar como: a un costado de un kinder, frente al parque colomos, etc.'
                    style={Estilos.Input}
                    inputContainerStyle={{borderBottomWidth:0}}
                    onChangeText={(inputtexto) => {setReferencia(inputtexto)}}
                />
                <Input
                    name='linkmaps'
                    label='Link de google maps (opcional)'
                    labelStyle={Estilos.TextoSecundario}
                    placeholder='Aquí puede pegar el link de google maps si lo tiene disponible'
                    style={Estilos.Input}
                    inputContainerStyle={{borderBottomWidth:0}}
                    onChangeText={(inputtexto) => {setLinkMaps(inputtexto)}}
                />
                <View style={{flexDirection: 'row', width: '100%', justifyContent: 'center', padding: 10}}>
                    <Button
                        title='Contratar ya'
                        buttonStyle={Estilos.BotonContratar}
                        titleStyle={Estilos.EtiquetaBoton}
                        onPress={Contratar}
                    />
                </View>
                <View style={{flexDirection: 'row', width: '100%', justifyContent: 'center', padding: 10}}>
                    <Button
                        title='Cancelar'
                        buttonStyle={Estilos.BotonCancelar}
                        titleStyle={Estilos.EtiquetaBoton}
                        onPress={Cancelar}
                    />
                </View>
            </Card>
            </ScrollView>
        </SafeAreaProvider>
    );
}

const Estilos = StyleSheet.create({
    Titulo: {    
        fontSize: 12,
        fontWeight: 'bold',
        marginTop: 12,
        marginLeft: 26,
        width: "100%",
        alignContent: "center",
    },
    Texto: {
        color: Colores.etiquetas,
        fontSize: 16,   
        textAlign: 'center',
        marginBottom: 15,
    },
    TextoSecundario: {
        color: Colores.etiquetas,
        fontSize: 16,   
        textAlign: 'left',
        fontWeight: 'normal',
    },
    Input:{
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
        flex: 1,
        width: '100%',
        height: 300,
    },
    BotonAutocompletar: {
        backgroundColor: Colores.fondoBotonOscuro,
        borderRadius: 20,
        height: 55,
        width: 200,
        padding: 0,
        marginBottom: 25,
        marginTop: 25,
    },
    BotonContratar: {
        backgroundColor: Colores.fondoBotonOscuro,
        borderRadius: 20,
        height: 60,
        width: 150,
        padding: 0,
    },
    BotonCancelar: {
        backgroundColor: Colores.fondoBotonOscuro,
        borderRadius: 20,
        height: 35,
        width: 120,
        padding: 0,
        marginBottom: 25,
        marginTop: 10,
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