import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Card, Text, Image, Button} from 'react-native-elements';
import { baseProps } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';
import Colores from '../../Estilos/Colores';
import EditarAcercaDe from './EditarAcercaDe';
import {About} from '../../Classes/About'


export default AcercaDe = (props) => {
    const [propietario, setPropietario] = useState(props.owner);

    const [Desc, setDesc] = useState("");
    const [editando, setEditando] = useState(false);

    const [edittexto, setTexto] = useState();

    const CambiarDatos = () =>{
        setEditando(true);
        //console.log("Se deben cambiar los datos del acerca de, pero primero comprobar que este elemento se activa cuando es el usuario correspondiente al perfil")
    
    
    }

    

    const GuardarCambios = () => {
        setEditando(false); 
        //console.log("Aquí va todo el desmadre de tomar datos de cajas de texto y aventarlas al server");
        //console.log("acerca de: " + edittexto);
        let about= new About()
        console.log("email " + props.user.Email);
        about.EmailWorker=props.user.Email
        about.Description=edittexto
        about.AddAbout(about)
    }

    const GetAbout = async () => {
console.log("aqui")
        let about= new About()
       
        const aboutWait = await about.GetAbout(props.user.Email)
        console.log(aboutWait,"NO ...")
            

        if(typeof(aboutWait.Description) != "undefined"){
            console.log("desc",aboutWait.Description)
        setDesc(aboutWait.Description)
        } else{
            console.log("NO ...")
            
        }
    }

    GetAbout();
    return(
        <View>
            <View  style={{flexDirection:'row', justifyContent:'space-between', paddingTop: 10, paddingRight: 10}}>
                <View style={{flex:4}}>
                <Text style={Estilos.Titulo}>
                    Acerca De {props.user.Name} {props.user.LastName}
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
                <EditarAcercaDe 
                    setTexto = {setTexto}
                    auxTexto = {props.acercade.informacion}
                />
            }
            {((!propietario) || (!editando) )&&
            <Card containerStyle={Estilos.Tarjeta}>

                <Text>{Desc}</Text>
                   
            </Card>
            }
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
        fontSize: 17,
        fontWeight: 'bold'
    },
    DatoSecundario: {
        fontSize: 17,
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