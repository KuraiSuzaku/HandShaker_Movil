import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';

export default class Promocion extends Component {
    render() {
        return(
            <View>
                <Text style={{margin: 15, fontSize: 16}}>
                    {this.props.title}
                </Text>
                <Text>Item</Text>
            </View>
        );
    }
};