import React, { useState } from 'react';
import {
    Alert,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import { Card, Text } from 'react-native-elements';
import { Post } from '../../Classes/Post';
import { Posts } from '../../Classes/Posts';
import { Image } from '../../Classes/Image';
import Colores from '../../Estilos/Colores';

export default props => {
    const [publication, setPublication] = useState(null);
    const [image, setImage] = useState(null);
    const AddImage = () => {
        console.log('Get image');
    };
    const Publish = () => {
        if(publication){

            /*Add a new Post*/
            var date = new Date(); 
            console.log('Publicate ' + publication);
            img=new Image("descripcion","ruta/r");
            PostObbject=new Post(date,publication,img);
            PostsObject=new Posts("605fac174791ea436cc76741",PostObbject);
            PostsObject.AddPost(PostsObject)
        }
        else
            Alert.alert('Se necesita un contenido para poder crear una nueva publicación');
    };
    return(
        <Card containerStyle={Estilos.Tarjeta} >
            <View>
            <TextInput
                placeholder='¿Desea publicar algo nuevo?'
                style={Estilos.Input}
                onChangeText={ setPublication }
            />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <TouchableOpacity onPress={ AddImage}>
                    <View style={Estilos.Boton}>
                        <Text style={Estilos.EtiquetaBoton}>
                            Agregar imagen
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={ Publish }>
                    <View style={[Estilos.Boton, { backgroundColor: Colores.simbolos }]}>
                        <Text style={Estilos.EtiquetaBoton}>
                            Publicar
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </Card>
    );
};

const Estilos = StyleSheet.create({
    Tarjeta: {
        borderRadius: 20,
        padding: 10
    },
    Input: {
        borderWidth: 1,
        borderColor: Colores.etiquetas,
        borderRadius: 25,
        fontSize: 12,
        paddingVertical: 0,
        paddingHorizontal: 20,
        margin: 5
    },
    Boton: {
        backgroundColor: Colores.fondoBotonOscuro,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 25
    },
    EtiquetaBoton: {
        color: Colores.letrasSobreNegro,
        fontSize: 12
    }
});