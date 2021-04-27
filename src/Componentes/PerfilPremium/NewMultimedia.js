import React, { useState } from 'react';
import {
    Alert,
    StyleSheet,
    TouchableOpacity,
    View
} from 'react-native';
import {
    Card,
    Text
} from 'react-native-elements';
import { MultimediaItems } from '../../Classes/MultimediaItems';
import Colores from '../../Estilos/Colores';

export default props => {
    const [image, setImage] = useState(null);

    const AddImage = () => {
        console.log('Get image');
    };
    
    const Publish = () => {
        if(image)
           { console.log('Publicate ' + image);
            var date = new Date(); 
            console.log('Publicate ' + image);
            img=new Image("descripcion","ruta/r");
            MultimediaItemObject=new MultimediaItems(date,"texto imagen",img);
            MultimediaObject=new Multimedia("605fac174791ea436cc76741",MultimediaItemObject);
            MultimediaObject.AddMultimedia(MultimediaObject)

        }
        else
            Alert.alert('Necesita seleccionar una imagen antes de poder publicar');
    };

    return(
        <Card containerStyle={Estilos.Tarjeta}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <TouchableOpacity onPress={ AddImage}>
                    <View style={Estilos.Boton}>
                        <Text style={Estilos.EtiquetaBoton}>
                            Seleccionar imagen
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