import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

export default class IndividualCategory extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <View style={ styles.category }>
                <TouchableOpacity onPress={ () => this.props.handleCategory(this.props.name) }>
                    <Image 
                        style={ styles.categoryImg }
                        resizeMode="contain"
                        source={{uri: this.props.uri}}
                    />
                    <Text style={ styles.categoryTxt }>{ this.props.name }</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    category: {
        flexDirection: "column",
        marginRight: 10
    },
    categoryImg: {
        width: 70,
        height: 70,
        borderRadius: 0
    },
    categoryTxt: {
        alignSelf: "center"
    }
})