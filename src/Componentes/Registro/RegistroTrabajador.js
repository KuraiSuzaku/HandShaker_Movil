import React, { Component } from 'react'
import { View, Image, StyleSheet, Text, TextInput, ScrollView, TouchableOpacity, ToastAndroid } from 'react-native'
import Colores from './../../Estilos/Colores'

export default class RegistroCliente extends Component {

    constructor(props) {
        super(props);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleNames = this.handleNames.bind(this);
        this.handleLastNames = this.handleLastNames.bind(this);
        this.handlePhone = this.handlePhone.bind(this);
        this.handleAddress = this.handleAddress.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
        this.state = {
            email: '',
            password: '',
            names: '',
            lastNames: '',
            phone: '',
            address: ''
        };
    }

    handleEmail (text){     this.setState({ email: text })}
    handlePassword (text){  this.setState({ password: text })}
    handleNames (text){     this.setState({ names: text })}
    handleLastNames (text){ this.setState({ lastNames: text })}
    handlePhone (text){     this.setState({ phone: text })}
    handleAddress (text){   this.setState({ address: text })}

    handleRegister( event ){
        //ToastAndroid.show((this.state.email+' - '+this.state.password+' - '+this.state.names+' - '+this.state.lastNames+' - '+this.state.phone+' - '+this.state.address), ToastAndroid.SHORT);
        ToastAndroid.show(('Registro'), ToastAndroid.SHORT);
    }

    render() {
        return (
            <View style={ styles.container }>
                <Image 
                    style={ styles.img }
                    source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
                />
                <Text style={ styles.txt }>
                    Ingrese los datos requeridos:
                </Text>

                <ScrollView>
                    <View>
                        <FormInput label="Correo electrónico" value={ this.state.email } onChangeText={ this.handleEmail }/>
                        <FormInput label="Contraseña" password={ true } value={ this.state.password } onChangeText={ this.handlePassword }/>
                        <FormInput label="Nombres" value={ this.state.names } onChangeText={ this.handleNames }/>
                        <FormInput label="Apellidos" value={ this.state.lastNames } onChangeText={ this.handleLastNames }/>
                        <FormInput label="Teléfono" value={ this.state.phone } onChangeText={ this.handlePhone }/>
                        <FormInput label="Dirección" value={ this.state.address } onChangeText={ this.handleAddress }/>
                    </View>

                    <TouchableOpacity style={ styles.btn } onPress={ this.handleRegister }>
                        <Text style={ styles.btnTxt }>Registrarse</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        )
    }
}

const FormInput = ( props ) => (
    <View>
        <Text style={ styles.label }>
            { props.label }
        </Text>
        <TextInput 
            style={ styles.input }
            secureTextEntry={ props.password ? true : false }
            value={ props.value }
            onChangeText={ props.onChangeText }
        />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        margin: 16,
    },
    img: {
        width: '100%',
        height: 100
    },
    txt: {
        alignSelf: 'center',
        marginVertical: 30
    }, 
    label: {
        marginVertical: 0,
        color: Colores.etiquetas
    },
    input: {
        height: 30,
        paddingVertical: 5,
        paddingHorizontal: 0,
        borderBottomColor: Colores.separador,
        borderBottomWidth: 1,
        marginBottom: 15
    },
    btn: {
        width: 150,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 20,
        backgroundColor: Colores.negro,
        marginVertical: 20, 
        alignSelf: 'center'
    },
    btnTxt: {
        color: Colores.blanco
    }
})