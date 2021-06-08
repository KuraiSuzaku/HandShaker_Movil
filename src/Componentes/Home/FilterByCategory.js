import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import Colores from '../../Estilos/Colores'
import IndividualWorker from './IndividualWorker';
import { PremiumWorker } from "./../../Classes/PremiumWorker"
import { TouchableOpacity } from 'react-native';


export default class FilterByCategory extends Component {
    constructor(props){
        super(props);
        this.handleTrabajadores = this.handleTrabajadores.bind(this)
        this.state={
            trabajadores: []
        }
        console.log("J Title: " + this.props.route.params.jobTitle)
        this.trabajadores(this.props.route.params.jobTitle)
    }

    handleTrabajadores (text){
        this.setState({ trabajadores: text })
    }

    trabajadores(job){
        //console.log( this.state.profesiones )
        //this.props.profesiones.forEach(profesiones => {
        Trabajador =  new PremiumWorker();

        Trabajador.GetPremiumWorkersWithProfession(job).then((trabajadoresWithProfession) => {
            this.handleTrabajadores(trabajadoresWithProfession)
            // trabajadoresWithProfession.forEach(trabajador => {
            //     console.log("trabajador de "+trabajador.Name+" nombre profesion " + job+ " foto " + trabajador.ProfilePicture.Path )
            // });  
        }); 
        // console.log("Profesion "+ profesiones.Name )
        //console.log("Imagen "+profesiones.ImageProfession.Path )

        // })
    }

    render() {
        return (
            <ScrollView style={ styles.bg }>
                <Text style={ styles.subtitle }>{ this.props.route.params.jobTitle }</Text>
                {
                    this.state.trabajadores.map(item =>
                        <TouchableOpacity onPress={ ()=>this.props.navigation.navigate("Perfil", { profileUser: item.Email, updateProfile: true }) } key={ item.Email }>
                            <IndividualWorker worker={ item } key={ item.Name }/>
                            {/* <Image 
                                key={ item.Name }
                                style={ styles.workerProfilePicture }
                                resizeMode="contain"
                                source={ {uri: 'https://reactnative.dev/img/tiny_logo.png'} }
                            />  */}
                        </TouchableOpacity>
                    )
                }
            </ScrollView>
        )
    }
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