import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native';
import Colores from '../../Estilos/Colores'
import {Rating} from 'react-native-elements';

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
                    <Text style={ styles.individualJobTitle }>{ this.props.worker.Name } { this.props.worker.LastName }</Text>
                    <View style={ styles.individualJobWorkers }>
                    <Rating  
                        imageSize={20} 
                        readonly
                        startingValue={this.props.worker.RatingStart?this.props.worker.RatingStart:1} 
                        ratingColor={Colores.simbolos}
                        ratingBackgroundColor={Colores.fondoOscuro}
                        tintColor={Colores.fondo}
                        type='custom'
                        style={styles.ContenedorComponente} 
                        />
                        <Text style={ styles.nReviews }>
                         ({this.props.worker.NReviews})
                        </Text>
                    <Text>
                    
                    </Text>
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
        borderRadius: 1000,
        marginRight: 10,
        flex: 1
    },
    individualJobContent: {
        flexDirection: "column",
        width: "65%", 
        paddingLeft: 10
    },
    individualJobTitle: {
        fontSize: 20,
        paddingBottom: 10 
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
    },
    nReviews:{
        paddingLeft: 5
    }
})