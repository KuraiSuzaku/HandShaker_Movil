import React, {useState}  from 'react';
import {StyleSheet, View,} from 'react-native';
import {Card, Text, Button,} from 'react-native-elements';
import Colores from '../../Estilos/Colores';
import EditarContacto from './EditarContacto';
import PremiumWorker from '../../Classes/PremiumWorker';
import {Worker} from '../../Classes/Worker';
import { PhoneNumber } from '../../Classes/PhoneNumber';
import { AddressClass } from '../../Classes/AddressClass';

export default Contacto = (props) => {
    
    const [propietario, setPropietario] = useState(props.owner);
    const [editando, setEditando] = useState(false);
    const [editcorreo, setCorreo] = useState("");
    const [edittelefono, setTelefono] = useState("");
    const [editcelular, setCelular] = useState("");
    const [editdomicilio, setDomicilio] = useState("");

    const [editcorreoM, setCorreoM] = useState("");
    const [edittelefonoM, setTelefonoM] = useState("");
    const [editcelularM, setCelularM] = useState("");
    const [editdomicilioM, setDomicilioM] = useState("");

    const [firstState, setState] = useState(true);

    //console.log("domicilio: " + contacto.correo);
    console.log("domicilio:** " + props.user.Email);
    console.log("domicilio: " + props.contacto.correo);


    console.log("domicilio: " + props.user.UserType);

    const CambiarDatos = () =>{










        setEditando(true);
        //console.log("Se deben cambiar los datos del acerca de, pero primero comprobar que este elemento se activa cuando es el usuario correspondiente al perfil")



    }

    const ObtenerDatos =async ()  =>{
        console.log("obtener**********");
        if  (!props.user.UserType.includes("PremiumWorker"))
        {  let WorkerObject = new Worker(props.user.Email);
           
       
          const objectWorker =  await WorkerObject.GetWorkerInformation(WorkerObject);
          console.log("contact ",objectWorker.EmailContact)
          setCorreoM(objectWorker.EmailContact)
          setTelefonoM(objectWorker.Phones[0].Phone)
          setCelularM(objectWorker.Phones[1].Phone)
          setDomicilioM(objectWorker.Addresses[0].Address)
      }else{
  console.log("premium")
          let WorkerObject = new PremiumWorker(props.user.Email);    
       

          const objectPremium =  await WorkerObject.GetPremiumWorkerInformation(WorkerObject);
          console.log("contact ",objectPremium.EmailContact)
    setCorreoM(objectPremium.EmailContact)
      setTelefonoM(objectPremium.Phones[0].Phone)
      setCelularM(objectPremium.Phones[1].Phone)
      setDomicilioM(objectPremium.Addresses[0].Address)

      }
    
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
            WorkerObject.EmailContact=editcorreo
            let arrayPhones= new Array()
            let phones=new PhoneNumber()
            phones.Phone=edittelefono
            let phones2=new PhoneNumber()
            phones2.Phone=editcelular
            arrayPhones.push(phones)
            arrayPhones.push(phones2)     
            WorkerObject.Phones=arrayPhones
    
            let arrayAddress= new Array()
            let address = new AddressClass()
            address.Address=  editdomicilio
            arrayAddress.push(address)
            WorkerObject.Addresses=arrayAddress
       
          const x =  await WorkerObject.UpdateWorkers(WorkerObject);
      }else{
  console.log("premium")
          let WorkerObject = new PremiumWorker(props.user.Email);
        
         WorkerObject.EmailContact=editcorreo
          let arrayPhones= new Array()
          let phones=new PhoneNumber()
          phones.Phone=edittelefono
          let phones2=new PhoneNumber()
          phones2.Phone=editcelular
          arrayPhones.push(phones)
          arrayPhones.push(phones2)     
          WorkerObject.Phones=arrayPhones
  
          let arrayAddress= new Array()
          let address = new AddressClass() 
          address.Address=  editdomicilio
          arrayAddress.push(address)
          WorkerObject.Addresses=arrayAddress

          const x =  await WorkerObject.UpdatePremiumWorkers(WorkerObject);
  
      }
      setCorreoM(editcorreo)
      setTelefonoM(edittelefono)
      setCelularM(editcelular)
      setDomicilioM(editdomicilio)
      console.log("enviado ");
    }


        if(firstState===true) {
        ObtenerDatos()  
        setState(false)
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
                    auxCorreo = {editcorreoM}
                    auxTelefono = {edittelefonoM}
                    auxCelular = {editcelularM}
                    auxDomicilio = {editdomicilioM}
                />
            }
            {(!propietario) || (!editando) &&
            <Card containerStyle={Estilos.Tarjeta}>
                <Text style={Estilos.Dato}>
                    Correo: <Text>{editcorreoM}</Text>
                </Text>
                <Text style={Estilos.Dato}>
                    Teléfono: <Text style={Estilos.DatoSecundario}>{edittelefonoM}</Text>
                </Text><Text style={Estilos.Dato}>
                    Celular: <Text>{editcelularM}</Text>
                </Text><Text style={Estilos.Dato}>
                    Domicilio: <Text>{editdomicilioM}</Text>
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