import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Icon, Input } from 'react-native-elements';
import Colors from '../../Estilos/Colores';

export default class Chat extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            newMessage: null
        };
    }

    sendMessage() {
        console.log('Send', this.state.newMessage);
    }

    render() {
        return(
            <View style={{ flex: 10 }} >
                <View style={Estilos.MessagesContainer} >

                </View>
                <View style={Estilos.InputContainer}>
                    <Input 
                        value={this.state.newMessage}
                        onChangeText={(text) => this.setState({ newMessage: text })}
                        placeholder={'Escribe un mensaje...'}
                        containerStyle={Estilos.InputBarContainer}
                    />
                    <Icon
                        name='send'
                        type='font-awesome'
                        color={Colors.blanco}
                        onPress={() => this.sendMessage()}
                        containerStyle={Estilos.IconContainer}
                    />
                </View>
            </View>
        );
    }
}

const Estilos = StyleSheet.create({
    MessagesContainer: {
        flex: 8,
        borderWidth: 1,
        borderColor: Colors.etiquetas,
        borderRadius: 20,
        margin: 10
    },
    InputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    IconContainer: {
        borderRadius: 50,
        backgroundColor: Colors.fondoBotonOscuro,
        padding: 10
    },
    InputBarContainer: {
        maxWidth: '80%'
    }
});