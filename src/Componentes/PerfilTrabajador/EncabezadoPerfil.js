import React, {useState, Component} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {Avatar, Button, Image, Rating, Text} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import Colores from '../../Estilos/Colores';
import EditarPerfil from './EditarPerfil';

export default EncabezadoPerfil = ({imagenFondo, avatar, valoracion, nombre, titulo, descripcion}) => {
       
    const [propietario, setPropietario] = useState('si');
    const [editando, setEditando] = useState('no');
    const [editcategoria, setCategoria] = useState();
    const [editprofesion, setProfesion] = useState();
    const [editdescripcion, setDescripcion] = useState();
    
    const CambiarDatos = () =>{
        setEditando('si');
        console.log("Se deben cambiar los datos del acerca de, pero primero comprobar que este elemento se activa cuando es el usuario correspondiente al perfil")
    }

    const GuardarCambios = () => {
        setEditando('no'); 
        console.log("Aquí va todo el desmadre de tomar datos de cajas de texto y aventarlas al server");
        console.log("categoria: " + editcategoria);
        console.log("profesion: " + editprofesion);
        console.log("descripcion: " + editdescripcion);
    }

    const navigation = useNavigation();
    
    return(
        <View>
            <Image
                source={imagenFondo}
                style={Estilos.ImagenFondo}
                resizeMode='cover'
                PlaceholderContent={<ActivityIndicator />}
                />
            <View style={Estilos.Fila}>
                <Rating 
                    imageSize={20} 
                    readonly 
                    startingValue={valoracion} 
                    ratingColor={Colores.simbolos}
                    ratingBackgroundColor={Colores.fondoOscuro}
                    tintColor={Colores.fondo}
                    type='custom'
                    style={Estilos.ContenedorComponente} 
                    />
                <Avatar
                    rounded
                    icon={{name:'user', type:'font-awesome', color:'black'}}
                    source={avatar}
                    size={100}
                    containerStyle={Estilos.ContenedorAvatar}
                    />
                {propietario === 'no' &&
                <Button
                    title='Contratar'
                    containerStyle={Estilos.ContenedorComponente}
                    buttonStyle={Estilos.BotonContratar}
                    titleStyle={Estilos.EtiquetaBoton}
                    onPress={() => navigation.navigate('Contratar')}
                    />
                }
                {propietario === 'si' && editando === 'no' &&
                <Button
                    title='Editar'
                    containerStyle={Estilos.ContenedorComponente}
                    buttonStyle={Estilos.BotonEditar}
                    titleStyle={Estilos.EtiquetaBoton}
                    onPress={CambiarDatos}
                />
                }
                {propietario === 'si' && editando === 'si' &&
                    <Button
                        title='Guardar'
                        containerStyle={Estilos.ContenedorComponente}
                        buttonStyle={Estilos.BotonEditar}
                        titleStyle={Estilos.EtiquetaBoton}
                        onPress={GuardarCambios}
                    />
                }
            </View>
            {editando === 'no' &&
                <View style={Estilos.Datos}>
                    <Text style={Estilos.Informacion}>
                        {nombre}
                    </Text>
                    <Text style={Estilos.Informacion}>
                        {titulo}
                    </Text>
                    <Text style={Estilos.Informacion}>
                        {descripcion}
                    </Text>
                </View>
            }
            {propietario === 'si' && editando === 'si' &&
            <View style = {{padding: 40}}>
                <EditarPerfil
                    setCategoria = {setCategoria}
                    setDescripcion = {setDescripcion}
                    setProfesion = {setProfesion}
                    auxCategoria = "categoriaASDAS"
                    auxProfesion = {titulo} //Estos los debo obtener desde la BD
                    auxDescripcion = {descripcion}
                />
            </View>
            }
        </View>
    );
}
// ESTILOS
const Estilos = StyleSheet.create({
    ImagenFondo: {
        height: 100,
    },
    ContenedorAvatar: {
        backgroundColor: 'gray',
    },
    Fila: {
        alignSelf: 'center',
        position: 'absolute',
        width: '100%',
        marginTop: 50,
        flexDirection:'row',
        justifyContent: 'space-evenly',
    },
    ContenedorComponente: {
        justifyContent: 'flex-end',
        marginBottom: 7,
    },
    BotonContratar: {
        backgroundColor: Colores.fondoBotonOscuro,
        borderRadius: 20,
        height: 24,
        width: 88,
        padding: 0,
    },
    BotonEditar: {
        backgroundColor: Colores.fondoBotonOscuro,
        borderRadius: 20,
        height: 24,
        width: 88,
        padding: 0,
    },
    EtiquetaBoton: {
        marginHorizontal: 15,
        marginVertical: 3,
        padding: 0,
        color: Colores.letrasSobreNegro,
        fontSize: 12,
    },
    Datos: {
        alignItems: 'center',
        marginTop: 55,
        marginBottom: 5,
    },
    Infromacion: {
        fontSize: 12,
    },
});