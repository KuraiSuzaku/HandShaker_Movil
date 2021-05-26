import React from 'react';
import { Text } from 'react-native';
import * as Components from '../Indice';

export default class Lista extends React.Component {
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
            <Text>Lista</Text>
        );
    }
}