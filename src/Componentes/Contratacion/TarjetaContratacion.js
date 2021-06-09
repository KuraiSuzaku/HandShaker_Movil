import React, {useState} from 'react';
import {StyleSheet, View, Text, ScrollView, Alert} from 'react-native';
import {Avatar, Card, Button} from 'react-native-elements';
import Colores from '../../Estilos/Colores';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Hiring } from '../../Classes/Hiring';
import { WorkersHiring } from '../../Classes/WorkersHiring';

export default Contratacion = (props) => {
    const avatar = require('../../../public/Profile/user.png');    
    const route= useRoute();

    //console.log("data C"+route.params.data.userClient)

    //console.log("data C"+route.params.data.userClient[0].Email)
    //console.log("data C"+route.params.data.userClient[0].LastName)

    const data = {
        EmailWorker: route.params.data.EmailWorker,
        Email:route.params.data.Email,
        Subject: route.params.data.Subject,
        Date: route.params.data.Date,
        HiringDate: route.params.data.HiringDate,
        indications:route.params.data.indications,

        ProfilePicture:((route.params.data.EmailWorker === props.user.Email) ? route.params.data.userClient[0].ProfilePicture.Path:route.params.data.userWorker[0].ProfilePicture.Path),
        ID:route.params.data.IDcreated,

        Address: route.params.data.Addresses[0].Address,
        BAddress1: route.params.data.Addresses[0].BAddress1,
        BAddress2: route.params.data.Addresses[0].BAddress2,
        neighborhood: route.params.data.Addresses[0].neighborhood,
        Number: route.params.data.Addresses[0].Number,
        Reference: route.params.data.Addresses[0].Reference,
        LinkMaps: route.params.data.Addresses[0].LinkMaps,

        Name:((route.params.data.EmailWorker === props.user.Email) ? route.params.data.userClient[0].Name+" "+route.params.data.userClient[0].LastName:route.params.data.userWorker[0].Name+" "+route.params.data.userWorker[0].LastName),
        Linkclient: route.params.data.Linkclient,

       // Addresses: route.params.data.Addresses,
        Status: route.params.data.Status,
        IDcreated: route.params.data.IDcreated,
       // _id:":T",//route.params.data._id,
     //   userWorker:route.params.data,
     //   userClient:props.loggedUser,
    }
   /* console.log("EmailWorker "+data.EmailWorker)
    console.log("Email "+data.Email)
    console.log("Subject"+data.Subject)
    console.log("Date"+data.Date)
    console.log("HiringDate"+data.HiringDate)
    console.log("indications"+data.indications)
    console.log("Address"+data.Address)
    console.log("BAddress1"+data.BAddress1)
    console.log("BAddress2"+data.BAddress2)
    console.log("neighborhood"+data.neighborhood)
    console.log("Number"+data.Number)
    console.log("Reference"+data.Reference)
    console.log("LinkMaps"+data.LinkMaps)
    console.log("Name"+data.Name)
    console.log("Linkclient"+data.Linkclient)
  */
    let date = new Date( data.HiringDate)

    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()
    
    if(month < 10){
      console.log(`${day}-0${month}-${year}`)
      data.HiringDate=`${day}-0${month}-${year}`
    }else{
      console.log(`${day}-${month}-${year}`)
      data.HiringDate=`${day}-${month}-${year}`
    }
    

 let date2 = new Date( data.Date)

 let day2 = date2.getDate()
 let month2 = date2.getMonth() + 1
 let year2 = date2.getFullYear()
 
 if(month2 < 10){
   console.log(`${day2}-0${month2}-${year2}`)
   data.Date=`${day2}-0${month2}-${year2}`
 }else{
   console.log(`${day2}-${month2}-${year2}`)
   data.Date=`${day2}-${month2}-${year2}`
 }

    console.log("ID****"+data.ID)

    const [estadoContrato, setEstadoContrato] = useState(data.Status);
  
    if(typeof(data.BAddress1) != "undefined" && typeof(data.BAddress2) != "undefined"){
    if(data.BAddress1.trim() && data.BAddress2.trim()){
        data.Address = data.Address + " Entre " + data.BAddress1 + " y " + data.BAddress2; 
    }   
    } else if(typeof(data.BAddress1) != "undefined" && typeof(data.BAddress2) == "undefined"){

        data.Address = data.Address + " Entre " + data.BAddress1; 
    }else if(typeof(data.BAddress1) == "undefined" && typeof(data.BAddress2) != "undefined"){

        data.Address = data.Address + " Entre " + data.BAddress2; 
    }else{
        data.Address = data.Address
    }

    if(typeof(data.Reference) != "undefined" ){
    if(data.Reference.trim()){
        data.Address = data.Address + ". " + data.Reference;
    }}

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
        navigation.navigate('TarjetaDarResena', {...props});
    }

    const abrirChat = () => {
        //console.log("Pues abre el chat xdxd");
    }

     const enviarDatos = async (actualStatus) => {

       let UpdateHiring= new WorkersHiring()

       const up= await UpdateHiring.UpdateHiring( data.EmailWorker, data.Email,data.IDcreated,actualStatus)
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
                        source={{uri: data.ProfilePicture}}
                        size={75}
                        containerStyle={Estilos.ContenedorAvatar}
                    />
                    <View style={{marginLeft: 15, maxWidth: "75%"}}>
                        <Text style={Estilos.Titulo}>{data.Name}</Text>
                        <Text style={Estilos.TextoSecundario}>Realizar para: {data.HiringDate}</Text>
                        <Text style={Estilos.TextoSecundario}>Asunto: {data.Subject}</Text>
                    </View>
                </View>
                <Card.Divider style={{height:2}}/>
                <View style={{flexDirection: 'row', justifyContent: "space-evenly", margin: 5}}>
                    <Text style={Estilos.TituloAux}>Estado: </Text>
                    <Text style={Estilos.Texto}>{estadoContrato}</Text>
                    <Text style={Estilos.TituloAux}>Creado el: </Text>
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

                {(estadoContrato === "Proceso") && (route.params.data.Email === props.user.Email) &&
                <View style={{flexDirection: 'row', width: "100%", justifyContent: 'center'}}>
                    <Button
                        title='Finalizar'
                        buttonStyle={Estilos.BotonFinalizar}
                        titleStyle={Estilos.EtiquetaBoton}
                        onPress={finalizarContratacion}
                    />
                    <Button
                        title='Cancelar'
                        buttonStyle={Estilos.BotonCancelar}
                        titleStyle={Estilos.EtiquetaBoton}
                        onPress={cancelarContratacion}
                    />
                </View>
                }

                {(estadoContrato === "Proceso") && (route.params.data.EmailWorker === props.user.Email) &&
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

                {((estadoContrato === "Finalizado") || (estadoContrato === "Cancelado")) && (route.params.data.Email === props.user.Email) &&
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
                    <Text style={Estilos.Texto}>{data.Address}</Text>
                </View>
                
                {
                
                
                (typeof(data.Reference)!="undefined"?data.LinkMaps.trim():"")
                
                &&
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
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'left',
    },
    TituloAux: {    
        fontSize: 16,
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