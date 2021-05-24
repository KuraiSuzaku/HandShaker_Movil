import React from 'react';
import { FlatList } from 'react-native';
import { Chat } from './Chat';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Icon, Input } from 'react-native-elements';
import Colors from '../../Estilos/Colores';

const messages = [
    {
        _id: "msg01",
        EmailUserFrom: "WorkerPremium@gmail.com",
        EmailUserTo: "Worker@gmail.com",
        MessageText: "Buenas tardes",
        MessageDate: "01/11/2020"
    },
    {
        _id: "msg02",
        EmailUserFrom: "WorkerPremium@gmail.com",
        EmailUserTo: "Worker@gmail.com",
        MessageText: "¡Haga lo que le digo! >:v",
        MessageDate: "02/11/2020"
    },
    {
        _id: "msg03",
        EmailUserFrom: "Worker@gmail.com",
        EmailUserTo: "WorkerPremium@gmail.com",
        MessageText: "Esta bien no se enoje O~O",
        MessageDate: "03/11/2020"
    },
    {
        _id: "msg04",
        EmailUserFrom: "Worker@gmail.com",
        EmailUserTo: "WorkerPremium@gmail.com",
        MessageText: "Ya voy a ofrecerle mis servicios...",
        MessageDate: "04/11/2020"
    },
    {
        _id: "msg05",
        EmailUserFrom: "WorkerPremium@gmail.com",
        EmailUserTo: "Worker@gmail.com",
        MessageText: "Excelente ^-^",
        MessageDate: "05/11/2020"
    },
];

export default class ChatC extends React.Component {

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
        
    NChats();
        return(
            <View style={{ flex: 10 }} >
            <View style={Estilos.MessagesContainer} >
                    <Text>De: {this.props.route.params.fromUser}</Text>
                    <Text>Para: {this.props.route.params.toUser}</Text>
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


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function NChats() {
    while(true){

    let allChat= new AllChats()//Login
    const ret = await  allChat.GetNumberMessages(this.props.route.params.fromUser,this.props.route.params.toUser)
 console.log("numero de mensajes"+ ret)
 await sleep(100);
 
}}

     /* while(true){
    console.log('Taking a break...');
    await sleep(10000);
    console.log('Two seconds later, showing sleep in a loop...');
  
  }*/



//demo();