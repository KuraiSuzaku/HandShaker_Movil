import React, {useState} from 'react';
import { FlatList } from 'react-native';

import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Icon, Input } from 'react-native-elements';
import Colors from '../../Estilos/Colores';
import {SERVER} from './../../Classes/ip'
import socketClient  from "socket.io-client";
import { AllChats } from '../../Classes/AllChats';
import { Chat } from '../../Classes/Chat';
import { Message } from '../../Classes/Message';
//const SERVER = "http://192.168.1.72:3001";
//const [auxRender, setAuxrender] = useState(false);
//const [chatSingle, setChats] = useState({});
/*import { Thread } from 'react-native-threads';
const thread = new Thread('./../../ThreadWorkers/thread.js');
*/

const messages = [];

export default class ChatC extends React.Component {
    
    constructor(props) {
        //console.log("IP SERVER"+SERVER)
       var  socket = socketClient (SERVER);
        super(props);
        this.state = {
            newMessage: null,
            messages: null,
            load: false
        };
        this.renderMessage = this.renderMessage.bind(this);
    
        socket.on("ChatChange", data => {
            //console.log("aqui Chat cambio desde Clase*******************************"+data);
            this.UpdateChat(this.props.route.params.fromUser,this.props.route.params.toUser);
            
          });
    }

    componentDidMount() {//cUANDO SE RENDERIZA 
        if(!this.state.load) {
            /* Carga los mensajes */
            this.setState({
                messages: messages, // Cambiar por res de la bd
                load: true
            });
            //aquii NOMBRE Y FOTO
            
        }
    }
    
 

    sendMessage() {
        //console.log('Send', this.state.newMessage);
        //ESCRIBE EL MENSAJE WOOO
       //console.log("email to "+this.props.route.params.toUser)
       //console.log("email of "+this.props.route.params.fromUser)
       
       let ArrChats= new Array();
       let ArrMess= new Array();
    
        let Mess=new Message();
        Mess.EmailUserFrom=this.props.route.params.fromUser;
        Mess.EmailUserTo=this.props.route.params.toUser;
        Mess.MessageText=this.state.newMessage;
        Mess.MessageDate=new Date();
        ArrMess.push(Mess)

        let listOf=new Chat();
        listOf.EmailChatWith=this.props.route.params.toUser;
        listOf.ListOfMessages=ArrMess;
        ArrChats.push(listOf)

        let ChatSend= new AllChats()//Login
        ChatSend.Email=this.props.route.params.fromUser;
        ChatSend.ListOfChats=ArrChats;
    
        ChatSend.AddChat(ChatSend);
        this.setState({ newMessage: null})
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
     // send a message, strings only

// listen for messages
      //  thread.onmessage = (message) => //console.log(message);
   
    /*if(auxRender==false){
        UpdateChat(this.props.route.params.fromUser,this.props.route.params.toUser);
        }*/
        if(!this.state.load){

            this.UpdateChat(this.props.route.params.fromUser,this.props.route.params.toUser);
        }
        return(
            <View style={{ flex: 10 }} >
            <View style={Estilos.MessagesContainer} >
                    {/* Aqui se agregan los mensajes */
                        this.state.load ?
                        <FlatList
                            inverted
                            style={{ flex:1}}
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


         UpdateChat=(email,emailchatwith)=>{
         ////console.log("se actualizara el chat");
         this.Getchat(email,emailchatwith)
        }
        
        Getchat = async(email,emailchatwith)=>{
            //console.log("AQUIIIEmail actual ", email );
           
        
            let SingleChat= new AllChats()//Login
        
          const ret = await  SingleChat.GetChatWith(email,emailchatwith)
        
        /*  //console.log("Respuestas ret"+JSON.stringify(ret));
          //console.log("chat with" + ret.EmailChatWith)
          //console.log("Respuestas"+JSON.stringify(ret.ListOfMessages));*/
          //messages=ret.ListOfMessages;

          this.setState({messages:ret.ListOfMessages.reverse()  })
        //setChats(ret.ListOfMessages);
        //setAuxrender(true);        
        
        };       
        
  

    
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

