import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import Colores from '../../Estilos/Colores'

export default class PremiumWorkerC extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <View style={ styles.premiumWorker }>
                <Image 
                    style={ styles.profileImg }
                    resizeMode="contain"
                    source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
                />
                <View style={ styles.premiumWorkerContent }>
                    <Text>
                        { this.props.premiumWorker.Name }
                    </Text>
                    <Text>
                        { this.props.premiumWorker.Profession } ****
                    </Text>
                    <View style={ styles.premiumWorkerContentImages }>
                        <Image 
                            style={ styles.premiumWorkerContentImg }
                            resizeMode="contain"
                            source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
                        />
                        <Image 
                            style={ styles.premiumWorkerContentImg }
                            resizeMode="contain"
                            source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
                        />
                        <Image 
                            style={ styles.premiumWorkerContentImg }
                            resizeMode="contain"
                            source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
                        />
                        <Image 
                            style={ styles.premiumWorkerContentImg }
                            resizeMode="contain"
                            source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
                        />
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
        width: "100%",
        height: 100,
        borderRadius: 1000,
        marginRight: 10,
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
    }
})