import React from 'react';
import {
    FlatList,
    StyleSheet,
    Text,
    View
} from 'react-native'
import * as Components from '../Indice';
import Colors from '../../Estilos/Colores';
import { Avatar } from 'react-native-elements';
import { AllNotifications } from '../../Classes/AllNotifications';

export default class Lista extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            refresh: true,
            data: null
        }
    }

    componentDidMount() {
        if(this.state.refresh) {
            this.getAllNotifications();
        }
    }

    async getAllNotifications() {
        let data = [
            {
                Subject: "Notificación 1",
                Description: "Description de notificación 1",
                Date: "2021-05-29++++",
                userFrom: {
                    Name: "Pedrito",
                    ProfilePicture: [{
                        Path: 'null'
                    }]
                }
            },
            {
                Subject: "Notificación 2",
                Description: "Descripton de notificación 2",
                Date: "2020-07-17++++",
                userFrom: {
                    Name: "Juanito",
                    ProfilePicture: [{
                        Path: 'null'
                    }]
                }
            }
        ]

        console.log("el status USUARIO ES "+this.props.user.Email);
        let notificationsObject= new AllNotifications

        notificationsObjectRes= await notificationsObject.GetNotification(this.props.user.Email)

        console.log("el status es "+notificationsObjectRes.status);
        if(notificationsObjectRes.status!="202"){
        data=notificationsObjectRes.data.ListOfNotifications
            console.log(notificationsObjectRes.data.ListOfNotifications[0].EmailFrom)
            console.log(notificationsObjectRes.data.ListOfNotifications[0].userFrom[0].Name)
        }else{
            data={}
        }

        /**
             * Carga las notificaciones
             * Usuario: this.props.user.Email
             */



         this.setState({
            refresh: false,
            data: data
        });
    }

    renderItem({ item }) {
        return(
            <View style={Estilos.ItemContainer} >
                <Avatar
                    rounded
                    size='medium'
                    source={{ uri: item.userFrom[0].ProfilePicture.Path }}
                    containerStyle={Estilos.AvatarContainer}
                />
                <View style={Estilos.ItemBody}>
                    <Text style={Estilos.ItemTitle}>
                        { item.Subject }
                    </Text>
                    <Text style={Estilos.ItemName}>
                        { item.userFrom.Name }
                    </Text>
                    <Text style={Estilos.ItemDescription}>
                        { item.Description }
                    </Text>
                    <Text style={Estilos.ItemDate}>
                        { item.Date.substring(0,10) }
                    </Text>
                </View>
            </View>
        );
    }

    render() {
        if(this.state.refresh)
            return( <Components.Loading /> );
        return(
            <View style={Estilos.List}>
                <Text style={Estilos.ListHeader} >
                    Notificaciones
                </Text>
                <FlatList
                    renderItem={ this.renderItem }
                    data={ this.state.data }
                />
            </View>
        );
    }
}

const Estilos = StyleSheet.create({
    List: {
        flex: 1
    },
    ListHeader: {
        fontWeight: 'bold',
        fontSize: 16,
        margin: 10,
        alignSelf: 'center'
    },
    ItemContainer: {
        flexDirection: 'row',
        backgroundColor: Colors.blanco,
        marginVertical: 10,
        marginHorizontal: 20,
        borderRadius: 20,
        borderColor: Colors.separador,
        borderBottomWidth: 3,
        borderRightWidth: 1
    },
    AvatarContainer: {
        justifyContent: 'center',
        margin: 10
    },
    ItemBody: {
        flex: 1,
        padding: 10,
        paddingLeft: 0
    },
    ItemTitle: {
        fontWeight: 'bold'
    },
    ItemName: {
        color: Colors.etiquetas,
        fontSize: 12
    },
    ItemDescription: {

    },
    ItemDate: {
        color: Colors.etiquetas,
        alignSelf: 'flex-end',
        fontSize: 11
    }
});