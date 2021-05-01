import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native';
import { Button, View, Text, StyleSheet } from 'react-native'
import Colores from './../../Estilos/Colores'

export default class EscogerTipoUsuario extends Component {
    render() {
        return (
            <View style={ styles.container }>
                <Text style={ styles.title }>
                    ¿Cómo desea registrarse?
                </Text>
                <MenuButton title="Cliente"/>
                <MenuButton title="Trabajador"/>
            </View>
        )
    }
}

const MenuButton = ( props ) => (
    <View style={ styles.btnView }>
        <TouchableOpacity style={ styles.btn }>
            <Text style={ styles.btnTxt }>
                { props.title }
            </Text>
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      marginHorizontal: 16,
    },
    title: {
      textAlign: 'center',
      marginBottom: 20,
    },
    btnView: {
        //flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // marginVertical: 10,
        // width: 200,
        // alignSelf: 'center',
        // borderRadius: 100,
        // padding: 10
    },
    btn: {
        width: 150,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 20,
        backgroundColor: Colores.negro,
        marginVertical: 20
    },
    btnTxt: {
        color: Colores.blanco
    }
  });
