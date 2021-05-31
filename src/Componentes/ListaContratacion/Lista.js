import React from 'react';
import {
    FlatList,
    StyleSheet,
    Text,
    View
} from 'react-native';
import * as Components from '../Indice';
import Colors from '../../Estilos/Colores';
import { Avatar, Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';

export default class Lista extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstLoad: true
        }
        this.renderItem = this.renderItem.bind(this);
    }

    componentDidMount() {
        if(this.state.firstLoad) {
            this.setState({
                firstLoad: false
            });
        }
    }

    navigate() {
        this.props.navigation.navigate('Home', {

        });
    }

    renderItem({ item }) {
        if(item.Status != this.props.type)
            return null;
        return(
            <TouchableOpacity onPress={() => this.navigate()}>
            <View style={Estilos.ItemContainer}>
                <View style={Estilos.AvatarContainer}>
                    <Avatar
                        rounded
                        size='medium'
                        source={
                            require('../../../public/Profile/user.png')
                        }
                    />
                </View>
                <View style={{ flex: 1, paddingLeft: 10 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon
                            name='calendar'
                            type='font-awesome'
                            color={Colors.negro}
                            containerStyle={{ marginRight: 10 }}
                        />
                        <Text>{item.Date.substring(0,10)} - {item.HiringDate.substring(0,10)}</Text>
                    </View>
                    <Text style={{
                        fontSize: 18,
                        fontWeight: 'bold'
                    }}>{item.Subject}</Text>
                    <Text>{
                        this.props.jobs ?
                        'item.userClient[0].Name' :
                        'item.userWorker[0].Name'
                    }</Text>
                    <Text style={{
                        fontSize: 11,
                        color: Colors.etiquetas,
                        alignSelf: 'flex-end'
                    }}>ver más</Text>
                </View>
            </View>
            </TouchableOpacity>
        );
    }

    render() {
        if(this.state.firstLoad)
            return( <Components.Loading /> );
        return(
            <>
            {
                this.props.data ?
                <FlatList
                    data={ 
                        this.props.type.includes('Finalizada') ?
                        this.props.data.reverse() :
                        this.props.data
                    }
                    renderItem={this.renderItem}
                /> :
                null
            }
            </>
        );
    }
}

const Estilos = StyleSheet.create({
    ItemContainer: {
        borderRadius: 20,
        backgroundColor: Colors.blanco,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginVertical: 5,
        marginHorizontal: 20,
        borderColor: Colors.separador,
        borderBottomWidth: 4,
        borderRightWidth: 1,
        flexDirection: 'row'
    },
    AvatarContainer: {
        justifyContent: 'center'
    }
});