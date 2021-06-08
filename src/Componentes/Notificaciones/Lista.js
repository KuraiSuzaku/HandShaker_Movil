import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native'
import * as Components from '../Componentes/Indice';

export default class Lista extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            refresh: true
        }
    }

    componentDidMount() {
        if(this.state.refresh) {
            /**
             * Carga las notificaciones
             * Usuario: this.props.user.Email
             */
            console.error(this.props.user.Email);
            this.setState({
                refresh: false
            });
        }
    }

    render() {
        if(this.state.refresh)
            return( <Components.Loading /> );
        return(
            <View style={{ flex: 1 }}>
                <Text>Hola</Text>
            </View>
        );
    }
}