import React from 'react';
import {
    Text,
    View
} from 'react-native';
import * as Components from '../Indice';

export default class ListaClient extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstLoad: true
        }
    }

    componentDidMount() {
        if(this.state.firstLoad) {
            
            this.setState({
                firstLoad: false
            });
        }
    }

    render() {
        if(this.state.firstLoad)
            return( <Components.Loading /> );
        return(
            <View style={{ flex: 10 }}>
                <Text>Lista</Text>
            </View>
        );

    }
}