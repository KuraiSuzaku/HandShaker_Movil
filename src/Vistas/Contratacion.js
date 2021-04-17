import React from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import {
    Card,
    Input,
    Button,
} from 'react-native-elements';
import Colores from '../Estilos/Colores';

export default Contratacion = () => {
    
    const Contratar = () => {
        //Comprobar que los datos están completos.
        //Enviar mensaje de alerta de si quiere contratar de verdad
        console.log('Conexión a la base de datos con la info para contratar, estoy en PerfilTrabajador/Contratacion.js');
    };

    return(
            <Card containerStyle={Estilos.Tarjeta}>
                <Input
                    name='asunto'
                    placeholder='Asunto'
                    style={Estilos.Input}
                    inputContainerStyle={{borderBottomWidth:0}}
                />
                <Input
                    name='fecha'
                    placeholder='¿Cuando lo necesita? (DD/MM/AA)'
                    style={Estilos.Input}
                    inputContainerStyle={{borderBottomWidth:0}}
                />
                <Input
                    name='indicaciones'
                    placeholder={'Indicaciones o información del trabajo a realizar \n \n \n \n \n'}
                    style={Estilos.Input}
                    multiline={true}
                    inputContainerStyle={{borderBottomWidth:0}}
                />
                <Button
                    title='Contratar ya'
                    buttonStyle={Estilos.BotonContratar}
                    titleStyle={Estilos.EtiquetaBoton}
                    onPress={Contratar}
                />
            </Card>
    );
}

const Estilos = StyleSheet.create({
    Titulo: {    
        fontSize: 12,
        fontWeight: 'bold',
        marginTop: 12,
        marginLeft: 26,
    },
    Input:{
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
    BotonContratar: {
        left: '300%' ,
        backgroundColor: Colores.fondoBotonOscuro,
        borderRadius: 20,
        height: 32,
        width: 150,
        padding: 0,
    },
    EtiquetaBoton: {
        marginHorizontal: 15,
        marginVertical: 3,
        padding: 0,
        color: Colores.letrasSobreNegro,
        fontSize: 18,
    },
});