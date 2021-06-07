import React, { Component } from 'react';
import {
    FlatList,
    StyleSheet,
    Text,
    View
} from 'react-native';
import * as Components from '../Indice';
import Colors from '../../Estilos/Colores';

export default class ListaPromociones extends Component {
    constructor() {
        super();
        this.state = {
            
        };
    }
    renderItem({ item }) {
        <Components.Promociones.Promocion
            title={item.title}
        />
    }
    render() {
        const Data = [{
                id: '1',
                title: 'Promoción 1',
                content: 'Esta es la descripción de la promoción 1.',
                image: 'home',/*
                worker: {
                    avatar: require('../../../public/Profile/user.png'),
                    name: 'Trabajador 1'
                }*/
            },
            {
                id: '2',
                title: 'Promoción 2',
                content: 'Esta es la descripción de la promoción 2.',
                image: 'home',/*
                worker: {
                    avatar: require('../../../public/Profile/user.png'),
                    name: 'Trabajador 2'
                }*/
            }];
        return(
            <View style={{ flex: 10 }}>
                <Text>Promociones</Text>
                <FlatList
                    data={Data}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.id}
                />
                <Text>No hay más contenido</Text>
            </View>
        );
    }
};

const Styles = StyleSheet.create({
    MainContainer: {
        flex: 10
    }
});