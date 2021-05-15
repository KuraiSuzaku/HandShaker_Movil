import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import Colores from '../../Estilos/Colores'

export default class Job extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <View style={ styles.individualJob }>
                <Image 
                    style={ styles.img }
                    resizeMode="contain"
                    source={ {uri: this.props.uri} }
                />
                <View style={ styles.individualJobContent }>
                    <Text style={ styles.individualJobTitle }>{ this.props.jobTitle }</Text>
                    <View style={ styles.individualJobWorkers }>
                        {
                            this.props.workers.map(item =>
                                <Image 
                                    style={ styles.workerProfilePicture }
                                    resizeMode="contain"
                                    source={ {uri: item.uri} }
                                /> 
                                )
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