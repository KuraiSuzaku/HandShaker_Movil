import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import EncabezadoApp from './../EncabezadoApp'
import Navegacion from './../Navegacion'
import Colores from '../../Estilos/Colores'

export default class SobreNosotros extends Component {
    render() {
        return (
            <View style={ styles.home }>
                <EncabezadoApp style={ styles.enc }/>
                <View style={ styles.flex }>
                    <Text>Something</Text>
                </View>
                <Navegacion style={ styles.nav }/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    flex: {
        flex: 3
    },
    bg: {
        flex: 1,
        backgroundColor: Colores.fondo,
        padding: 10
    },
    subtitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10
    },
    categories: {
        flexDirection: "row",
        marginBottom: 10
    },
    nav:{
        flex:1
    },
    enc:{
        flex: 1
    },
    home:{
        flex: 10
    }
})