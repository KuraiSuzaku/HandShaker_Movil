import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Card, Input} from 'react-native-elements';
import Colores from '../../Estilos/Colores';
import {Picker} from '@react-native-picker/picker';

export default EditarPerfil = (props) => {

    const [displaypicker, setDisplaypicker] = useState(props.auxCategoria);
    const [displaypicker2, setDisplaypicker2] = useState(props.auxProfesion);

    return (
        <Card containerStyle={Estilos.Tarjeta}>
            <View style={Estilos.Picker}>
                <Picker 
                    containerStyle = {{width: "100%"}}
                    selectedValue={displaypicker}
                    onValueChange={(itemValue) => {
                            props.setCategoria(itemValue);
                            setDisplaypicker(itemValue);
                        }
                    }>
                    <Picker.Item label="Arte" value="Arte" />
                    <Picker.Item label="Comida" value="Comida" />
                    <Picker.Item label="Educación" value="Educacion" />
                    <Picker.Item label="Hogar" value="Hogar" />
                    <Picker.Item label="Salud" value="Salud" />
                    <Picker.Item label="Tecnología" value="Tecnologia" />
                    <Picker.Item label="Otro" value="Otro" />
                    
                </Picker>
            </View>
            <View style={Estilos.Picker}>
            <Picker 
                containerStyle = {{width: "100%"}}
                selectedValue={displaypicker2}
                onValueChange={(itemValue) => {
                        props.setProfesion(itemValue);
                        setDisplaypicker2(itemValue);
                    }
                }>
                <Picker.Item label="Abogado" value="Abogado"/> 
                <Picker.Item label="Albañil" value="Albañil" />
                <Picker.Item label="Arquitecto" value="Arquitecto" /> 
                <Picker.Item label="Artesanal" value="Artesanal" /> 
                <Picker.Item label="Carpintero" value="Carpintero" /> 
                <Picker.Item label="Cerrajero" value="Cerrajero" />
                <Picker.Item label="Comida casera" value="Comida casera" />
                <Picker.Item label="Conserje" value="Conserje" />
                <Picker.Item label="Consultor" value="Consultor" /> 
                <Picker.Item label="Costurero" value="Costurero" />
                <Picker.Item label="Dibujante" value="Dibujante" />
                <Picker.Item label="Diseñador" value="Diseñador" /> 
                <Picker.Item label="Escritor" value="Escritor" /> 
                <Picker.Item label="Electricista" value="Electricista" /> 
                <Picker.Item label="Fitness" value="Fitness" /> 
                <Picker.Item label="Fotógrafo" value="Fotografo" /> 
                <Picker.Item label="Herrero" value="Herrero" /> 
                <Picker.Item label="Informático" value="Informatico" /> 
                <Picker.Item label="Jardinero" value="Jardinero" /> 
                <Picker.Item label="Maestro" value="Maestro" /> 
                <Picker.Item label="Médico" value="Médico" /> 
                <Picker.Item label="Panadero" value="Panadero" /> 
                <Picker.Item label="Pintor" value="Pintor" /> 
                <Picker.Item label="Postres" value="Postres" /> 
                <Picker.Item label="Programador" value="Programador" /> 
                <Picker.Item label="Psicólogo" value="Psicologo" /> 
                <Picker.Item label="Técnico" value="Técnico" /> 
                <Picker.Item label="Veterinario" value="Veterinario" /> 
                <Picker.Item label="Otro" value="Otro" /> 
            </Picker>
            </View>
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