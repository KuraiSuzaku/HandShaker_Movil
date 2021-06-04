import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native';
import { View, Text, Image, StyleSheet } from 'react-native'
import Colores from '../../Estilos/Colores'
import { PremiumWorker } from "./../../Classes/PremiumWorker"
import { useNavigation } from '@react-navigation/native';
import FilterByCategory from './FilterByCategory';

export default class Job extends Component {
    constructor(props){
        super(props);
        this.handleTrabajadores = this.handleTrabajadores.bind(this)
        this.state={
            trabajadores: []
        }
        this.trabajadores(this.props.jobTitle)
    }

    handleTrabajadores (text){
        this.setState({ trabajadores: text })
    }

    trabajadores(job){
        ////console.log( this.state.profesiones )
        //this.props.profesiones.forEach(profesiones => {
        Trabajador =  new PremiumWorker();

        Trabajador.GetPremiumWorkersWithProfession(job).then((trabajadoresWithProfession) => {
            this.handleTrabajadores(trabajadoresWithProfession)
            // trabajadoresWithProfession.forEach(trabajador => {
            //     //console.log("trabajador de "+trabajador.Name+" nombre profesion " + job+ " foto " + trabajador.ProfilePicture.Path )
            // });  
        }); 
        // //console.log("Profesion "+ profesiones.Name )
        ////console.log("Imagen "+profesiones.ImageProfession.Path )

        // })
    }

    render() {
        return (
            <View >
                <TouchableOpacity onPress={ ()=>this.props.navigation.navigate("FilterByCategory", { jobTitle: this.props.jobTitle }) } style={ styles.individualJob }>
                {/* ()=>//console.log(this.props.jobTitle) */}
                    {/* this.props.navigation.navigate("FilterByCategory", { jobTitle: this.props.jobTitle }) */}
                    <Image 
                        style={ styles.img }
                        resizeMode="contain"
                        source={ {uri: this.props.uri} }
                    />
                    
                    <View style={ styles.individualJobContent }>
                        <Text style={ styles.individualJobTitle }>{ this.props.jobTitle }</Text>
                        <View style={ styles.individualJobWorkers }>
                            {
                                this.state.trabajadores.map(item =>
                                    <TouchableOpacity onPress={ ()=>this.props.navigation.navigate("Perfil", { profileUser: item.Email, updateProfile: true }) }>
                                        <Image 
                                            key={ item.Name }
                                            style={ styles.workerProfilePicture }
                                            resizeMode="contain"
                                            source={ {uri: 'https://reactnative.dev/img/tiny_logo.png'} }
                                        /> 
                                    </TouchableOpacity>
                                )
                            }
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    individualJob: {
        marginBottom: 10,
        padding: 10,
        backgroundColor: Colores.blanco,
        flexDirection: "row",
        borderRadius: 5
    },
    img: {
        width: "100%",
        height: 100,
        borderRadius: 0,
        marginRight: 10,
        flex: 1
    },
    individualJobContent: {
        flexDirection: "column",
        width: "65%", 
        paddingLeft: 10
    },
    individualJobTitle: {
        fontSize: 20
    },
    individualJobWorkers: {
        flexDirection: "row"
    }, 
    workerProfilePicture: {
        width: 50,
        height: 50,
        marginTop: 10,
        marginRight: 20, 
        borderRadius: 100
    }
})