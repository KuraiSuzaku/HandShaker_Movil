import React from 'react';
import { FlatList } from 'react-native';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Icon, Input } from 'react-native-elements';
import Colors from '../../Estilos/Colores';

const messages = [];

export default class Chat extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            newMessage: null,
            messages: null,
            load: false
        };
        this.renderMessage = this.renderMessage.bind(this);
    }

    componentDidMount() {
        if(!this.state.load) {
            /* Carga los mensajes */
            this.setState({
                messages: messages, // Cambiar por res de la bd
                load: true
            });
        }
    }

    sendMessage() {
        console.log('Send', this.state.newMessage);
    }

    renderMessage({ item }) {
        let ownMessage = false;
        if(item.EmailUserFrom == this.props.route.params.fromUser)
            ownMessage = true;
        return(
            <View style={[Estilos.MessageView, {
                justifyContent: ownMessage ?
                    'flex-end' :
                    'flex-start',
            }]}>
                <View style={{
                    alignItems: ownMessage ?
                        'flex-end' :
                        'flex-start'
                }}>
                    <View style={Estilos.MessageText}>
                        <Text>
                            {item.MessageText}
                        </Text>
                    </View>
                    <Text style={Estilos.DateText}>
                        {item.MessageDate}
                    </Text>
                </View>
            </View>
        );
    }

    render() {
        return(
            <View style={{ flex: 10 }} >
            <View style={Estilos.MessagesContainer} >
                    {/* Aqui se agregan los mensajes */
                        this.state.load ?
                        <FlatList
                            data={this.state.messages}
                            renderItem={this.renderMessage}
                            contentContainerStyle={{flexGrow: 1}}
                        /> :
                        <Text>No Carga</Text>
                    }
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
        margin: 10,
        padding: 10
    },
    MessageView: {
        flexDirection: 'row',
        paddingVertical: 3
    },
    MessageText: {
        borderRadius: 20,
        padding: 10,
        backgroundColor: Colors.separador
    },
    DateText: {
        color: Colors.etiquetas,
        fontSize: 10,
        marginHorizontal: 10
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