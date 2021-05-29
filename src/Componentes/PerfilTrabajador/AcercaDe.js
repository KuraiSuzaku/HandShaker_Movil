import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Card, Text, Image, Button} from 'react-native-elements';
import { baseProps } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';
import Colores from '../../Estilos/Colores';
import EditarAcercaDe from './EditarAcercaDe';

export default AcercaDe = ({acercade}) => {
    const [propietario, setPropietario] = useState(true);
    const [editando, setEditando] = useState(false);

    const [edittexto, setTexto] = useState();

    const CambiarDatos = () =>{
        setEditando(true);
        console.log("Se deben cambiar los datos del acerca de, pero primero comprobar que este elemento se activa cuando es el usuario correspondiente al perfil")
    }

    const GuardarCambios = () => {
        setEditando(false); 
        console.log("Aquí va todo el desmadre de tomar datos de cajas de texto y aventarlas al server");
        console.log("acerca de: " + edittexto);
    }

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
            {(!propietario) || (!editando) &&
            <Card containerStyle={Estilos.Tarjeta}>

                <Text>{props.acercade.informacion}</Text>
                    <Image
                        source={props.acercade.imagen}
                        style={Estilos.Imagen}
                    />

            </Card>
            }
        </View>
    );
}


// ESTILOS
const Estilos = StyleSheet.create({
    Titulo: {    
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 12,
        marginLeft: 26,
    },
    Tarjeta: {
        borderRadius: 20,
        paddingVertical: 10,
        flexDirection: 'row',
    },
    Imagen: {
        flex: 1,
        width: '100%',
        height: 300,
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