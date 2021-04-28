import React, {useState}  from 'react';
import {StyleSheet, View,} from 'react-native';
import {Card, Text, Button,} from 'react-native-elements';
//////////
import Colores from '../../Estilos/Colores';
//////////

export default Contacto = ({contacto}) => {
    const [propietario, setPropietario] = useState('si');
    const [editando, setEditando] = useState('no');

    const CambiarDatos = () =>{
        setEditando('si');
        console.log("Se deben cambiar los datos del acerca de, pero primero comprobar que este elemento se activa cuando es el usuario correspondiente al perfil")
    }

    const GuardarCambios = () => {
        setEditando('no'); 
        console.log("Aquí va todo el desmadre de tomar datos de cajas de texto y aventarlas al server");
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
                {propietario === 'si' && editando === 'no' &&
                <Button
                    title='Editar'
                    buttonStyle={Estilos.Boton}
                    titleStyle={Estilos.EtiquetaBoton}
                    onPress={CambiarDatos}
                />
                }
                {propietario === 'si' && editando === 'si' &&
                <Button
                    title='Guardar'
                    buttonStyle={Estilos.Boton}
                    titleStyle={Estilos.EtiquetaBoton}
                    onPress={GuardarCambios}
                />
                }
            </View>
            </View>
            <Card containerStyle={Estilos.Tarjeta}>
                <Text style={Estilos.Dato}>
                    Correo: <Text>{contacto.correo}</Text>
                </Text>
                <Text style={Estilos.Dato}>
                    Teléfono: <Text>{contacto.telefono}</Text>
                </Text><Text style={Estilos.Dato}>
                    Celular: <Text>{contacto.celular}</Text>
                </Text><Text style={Estilos.Dato}>
                    Domicilio: <Text>{contacto.domicilio}</Text>
                </Text>
            </Card>
            {/*Google Maps*/}
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
    },
    Dato: {
        fontSize: 12,
        fontWeight: 'bold'
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