import React, { Component } from 'react'
import { StyleSheet, View, Image, Text, ScrollView, TouchableOpacity, TextInput, ToastAndroid} from 'react-native'
import Colores  from './../../Estilos/Colores'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.state = {
            email: '',
            password: '',
        };
    }

    handleEmail (text){
        this.setState({ email: text })
     }
     handlePassword (text){
        this.setState({ password: text })
     }

    handleLogin( event ){
        ToastAndroid.show((this.state.email + ' - ' + this.state.password), ToastAndroid.SHORT);
    }

    render() {
        return (
            <View style={ styles.container }>
                <Image 
                    style={ styles.img }
                    source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
                />

                <ScrollView>
                    <View>
                        <FormInput 
                            label="Correo electrónico" 
                            value={ this.state.email }
                            onChangeText={ this.handleEmail } 
                        />
                        <FormInput 
                            label="Contraseña" 
                            password={ true }
                            value={ this.state.password }
                            onChangeText={ this.handlePassword } 
                        />
                    </View>

                    <Text style={ styles.txt }>
                        ¿Olvidaste tu contraseña?
                    </Text>

                    <View style={ styles.btnsView }>
                        <FormButton txt="Registrarse" />
                        <FormButton 
                            txt="Iniciar sesión" 
                            handleLogin={ this.handleLogin }
                        />
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const FormButton = ( props ) => (
    <TouchableOpacity style={ styles.btn } onPress={ props.handleLogin }>
        <Text style={ styles.btnTxt }>{ props.txt }</Text>
    </TouchableOpacity>
);

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
        height: 200,
        marginBottom: 30
    },
    txt: {
        alignSelf: 'center',
        marginVertical: 10
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
        flex: 1,
        width: '80%',
        marginHorizontal: 10,
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
    },
    btnsView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }
})
