import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import * as Components from '../Componentes/Indice';
import Colors from '../Estilos/Colores';

export default class Promociones extends Component {
    constructor() {
        super();
    }/*
    getData() {
        this.setState({});
    }*/
    render() {
        //this.getData();
        return(
            <SafeAreaView style={{ flex: 1, backgroundColor: Colors.fondo }}>
                <Components.EncabezadoApp />
                <Components.Promociones.ListaPromociones />
                <Components.Navegacion />
            </SafeAreaView>
        );
    }
};