import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import Colores from '../../Estilos/Colores'
import Job from './Job'
import PremiumWorkerC from './PremiumWorkerC'
import IndividualCategory from './IndividualCategory'
import {PremiumWorker} from "./../../Classes/PremiumWorker"

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            premiumWorker: null
        }
    }

    setPremiumWorker(pw){
        this.setState({premiumWorker:pw});
    }

    RandomWorker(){
        let PremiumWorkers = new PremiumWorker();  
        PremiumWorkers.GetPremiumWorkers().then(res=>{
            // console.log(res[0]);
            // console.log("==============================");
            // console.log(res[0].Name);
            this.setPremiumWorker(res[1]);
        })
    }

    render() {
       // this.RandomWorker();
        console.log("esto pasa despues")
        return (
            <ScrollView style={ styles.bg }>
                {
                    this.state.premiumWorker ?
                    <PremiumWorkerC premiumWorker={ this.state.premiumWorker }/> :
                        this.RandomWorker() 
                    
                }

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