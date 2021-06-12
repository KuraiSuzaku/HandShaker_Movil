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
import { Reviews } from '../../Classes/Reviews';
import  ImageN  from '../../Classes/Image';
import PremiumWorker from '../../Classes/PremiumWorker';
import { Review } from '../../Classes/Review';
import User from '../../Classes/User';
export default EncabezadoPerfil = (props) => {
    const [propietario, setPropietario] = useState(props.owner);
    const [editando, setEditando] = useState(false);

    const [editcategoria, setCategoria] = useState(props.user.Category);
    const [editprofesion, setProfesion] = useState(props.user.Profession);
    const [editdescripcion, setDescripcion] = useState(props.user.JobDescription);
    const [confirm, setConfirm] = useState(false);
    const [avatarCache, setAvatarCache] = useState(null);
    const [backImage, setBackImage] = useState(null);
    const [Starts, setStar] = useState(props.user.RatingStar);
    const [ReviewsState, setReview] = useState(props.user.NReviews);
    
    console.log("OWNER ",props.owner);
    const CambiarDatos = () =>{
        setEditando(true);
        console.log("Se deben cambiar los datos del acerca de, pero primero comprobar que este elemento se activa cuando es el usuario correspondiente al perfil")
    }


    async function GuardarCambios () {
       
      
        console.log("cambios"+ props.user.UserType);
        props.user.Profession=editprofesion
        props.user.Category=editcategoria
        props.user.JobDescription=editdescripcion
 if  (!props.user.UserType.includes("PremiumWorker"))
       {  let WorkerObject = new Worker(props.user.Email);


        WorkerObject.Category = editcategoria;
        WorkerObject.Profession = editprofesion;
        WorkerObject.JobDescription = editdescripcion;

        const x =  await WorkerObject.UpdateWorkers(WorkerObject);

       }else{
console.log("premium")
        let WorkerObject = new PremiumWorker(props.user.Email);
        WorkerObject.Category = editcategoria;
        WorkerObject.Profession = editprofesion;
        WorkerObject.JobDescription = editdescripcion;

        const x =  await WorkerObject.UpdatePremiumWorkers(WorkerObject);
       
    }
 setEditando(false); 
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

    const changeCache = (avatar) => {
        cancelUpload();
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
                            if(avatar)
                                setAvatarCache({
                                    name: response.name,
                                    path: base64
                                });
                            else
                                setBackImage({
                                    name: response.name,
                                    path: base64
                                });
                            setConfirm(true);

                        }).catch( err => console.error(err) );
                } catch (e) {
                    console.log(e);
                }
            }
        });
    }




  /*  const getAllReviews = async() => {
        console.log('RESPONSE: ');
        Revs = new Reviews();
   
   const rev= await  Revs.GetReview(props.user.Email);

 console.log('RESPONSE RESEÑAS: ', rev.status);
 

            //console.log('RESPONSE RESEÑAS: ', rev);
            if  ( rev.status!=202){
                console.log('RESPONSE RESEÑAS: ',rev.data.Stars);
 
                setStar(rev.data.Stars);
                setReview(rev.data.NumberReviews);
        }
    }*/

    





    
    updateAvatar = async () => {
      
        if(avatarCache) {
            /**
             * Sube el nuevo AVATAR a bd
             *  usuario: props.user.Email
             *  nombre: avatarCache.name
             *  path: avatarCache.base64
             */

             const upd= new User(props.user.Email)
        let Imag=new ImageN()
            Imag.Name="Foto Perfil"
            Imag.Path=  avatarCache.path
            upd.ProfilePicture=Imag
            const updSend= await upd.UpdateUser(upd)

            props.setUser(
                {
                    ...props.user,
                    ProfilePicture: {
                        Name: avatarCache.name,
                        Path: avatarCache.path
                    }
                }
            );
        } else {
            /**
             * Sube la nueva IMAGEN DE FONDO a bd
             *  usuario: props.user.Email
             *  nombre: backImage.name
             *  path: backImage.base64
             */

             const updHeader= new User(props.user.Email)
             let Imag=new ImageN()
                 Imag.Name="Foto Perfil"
                 Imag.Path=  backImage.path
                 updHeader.HeaderPicture=Imag
                 const updHeaderSend= await updHeader.UpdateUser(updHeader)
     

             props.setUser(
                {
                    ...props.user,
                    HeaderPicture: {
                        Name: backImage.name,
                        Path: backImage.path
                    }
                }
            );
        }
        cancelUpload();
        navigation.navigate('Perfil', {
            profileUser: null,
            updateProfile: true
        });
    }

    cancelUpload = () => {
        setAvatarCache(null);
        setBackImage(null);
        setConfirm(false);
    }

    //getAllReviews()
    return(
        <View>
            <Image
                source={
                    backImage ?
                    { uri: backImage.path } :
                    { uri: props.user.HeaderPicture.Path}
                }
                style={Estilos.ImagenFondo}
                resizeMode='cover'
                PlaceholderContent={<ActivityIndicator />}
                />
            <View style={{ position: 'absolute', padding: 5 }}>
                {   
                    propietario ?
                    <Icon
                        name='edit'
                        type='font-awesome'
                        color={Colores.etiquetas}
                        size={25}
                        containerStyle={{
                            padding: 5
                        }}
                        onPress={ () => changeCache(false) }
                    /> :
                    null
                }
            </View>
            <View style={Estilos.Fila}>
                <View style={{ justifyContent: 'flex-end' }}>
                    <Rating  {... Starts ==0? setStar(1): true}
                        imageSize={20} 
                        readonly
                        startingValue={Starts} 
                        ratingColor={Colores.simbolos}
                        ratingBackgroundColor={Colores.fondoOscuro}
                        tintColor={Colores.fondo}
                        type='custom'
                        style={Estilos.ContenedorComponente} 
                        />
                    <Text style={Estilos.Informacion}>
                        Evaluaciones: {ReviewsState} 
                    </Text>
                </View>
                {
                    propietario ?
                    <TouchableOpacity onPress={ () => changeCache(true) } >
                        <CustomAvatar {...props} avatarCache={ avatarCache } />
                    </TouchableOpacity> :
                    <CustomAvatar {...props} avatarCache={ null } />
                }
                {(!propietario) &&
                <Button
                    title='Contratar'
                    containerStyle={[Estilos.ContenedorComponente, { paddingBottom: 15 }]}
                    buttonStyle={Estilos.BotonContratar}
                    titleStyle={Estilos.EtiquetaBoton}
                    onPress={() => navigation.navigate('Contratar',{user: props.user})}
                    />
                }
                {propietario && (!editando) &&
                <Button
                    title='Editar'
                    containerStyle={[Estilos.ContenedorComponente, { paddingBottom: 15 }]}
                    buttonStyle={Estilos.BotonEditar}
                    titleStyle={Estilos.EtiquetaBoton}
                    onPress={CambiarDatos}
                />
                }
                {propietario && editando &&
                    <Button
                        title='Guardar'
                        containerStyle={[Estilos.ContenedorComponente, { paddingBottom: 15 }]}
                        buttonStyle={Estilos.BotonEditar}
                        titleStyle={Estilos.EtiquetaBoton}
                        onPress={GuardarCambios}
                    />
                }
                {
                    confirm ?
                    <View style={Estilos.ButtonForm} >
                        <Button
                            title='Cancelar'
                            containerStyle={[Estilos.ConfirmButtonContainer, Estilos.CancelButtonContainer]}
                            buttonStyle={[Estilos.ConfirmButton, Estilos.CancelButton]}
                            titleStyle={Estilos.ButtonFormTitle}
                            onPress={ () => cancelUpload() }
                        />
                        <Button
                            title='Confirmar'
                            containerStyle={Estilos.ConfirmButtonContainer}
                            buttonStyle={Estilos.ConfirmButton}
                            titleStyle={Estilos.ButtonFormTitle}
                            onPress={ () => updateAvatar() }
                        />
                    </View> :
                    null
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
                props.avatarCache ?
                { uri: props.avatarCache.path } :
                { uri: props.user.ProfilePicture.Path }
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
        position: 'absolute',
        width: '100%',
        marginTop: 50,
        flexDirection:'row',
        justifyContent: 'space-evenly',
    },
    ButtonForm: {
        position: 'absolute',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '85%'
    },
    ConfirmButton: {
        paddingVertical: 2,
        borderRadius: 25,
        backgroundColor: '#282'
    }, 
    CancelButton: {
        backgroundColor: '#822'
    },
    ButtonFormTitle: {
        margin: 0,
        fontSize: 14
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