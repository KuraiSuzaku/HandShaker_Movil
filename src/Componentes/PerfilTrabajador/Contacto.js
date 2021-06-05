import React, {useState}  from 'react';
import {StyleSheet, View,} from 'react-native';
import {Card, Text, Button,} from 'react-native-elements';
import Colores from '../../Estilos/Colores';
import EditarContacto from './EditarContacto';
import PremiumWorker from '../../Classes/PremiumWorker';
import {Worker} from '../../Classes/Worker';

export default Contacto = (props) => {
    
    const [propietario, setPropietario] = useState(true);
    const [editando, setEditando] = useState(false);
    const [editcorreo, setCorreo] = useState();
    const [edittelefono, setTelefono] = useState();
    const [editcelular, setCelular] = useState();
    const [editdomicilio, setDomicilio] = useState();


    //console.log("domicilio: " + contacto.correo);
    console.log("domicilio:** " + props.user.Email);
    console.log("domicilio: " + props.contacto.correo);


    console.log("domicilio: " + props.user.UserType);

    const CambiarDatos = () =>{
        setEditando(true);
        //console.log("Se deben cambiar los datos del acerca de, pero primero comprobar que este elemento se activa cuando es el usuario correspondiente al perfil")



    }

    const GuardarCambios = async () => {
        setEditando(false); 
        //console.log("Aquí va todo el desmadre de tomar datos de cajas de texto y aventarlas al server");
        //console.log("correo: " + editcorreo);
        //console.log("telefono: " + edittelefono);
        //console.log("celular: " + editcelular);
        //console.log("domicilio: " + editdomicilio);
        console.log("domicilio: " + props.contacto.correo);
     

        console.log("domicilio: " + props.user.UserType);

        if  (!props.user.UserType.includes("PremiumWorker"))
        {  let WorkerObject = new Worker(props.user.Email);
       
          const x =  await WorkerObject.UpdateWorkers(WorkerObject);
      }else{
  console.log("premium")
          let WorkerObject = new PremiumWorker(props.user.Email);
        
          WorkerObject.EmailContact
  
          const x =  await WorkerObject.UpdatePremiumWorkers(WorkerObject);
  
      }



    }

    return(
        <View>
            <View  style={{flexDirection:'row', justifyContent:'space-between', paddingTop: 10, paddingRight: 10}}>
                <View style={{flex:4}}>
                <Text style={Estilos.Titulo}>
                    Informacion de Contacto
                </Text>
                </View>
                <View style={{flex:1, paddingTop: 10}}>
                    {propietario && (!editando) &&
                    <Button
                        title='Editar'
                        buttonStyle={Estilos.Boton}
                        titleStyle={Estilos.EtiquetaBoton}
                        onPress={CambiarDatos}
                    />
                    }
                    {propietario && editando &&
                    <Button
                        title='Guardar'
                        buttonStyle={Estilos.Boton}
                        titleStyle={Estilos.EtiquetaBoton}
                        onPress={GuardarCambios}
                    />
                    }
                </View>
            </View>
            {propietario && editando &&
                <EditarContacto 
                    setCorreo = {setCorreo}
                    setTelefono = {setTelefono}
                    setCelular = {setCelular}
                    setDomicilio = {setDomicilio}
                    auxCorreo = {props.contacto.correo}
                    auxTelefono = {props.contacto.telefono}
                    auxCelular = {props.contacto.celular}
                    auxDomicilio = {props.contacto.domicilio}
                />
            }
            {(!propietario) || (!editando) &&
            <Card containerStyle={Estilos.Tarjeta}>
                <Text style={Estilos.Dato}>
                    Correo: <Text>{props.contacto.correo}</Text>
                </Text>
                <Text style={Estilos.Dato}>
                    Teléfono: <Text style={Estilos.DatoSecundario}>{props.contacto.telefono}</Text>
                </Text><Text style={Estilos.Dato}>
                    Celular: <Text>{props.contacto.celular}</Text>
                </Text><Text style={Estilos.Dato}>
                    Domicilio: <Text>{props.contacto.domicilio}</Text>
                </Text>
            </Card>
            }
            {/*Google Maps*/}
        </View>
    );
}
// ESTILOS
const Estilos = StyleSheet.create({
    Titulo: {    
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 12,
        marginLeft: 26,
    },
    Tarjeta: {
        borderRadius: 20,
        paddingVertical: 10,
    },
    Dato: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    DatoSecundario: {
        fontSize: 16,
    },
    Boton: {
        backgroundColor: Colores.fondoBotonOscuro,
        borderRadius: 20,
        height: 25,
        width: 75,
        padding: 0,
        alignContent: "center",
    },
    EtiquetaBoton: {
        marginHorizontal: 15,
        marginVertical: 3,
        padding: 0,
        color: Colores.letrasSobreNegro,
        fontSize: 12,
    },
});