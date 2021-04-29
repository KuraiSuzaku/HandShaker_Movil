import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import Colores from '../../Estilos/Colores'
import Job from './Job'
import PremiumWorker from './PremiumWorker'
import IndividualCategory from './IndividualCategory'

export default class Home extends Component {
    render() {
        return (
            <ScrollView style={ styles.bg }>

                <PremiumWorker/>
                <Text style={ styles.subtitle }>Categorías</Text>
                <Categories/>
                <Text style={ styles.subtitle }>Trabajos</Text>
                <Job jobTitle="Consultores"/>
                <Job jobTitle="Técnicos"/>
                <Job jobTitle="Jardineros"/>
                
            </ScrollView>
        )
    }
}

function Categories(){
    return(
        <ScrollView horizontal={true} style={ styles.categories }>
            <IndividualCategory name="Postres"/>
            <IndividualCategory name="Moda"/>
            <IndividualCategory name="Comida"/>
            <IndividualCategory name="Hogar"/>
            <IndividualCategory name="Otros"/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
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
    

})