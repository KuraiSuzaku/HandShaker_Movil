import React, {useState} from 'react';
import {StyleSheet, View, Text, ScrollView, Alert} from 'react-native';
import {Avatar, Card, Button} from 'react-native-elements';
import Colores from '../../Estilos/Colores';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default Contratacion = (props) => {
    const avatar = require('../../../public/Profile/user.png');    

    const data = {
        EmailWorker: "usuariotrabajador", //props.user.EmailWorker,
        Email: "usuario",  //props.user.Email,
        Subject: "Contratacion wuuu", //props.user.Subject,
        Date: "02/02/2021", //props.user.Date,
        HiringDate: "20/02/2021", //props.user.HiringDate,
        indications: "PUES OCUPO UN TRABAJO ASÍ BIEN PERRÓN PARA DENTRO DE 15 DÍAS XD",//props.user.indications,
        Address: "calleprincipal",//props.user.Address,
        BAddress1: "",//props.user.BAddress1,
        BAddress2: "calle2",//props.user.BAddress2,
        neighborhood: "colonia",//props.user.neighborhood,
        Number: "6942",//props.user.Number,
        Reference: "referencia",//props.user.Reference,
        LinkMaps: "linkmaps",//props.user.LinkMaps,

        Name: "Perro Javier Gonzales Gonzalo",//props.user.Name,
        Linkclient: "Soy el link del cliente.com",//props.user.Linkclient,

        Addresses: "No se que va aquí",//props.user.Addresses,
        Status: "Aceptado",//props.user.Status,
        IDcreated: "Tampoco sé que va aquí",//props.user.IDcreated,
        _id:":T",//props.user._id,
        userWorker:"D:",//props.user,
        userClient:"D:",//props.loggedUser,
    }

    const [estadoContrato, setEstadoContrato] = useState(data.Status);
    let Address = data.Address + " #" + data.Number + ", " + data.neighborhood;
    
    if(data.BAddress1.trim() && data.BAddress2.trim()){
        Address = Address + " Entre " + data.BAddress1 + " y " + data.BAddress2; 
    }

    if(data.Reference.trim()){
        Address = Address + ". " + data.Reference;
    }

    const navigation = useNavigation();

    const aceptarContratacion = () => {
        Alert.alert(
            "¡Está a punto de aceptar la petición de " + data.Name + "!",
            "Si usted está de acuerdo con esto toque Aceptar",
            [
                {
                text: "Regresar",
                style: "cancel"
                },
                { 
                text: "Contratar", onPress: () => {
                    enviarDatos("Proceso");
                    setEstadoContrato("Proceso");
                    alert('¡La contratación fue aceptada!');
                    } 
                }
            ]
        );
    }

    const cancelarContratacion = () => {
        Alert.alert(
            "¡Está a punto de rechazar la petición de " + data.Name + "!",
            "Esta acción no se puede deshacer",
            [
                {
                text: "Regresar",
                style: "cancel"
                },
                { 
                text: "Rechazar contratación", 
                onPress: () => {
                    enviarDatos("Cancelado");
                    setEstadoContrato("Cancelado");
                    alert('¡La contratación fue cancelada!');
                    } 
                }
            ]
        );
    }

    const finalizarContratacion = () => {
        Alert.alert(
            "¡Está a punto de finalizar la petición de " + data.Name + "!",
            "Asegúrese de finalizar solo cuando el trabajo ha sido terminado totalmente",
            [
                {
                text: "Regresar",
                style: "cancel"
                },
                { 
                text: "Finalizar contratación", 
                onPress: () => {
                    enviarDatos("Finalizado");
                    setEstadoContrato("Finalizado");
                    alert('¡La contratación fue finalizada!');
                    } 
                }
            ]
        );
    }

    const darResenia = () => {
        console.log("NAVEGAR a DAR las RESEÑAS asdadsad");
    }

    const abrirChat = () => {
        console.log("Pues abre el chat xdxd");
    }

    const enviarDatos = (actualStatus) => {
        console.log("Enviada la contratación con los datos!");
        console.log("EmailWorker: " + data.EmailWorker);
        console.log("Email: " + data.Email);
        console.log("Subject: " + data.Subject);
        console.log("Date: " + data.Date);
        console.log("HiringDate: " + data.HiringDate);
        console.log("indications: " + data.indications);
        console.log("Addresses: " + data.Addresses);
        console.log("Status: " + actualStatus);
        console.log("IDcreated: " + data.IDcreated);
        console.log("_id: " + data._id);
        console.log('userWorker: ' + data.userWorker);
        console.log('userClient: ' + data.userClient); 
    }

    const Cancelar = () =>{
        navigation.goBack();
    };
    
    return(
        <SafeAreaProvider>
            <ScrollView>
            <Card containerStyle={Estilos.Tarjeta}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', margin: 10}}>
                    <Avatar
                        rounded
                        icon={{name:'user', type:'font-awesome', color:'black'}}
                        source={avatar}
                        size={75}
                        containerStyle={Estilos.ContenedorAvatar}
                    />
                    <View style={{marginLeft: 15}}>
                        <Text style={Estilos.Titulo}>{data.Name}</Text>
                        <Text style={Estilos.TextoSecundario}>Realizar para: {data.HiringDate}</Text>
                        <Text style={Estilos.TextoSecundario}>Asunto: {data.Subject}</Text>
                    </View>
                </View>
                <Card.Divider style={{height:2}}/>
                <View style={{flexDirection: 'row', justifyContent: "space-evenly", margin: 5}}>
                    <Text style={Estilos.Titulo}>Estado: </Text>
                    <Text style={Estilos.Texto}>{estadoContrato}</Text>
                    <Text style={Estilos.Titulo}>Creado el: </Text>
                    <Text style={Estilos.Texto}>{data.Date} </Text>
                </View>

                {(estadoContrato === "Inicio") &&
                <View style={{flexDirection: 'row', width: "100%", justifyContent: 'center'}}>
                    <Button
                        title='Aceptar'
                        buttonStyle={Estilos.BotonAceptar}
                        titleStyle={Estilos.EtiquetaBoton}
                        onPress={aceptarContratacion}
                    />
                    <Button
                        title='Rechazar'
                        buttonStyle={Estilos.BotonCancelar}
                        titleStyle={Estilos.EtiquetaBoton}
                        onPress={cancelarContratacion}
                    />
                </View>
                }

                {(estadoContrato === "Proceso") &&
                <View style={{flexDirection: 'row', width: "100%", justifyContent: 'center'}}>
                    <Button
                        title='Cancelar'
                        buttonStyle={Estilos.BotonCancelar}
                        titleStyle={Estilos.EtiquetaBoton}
                        onPress={cancelarContratacion}
                    />
                </View>
                }

                {(estadoContrato === "Aceptado") &&
                <View>
                    <View style={{flexDirection: 'row', width: "100%", justifyContent: 'center'}}>
                        <Button
                            title='Abrir Chat'
                            buttonStyle={Estilos.BotonResenia}
                            titleStyle={Estilos.EtiquetaBoton}
                            onPress={abrirChat}
                        />
                        <Button
                            title='Finalizar'
                            buttonStyle={Estilos.BotonFinalizar}
                            titleStyle={Estilos.EtiquetaBoton}
                            onPress={finalizarContratacion}
                        />
                    </View>
                    <View style={{flexDirection: 'row', width: "100%", justifyContent: 'center', marginTop: 10}}>
                        <Button
                            title='Cancelar'
                            buttonStyle={Estilos.BotonCancelar}
                            titleStyle={Estilos.EtiquetaBoton}
                            onPress={cancelarContratacion}
                        />
                    </View>
                </View>
                }

                {((estadoContrato === "Finalizado") || (estadoContrato === "Cancelado")) &&
                <View style={{flexDirection: 'row', width: "100%", justifyContent: 'center'}}>
                    <Button
                        title='Dar Reseña'
                        buttonStyle={Estilos.BotonResenia}
                        titleStyle={Estilos.EtiquetaBoton}
                        onPress={darResenia}
                    />
                </View>
                }

                <Card.Divider style={{height:2}}/>
                <View style={{width: "100%", margin: 10}}>
                    <Text style={Estilos.Titulo}>Contacto del cliente:</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={Estilos.TextoSecundario}>Nombre:</Text><Text style={Estilos.Texto}> {data.Name} </Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={Estilos.TextoSecundario}>Perfil:</Text><Text style={Estilos.Texto}> {data.Linkclient} </Text>
                    </View>
                </View>
                
                <View style={{width: "100%", margin: 10}}>
                    <Text style={Estilos.Titulo}>Indicaciones del cliente:</Text>
                    <Text style={Estilos.Texto}>{data.indications} </Text>
                </View>

                
                <View style={{width: "100%", margin: 10}}>
                    <Text style={Estilos.Titulo}>Lugar:</Text>
                    <Text style={Estilos.Texto}>{Address}</Text>
                </View>
                
                {(data.LinkMaps.trim()) &&
                <View style={{width: "100%", margin: 10}}>
                    <Text style={Estilos.Titulo}>Maps:</Text>
                    <Text style={Estilos.Texto}>{data.LinkMaps}</Text>
                </View>
                }
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
    ContenedorAvatar: {
        backgroundColor: 'gray',
    },
    Titulo: {    
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'left',
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
        fontWeight: 'bold',
    },
    TextoEstado: {
        color: 'gray',
        fontSize: 16,   
        textAlign: 'left',
        fontWeight: 'bold',
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
    BotonAceptar: {
        backgroundColor: 'green',
        borderRadius: 20,
        height: 45,
        width: 130,
        padding: 0,
        margin: 10,
    },
    BotonCancelar: {
        backgroundColor: 'red',
        borderRadius: 20,
        height: 35,
        width: 120,
        padding: 0,
        margin: 10,
    },
    BotonFinalizar: {
        backgroundColor: 'purple',
        borderRadius: 20,
        height: 45,
        width: 130,
        padding: 0,
        margin: 10,
    },
    BotonResenia: {
        backgroundColor: Colores.fondoBotonOscuro,
        borderRadius: 20,
        height: 45,
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
    },
});