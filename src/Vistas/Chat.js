import React from 'react';
import {
    Text,
    View
} from 'react-native';
import * as Components from '../Componentes/Indice';

export default class Chat extends React.Component {
    render() {
        return(
            <View style={{ flex: 1 }}>
                <Components.Chat.EncabezadoApp {...this.props} />
                <Components.Chat.Chat {...this.props} />
                <Components.Navegacion />
            </View>
        );
    }
}