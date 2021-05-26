import React from 'react';
import {
    Text,
    View
} from 'react-native';
import * as Components from '../Indice';


export default class ListaTrabajos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstLoad: true
        }
    }

    componentDidMount() {
        /** Cargar trabajos */
        this.setState({
            firstLoad: false
        });
    }

    render() {
        if(this.state.firstLoad)
            return( <Components.Loading /> );
        return(
            <View style={{ flex: 10 }}>
                <Text style={{borderWidth: 1, borderColor: '#0000ff', maxWidth: '50%'}}>Lista Trabajos</Text>
            </View>
        );
    }
}