import React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import {Avatar, Card, Button} from 'react-native-elements';
import Colores from '../../Estilos/Colores';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default Contratacion = (props) => {
    const avatar = require('../../../public/Profile/user.png');

    const datos_impresos = {
        Name: "Perro Javier Gonzales Gonzalo",
        CreationDate: "02/02/2021",
        ContractDate: "20/02/2021",
        Subject: "Contratacion wuuu",
        Linkclient: "Soy el link del cliente.com",
        Indications: "PUES OCUPO UN TRABAJO ASÍ BIEN PERRÓN PARA DENTRO DE 15 DÍAS XD",
        Address: "Calle no sé #444 Col. La Juanita, Tonalá, Jalisco",
    }

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
                        <Text style={Estilos.Titulo}>{datos_impresos.Name}</Text>
                        <Text style={Estilos.TextoSecundario}>Realizar para: {datos_impresos.ContractDate}</Text>
                        <Text style={Estilos.TextoSecundario}>Asunto: {datos_impresos.Subject}</Text>
                    </View>
                </View>

                <View style={{flexDirection: 'row', width: "100%", justifyContent: 'center', margin: 10}}>
                    <Button
                        title='Aceptar'
                        buttonStyle={Estilos.BotonAceptar}
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

                <View style={{flexDirection: 'row', width: "100%", margin: 10}}>
                    <Text style={Estilos.Titulo}>Creado:</Text>
                    <Text style={Estilos.Texto}>{datos_impresos.CreationDate} </Text>
                </View>

                <View style={{width: "100%", margin: 10}}>
                    <Text style={Estilos.Titulo}>Contacto del cliente:</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={Estilos.TextoSecundario}>Nombre:</Text><Text style={Estilos.Texto}> {datos_impresos.Name} </Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={Estilos.TextoSecundario}>Perfil:</Text><Text style={Estilos.Texto}> {datos_impresos.Linkclient} </Text>
                    </View>
                </View>
                
                <View style={{width: "100%", margin: 10}}>
                    <Text style={Estilos.Titulo}>Indicaciones del cliente</Text>
                    <Text style={Estilos.Texto}>{datos_impresos.Indications} </Text>
                </View>

                
                <View style={{width: "100%", margin: 10}}>
                    <Text style={Estilos.Titulo}>Lugar</Text>
                    <Text style={Estilos.Texto}>{datos_impresos.Address}</Text>
                </View>
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