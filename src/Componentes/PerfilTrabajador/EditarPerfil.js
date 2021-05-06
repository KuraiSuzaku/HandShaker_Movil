import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Card, Input} from 'react-native-elements';
import Colores from '../../Estilos/Colores';
import {Picker} from '@react-native-picker/picker';

export default EditarPerfil = (props) => {

    const [displaypicker, setDisplaypicker] = useState(props.auxCategoria);

    return (
        <Card containerStyle={Estilos.Tarjeta}>
            <View style={Estilos.Picker}>
                <Picker 
                    containerStyle = {{width: "100%"}}
                    selectedValue={displaypicker}
                    onValueChange={(itemValue, itemIndex) => {
                            props.setCategoria(itemValue);
                            setDisplaypicker(itemValue);
                        }
                    }>
                    <Picker.Item label="Categoria1" value="c1" />
                    <Picker.Item label="Categoria2" value="c2" />
                    <Picker.Item label="Categoria3" value="c3" />
                    <Picker.Item label="Categoria4" value="c4" />
                </Picker>
            </View>
            <Input
                name='profesion'
                placeholder={props.auxProfesion}
                style={Estilos.Input}
                label='Profesion'
                onChangeText={(inputtexto)=>{props.setProfesion(inputtexto)}}
                labelStyle={Estilos.TextoSecundario}
                inputContainerStyle={{borderBottomWidth:0}}
                maxLength={200}
            />
            <Input
                name='descripcion'
                placeholder={props.auxDescripcion}
                style={Estilos.Input}
                multiline={true}
                label='Descripcion'
                onChangeText={(inputtexto)=>{props.setDescripcion(inputtexto)}}
                labelStyle={Estilos.TextoSecundario}
                inputContainerStyle={{borderBottomWidth:0}}
                maxLength={200}
            />
        </Card>
    );
}

const Estilos = StyleSheet.create({
    Tarjeta: {
        borderRadius: 20,
        backgroundColor: Colores.fondo,
    },
    Picker: {
        borderRadius: 10,
        padding: 0,
        backgroundColor: '#FFFFFF',
        textAlign: "center",
        marginBottom: 30,
        margin: 10,
    },
    Input:{
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
        textAlignVertical: 'top',
        width: '100%',
    },
    TextoSecundario: {
        color: Colores.etiquetas,
        fontSize: 16,   
        textAlign: 'left',
        fontWeight: 'normal',
    },
    Imagen: {
        flex: 1,
        width: '100%',
        height: 300,
    },
});