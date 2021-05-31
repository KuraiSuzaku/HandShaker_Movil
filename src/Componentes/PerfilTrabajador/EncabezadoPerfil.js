import React, {useState, Component} from 'react';
import {ActivityIndicator, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Avatar, Button, Icon, Image, Rating, Text} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import Colores from '../../Estilos/Colores';
import EditarPerfil from './EditarPerfil';
import {Worker} from '../../Classes/Worker';
import Clases from '../../Classes/Indice';
import ImagePicker from 'react-native-image-picker';
import ImgToBase64 from 'react-native-image-base64';

export default EncabezadoPerfil = (props) => {
    
    const [propietario, setPropietario] = useState(props.owner);
    const [editando, setEditando] = useState(false);

    const [editcategoria, setCategoria] = useState(props.user.Category);
    const [editprofesion, setProfesion] = useState(props.user.Profession);
    const [editdescripcion, setDescripcion] = useState(props.user.JobDescription);
    
    console.log("OWNER ",props.owner);
    const CambiarDatos = () =>{
        setEditando(true);
        console.log("Se deben cambiar los datos del acerca de, pero primero comprobar que este elemento se activa cuando es el usuario correspondiente al perfil")
    }


    async function GuardarCambios () {
        setEditando(false); 
        //ImprimirDatos();

        let WorkerObject = new Worker(props.user.Email);
        WorkerObject.Category = editcategoria;
        WorkerObject.Profession = editprofesion;
        WorkerObject.JobDescription = editdescripcion;

        const x =  await WorkerObject.UpdateWorkers(WorkerObject);

        /*
        WorkerObject.GetWorkerInformation(WorkerObject).then((res) => {
            WorkerObject=res; 
            props.setUser(WorkerObject);
            setCategoria(props.user.Category);
            setProfesion(props.user.Profession);
            setDescripcion(props.user.JobDescription);
            console.log("Props.user después de la actualización de WorkerObject: ", props.user);
        });*/

        //ActualizarUsuario(WorkerObject);

    }

    const ActualizarUsuario = (Trabajador) => {
        Trabajador.GetWorkerInformation(Trabajador).then((res) => {
            props.setUser(res)
        });


    }

    const ImprimirDatos = () =>{
        console.log("Aquí va todo el desmadre de tomar datos de cajas de texto y aventarlas al server");
        console.log("IDUser (email): " + props.user.Email);
        console.log("categoria: " + editcategoria);
        console.log("profesion: " + editprofesion);
        console.log("descripcion: " + editdescripcion);
    }

    const navigation = useNavigation();

    const changeAvatar = () => {
        const options = {
            mediaType: 'photo',
            quality: 1,
            maxWidth: 500,
            maxHeight: 500
        };
        ImagePicker.showImagePicker(options, (response) => {      
            if(!response.didCancel){
                let base64 = null;
                try {
                    ImgToBase64.getBase64String(response.uri)
                        .then( base64String => {
                            base64 = 'data:image/jpg;base64,' + base64String;

                        /**
                         * Sube la nueva imagen a bd
                         *  usuario: props.user.Email
                         *  nombre: response.name
                         *  path: base64
                         */
                            
                        }).catch( err => console.error(err) );
                } catch (e) {
                    console.log(e);
                }
            }
        });
    }
    
    return(
        <View>
            <Image
                source={ 
                     props.user.HeaderPicture ?
                    { uri: props.user.HeaderPicture.Path } :
                    require('../../../public/Profile/user.png')
                }
             /*  source={
                props.user.ProfilePicture ?
                { uri: props.user.HeaderPicture.Path } :
                require('../../../public/Profile/user.png')
            }*/
                style={Estilos.ImagenFondo}
                resizeMode='cover'
                PlaceholderContent={<ActivityIndicator />}
                />
            <View style={Estilos.Fila}>
                <Rating 
                    imageSize={20} 
                    readonly
                    startingValue={props.valoracion} 
                    ratingColor={Colores.simbolos}
                    ratingBackgroundColor={Colores.fondoOscuro}
                    tintColor={Colores.fondo}
                    type='custom'
                    style={Estilos.ContenedorComponente} 
                    />
                {
                    propietario ?
                    <TouchableOpacity onPress={ () => changeAvatar() } >
                        <CustomAvatar {...props} />
                    </TouchableOpacity>
                     :
                    <CustomAvatar {...props} />
                }
                {(!propietario) &&
                <Button
                    title='Contratar'
                    containerStyle={Estilos.ContenedorComponente}
                    buttonStyle={Estilos.BotonContratar}
                    titleStyle={Estilos.EtiquetaBoton}
                    onPress={() => navigation.navigate('Contratar',{user: props.user})}
                    />
                }
                {propietario && (!editando) &&
                <Button
                    title='Editar'
                    containerStyle={Estilos.ContenedorComponente}
                    buttonStyle={Estilos.BotonEditar}
                    titleStyle={Estilos.EtiquetaBoton}
                    onPress={CambiarDatos}
                />
                }
                {propietario && editando &&
                    <Button
                        title='Guardar'
                        containerStyle={Estilos.ContenedorComponente}
                        buttonStyle={Estilos.BotonEditar}
                        titleStyle={Estilos.EtiquetaBoton}
                        onPress={GuardarCambios}
                    />
                }
            </View>
            {(!editando) &&
                <View style={Estilos.Datos}>
                    <Text style={Estilos.Informacion}>
                        {props.user.Name} {props.user.LastName}
                    </Text>
                    <Text style={Estilos.Informacion}>
                        {props.user.Profession}
                    </Text>
                    <Text style={Estilos.Informacion}>
                        {props.user.JobDescription}
                    </Text>
                </View>
            }
            {propietario && editando &&
            <View style = {{padding: 40}}>
                <EditarPerfil
                    setCategoria = {setCategoria}
                    setDescripcion = {setDescripcion}
                    setProfesion = {setProfesion}
                    auxCategoria = {props.user.Category}
                    auxProfesion = {props.user.Profession} //Estos los debo obtener desde la BD
                    auxDescripcion = {props.user.JobDescription}
                />
            </View>
            }
        </View>
    );
}

const CustomAvatar = (props) => {
    return(
        <Avatar
            rounded
            source={
                props.user.ProfilePicture ?
                { uri: props.user.ProfilePicture.Path } :
                require('../../../public/Profile/user.png')
            }
            size={100}
            containerStyle={Estilos.ContenedorAvatar}
        >
                {
                    props.owner ?
                    <TouchableOpacity onPress={() => console.log('Change Avatar')} >
                        <Avatar.Accessory size={30} /> 
                    </TouchableOpacity> : 
                    null
                }
        </Avatar>
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