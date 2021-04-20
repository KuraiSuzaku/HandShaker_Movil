import React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import {Card, Input, Button} from 'react-native-elements';
import Colores from '../Estilos/Colores';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import DatePicker from 'react-native-datepicker'

export default Contratacion = () => {

    const Contratar = () => {
        //Comprobar que los datos están completos.
        //Enviar mensaje de alerta de si quiere contratar de verdad
        //se ocupa ID del trabajador que está contratando 
        console.log('Conexión a la base de datos con la info para contratar, estoy en PerfilTrabajador/Contratacion.js');
    };

    const RellenarDireccion = () =>{
        //Se ocupa ID del usuario que hace la contratación
        //Rellenar los campos con su info sacada de la bd
        console.log('Rellenando datos de dirección V:');
    };

    const navigation = useNavigation();
    const Cancelar = () =>{
        navigation.goBack();
        console.log('Regresando al perfil');
    };

    const fechaactual = new Date().getDate();
    const aniolimite = new Date().getFullYear() + 1;
    const nombre_trabajador = "Nombre Trabajador PlaceHolder";
    
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
                    />
                </View>
                <Input
                    name='indicaciones'
                    placeholder={'Indicaciones o información del trabajo a realizar \n \n \n \n \n'}
                    style={Estilos.Input}
                    multiline={true}
                    inputContainerStyle={{borderBottomWidth:0}}
                />
                <Card.Divider style={Estilos.Separador}/>
                <Text style={Estilos.Texto}>
                    Dirección donde se llevará a cabo el trabajo
                </Text>
                <Card.Divider style={height='0'}/>
                <Button
                    title='Autocompletar con mi dirección'
                    buttonStyle={Estilos.BotonAutocompletar}
                    padding= '100'
                    titleStyle={Estilos.EtiquetaBoton}
                    onPress={RellenarDireccion}
                />
                <Card.Divider style={height='0'}/>
                <Input
                    name='calleprincipal'
                    label='Calle Principal'
                    labelStyle={Estilos.TextoSecundario}
                    placeholder='Calle del lugar donde se realizará el trabajo'
                    style={Estilos.Input}
                    inputContainerStyle={{borderBottomWidth:0}}
                />
                <View style={{flexDirection:'row', width: '50%'}}>
                    <Input
                        name='callenumero'
                        label='Numero'
                        labelStyle={Estilos.TextoSecundario}
                        keyboardType = 'numeric'
                        style={Estilos.InputSecundario}
                        containerStyle={{width: '50%'}}
                        inputContainerStyle={{borderBottomWidth:0}}
                    />
                    <Input
                        name='colonia'
                        label='Colonia'
                        labelStyle={Estilos.TextoSecundario}
                        style={Estilos.InputSecundario}
                        containerStyle={{width: '150%'}}
                        inputContainerStyle={{borderBottomWidth:0}}
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
                    />
                    <Input 
                        name='calle2'
                        label='Y'
                        labelStyle={Estilos.TextoSecundario}
                        placeholder={'Lateral 2'}
                        style={Estilos.InputSecundario}
                        containerStyle={{width: '50%'}}
                        inputContainerStyle={{borderBottomWidth:0}}
                    />
                </View>
                <View style={{flexDirection: 'column', left: '25%'}}>
                    <Button
                        title='Contratar ya'
                        buttonStyle={Estilos.BotonContratar}
                        titleStyle={Estilos.EtiquetaBoton}
                        onPress={Contratar}
                    />
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
    },
    Texto: {
        color: Colores.etiquetas,
        fontSize: 16,   
        textAlign: 'left',
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
        left: '145%' ,
        backgroundColor: Colores.fondoBotonOscuro,
        borderRadius: 20,
        height: 55,
        width: 200,
        padding: 0,
    },
    BotonContratar: {
        backgroundColor: Colores.fondoBotonOscuro,
        borderRadius: 20,
        left: '3%',
        height: 60,
        width: 150,
        padding: 0,
    },
    BotonCancelar: {
        backgroundColor: Colores.fondoBotonOscuro,
        borderRadius: 20,
        top: '3%',
        left: '50%',
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