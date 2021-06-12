import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import Colores from '../../Estilos/Colores'
import {Rating} from 'react-native-elements';

export default class PremiumWorkerC extends Component {
    constructor(props){
        super(props);
       // console.log("PW: "+this.props.premiumWorker.ProfilePicture.Path)
       console.log("RATING: " + this.props.premiumWorker.RatingStar)
    }

    render() {
        return (
            <View style={ styles.premiumWorker }>
                <Image 
                    style={ styles.profileImg }
                    resizeMode="cover"
                    source={{uri: this.props.premiumWorker.ProfilePicture.Path}}
                />
                <View style={ styles.premiumWorkerContent }>
                    <Text style={ styles.name }>
                        { this.props.premiumWorker.Name }
                    </Text>
                    <Text style={ styles.profesion }>
                        { this.props.premiumWorker.Profession } { this.props.premiumWorker.RatingStar }
                    </Text>
                    <View style={ styles.premiumWorkerContentImages }>
                    <Rating  
                        imageSize={20} 
                        readonly
                        startingValue={this.props.premiumWorker.RatingStar?this.props.premiumWorker.RatingStar:1} 
                        ratingColor={Colores.simbolos}
                        ratingBackgroundColor={Colores.fondoOscuro}
                        tintColor={Colores.fondo}
                        type='custom'
                        style={styles.ContenedorComponente} 
                        />
                        <Text style={ styles.nReviews }>
                         ({this.props.premiumWorker.NReviews})
                        </Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    premiumWorker: {
        marginBottom: 10,
        padding: 10,
        backgroundColor: Colores.blanco,
        flexDirection: "row",
        borderRadius: 5
    },
    profileImg: {
        width: 100,
        height: 80,
        borderRadius: 100,
        marginRight: 10,
        marginTop: 10,
        flex: 1
    },
    premiumWorkerContent: {
        flexDirection: "column",
        width: "72%", 
    },
    premiumWorkerContentImages: {
        flexDirection: "row",
        width: "100%",
        alignContent: "flex-start"
    },
    premiumWorkerContentImg: {
        width: 50,
        height: 50,
        borderRadius: 10,
        marginTop: 10,
        marginRight: 10,
    },
    ContenedorComponente: {
        justifyContent: 'flex-end',
        marginBottom: 7,
    },
    name:{
        fontSize: 20,
        paddingBottom: 5
    },
    profesion:{
        fontSize: 15,
        paddingBottom: 5
    },
    nReviews:{
        paddingLeft: 5
    }
})