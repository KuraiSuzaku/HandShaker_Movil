import React from 'react';
import { View } from 'react-native';
import { ActivityIndicator } from 'react-native';

export default class Lista extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstLoad: true
        }
    }

    render() {
        if(this.state.fistLoad)
            return( <ActivityIndicator size='large' /> );
        return(
            <View style={{ flex: 10 }}>

            </View>
        );

    }
}