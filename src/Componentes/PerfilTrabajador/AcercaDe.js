import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Card, Text, Image, Button} from 'react-native-elements';
import Colores from '../../Estilos/Colores';

export default AcercaDe = ({acercade}) => {
    
    const CambiarDatos = () =>{
        console.log("Se deben cambiar los datos del acerca de, pero primero comprobar que este elemento se activa cuando es el usuario correspondiente al perfil")
    }

    return(
        <View>
            <View  style={{flexDirection:'row', justifyContent:'space-between', paddingTop: 10, paddingRight: 10}}>
            <View style={{flex:4}}>
            <Text style={Estilos.Titulo}>
                Acerca De {acercade.nombre}
            </Text>
            </View>
            <View style={{flex:1, paddingTop: 10}}>
            <Button
                    title='Editar'
                    buttonStyle={Estilos.Boton}
                    titleStyle={Estilos.EtiquetaBoton}
                    onPress={CambiarDatos}
            />
            </View>
            </View>
            <Card containerStyle={Estilos.Tarjeta}>
                <Text>{acercade.informacion}</Text>
                    <Image
                        source={acercade.imagen}
                        style={Estilos.Imagen}
                    />
            </Card>
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