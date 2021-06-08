import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native';
import Colores from '../../Estilos/Colores'

export default class IndividualWorker extends Component {
    render() {
        return (
            <View style={ styles.individualJob }>
                <Image 
                    style={ styles.img }
                    resizeMode="contain"
                    source={ {uri: this.props.worker.ProfilePicture.Path} }
                />

                <View style={ styles.individualJobContent }>
                    <Text style={ styles.individualJobTitle }>{ this.props.worker.Name }</Text>
                    <View style={ styles.individualJobWorkers }>
                        {
                            // this.props
                            // this.state.trabajadores.map(item =>
                            //     <TouchableOpacity onPress={ () => //console.log(item.Email) }>
                            //         <Image 
                            //             key={ item.Name }
                            //             style={ styles.workerProfilePicture }
                            //             resizeMode="contain"
                            //             source={ {uri: 'https://reactnative.dev/img/tiny_logo.png'} }
                            //         /> 
                            //     </TouchableOpacity>
                            // )
                        }
                    </View>
                </View>
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