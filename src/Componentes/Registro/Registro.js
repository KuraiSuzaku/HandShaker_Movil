import React, { Component } from 'react'
import { View, Image, StyleSheet, Text, TextInput, ScrollView, TouchableOpacity, ToastAndroid } from 'react-native'
import Colores from '../../Estilos/Colores'
import DatePicker from 'react-native-datepicker'
import {User}   from "./../../Classes/User"
import {PhoneNumber}   from "./../../Classes/PhoneNumber"
import {Client}   from "./../../Classes/Client"
import {Worker}   from "./../../Classes/Worker"
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

export default class Registro extends Component {

    constructor(props) {
        super(props);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleNames = this.handleNames.bind(this);
        this.handleLastNames = this.handleLastNames.bind(this);
        this.handlePhone = this.handlePhone.bind(this);
        this.handleBirthDate = this.handleBirthDate.bind(this);
        this.userType = this.handleUserType.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
        this.state = {
            email: '',
            password: '',
            names: '',
            lastNames: '',
            phone: '',
            birthDate: new Date(),
            userType: 'Cliente',

            nameError: ''
        };
    }

    handleEmail (text){     this.setState({ email: text })}
    handlePassword (text){  this.setState({ password: text })}
    handleNames (text){     this.setState({ names: text })}
    handleLastNames (text){ this.setState({ lastNames: text })}
    handlePhone (text){     this.setState({ phone: text })}
    handleBirthDate (date){   this.setState({ birthDate: date })}
    handleUserType (text){   this.setState({ userType: text })}

    handleRegister( event ){
        if (this.state.email.trim() === ""){
            this.setErrorTxt( 'correo' )
        }
        else if (this.state.password.trim() === ""){
            this.setErrorTxt( 'contraseña' )
        }
        else if (this.state.email.trim() === ""){
            this.setErrorTxt( 'fecha de nacimiento' )
        }
        else{
            ToastAndroid.show((this.state.email+' - '+this.state.password+' - '+this.state.names+' - '+this.state.lastNames+' - '+this.state.phone+' - '+this.state.birthDate), ToastAndroid.SHORT);
           // this.setState({ nameError: '' })
            //ToastAndroid.show(('Registro'), ToastAndroid.SHORT);
                
            let userObject= new User(this.state.email,this.state.password)//Login
            userObject.Name=this.state.names
            userObject.LastName=this.state.lastNames
            let phone= new PhoneNumber("Numero de telefono",this.state.phone)
            userObject.Birthday=this.state.birthDate            
            userObject.Phones.push(phone)
            
            if(this.state.userType.includes("Cliente")){
              
                client= new Client(userObject.Email,userObject.Password)
                client.Name=userObject.Name
                client.LastName=userObject.LastName
                client.Phones=userObject.Phones
                client.Birthday=userObject.Birthday
                client.Register(client)
            }else{
               
                WorkerUser= new Worker(userObject.Email,userObject.Password)
         
                WorkerUser.Name=userObject.Name
                WorkerUser.LastName=userObject.LastName
                WorkerUser.Phones=userObject.Phones              
                WorkerUser.Birthday=userObject.Birthday       
                WorkerUser.Register(WorkerUser);
            }
           

        }
    }

    setErrorTxt( txt ){
        this.setState({ nameError: 'El campo ' + txt + ' no puede estar vacío' })
    }

    radio_props = [
        {label: 'Cliente', value: 'Cliente' },
        {label: 'Trabajador', value: 'Trabajador' }
    ];

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
                        <FormInput label="Correo electrónico" value={ this.state.email } onChangeText={ this.handleEmail } required={ true }/>
                        <FormInput label="Contraseña" password={ true } value={ this.state.password } onChangeText={ this.handlePassword } required={ true }/>
                        <FormInput label="Nombres" value={ this.state.names } onChangeText={ this.handleNames }/>
                        <FormInput label="Apellidos" value={ this.state.lastNames } onChangeText={ this.handleLastNames }/>
                        <FormInput label="Teléfono" value={ this.state.phone } onChangeText={ this.handlePhone }/>
                        {/* <FormInput label="Tipo usuario (provisional)" value={ this.state.userType } onChangeText={ this.handleUserType } required={ true }/> */}
                        <DateInput label="Fecha de nacimiento" value={ this.state.birthDate } onDateChange={ this.handleBirthDate } required={ true }/>
                        {/* <RadioInput label="¿Cómo desea registrarse" value={ this.state.userType } radio_props={ this.radio_props } onUserTypeChange={ this.handleUserType }/> */}
                        <Text style={ styles.label, styles.radioInput }>
                            ¿Cómo desea registrarse
                        </Text>
                        <RadioForm
                            radio_props={this.radio_props}
                            initial={0}
                            onPress={(value) => {this.handleUserType(value)}}
                        />
                    </View>

                    <Text style={ styles.errorTxt }>
                        { this.state.nameError }
                    </Text>

                    <TouchableOpacity style={ styles.btn } onPress={ this.handleRegister }>
                        <Text style={ styles.btnTxt }>Registrarse</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        )
    }
}

const RadioInput = ( props ) => (
    <View>
        <Text style={ styles.label }>
            { props.label }{ props.required ? <Text style={ styles.errorTxt }> *</Text> : '' }
        </Text>
        
    </View>
)

const FormInput = ( props ) => (
    <View>
        <Text style={ styles.label }>
            { props.label }{ props.required ? <Text style={ styles.errorTxt }> *</Text> : '' }
        </Text>
        <TextInput 
            style={ styles.input }
            secureTextEntry={ props.password ? true : false }
            value={ props.value }
            onChangeText={ props.onChangeText }
        />
    </View>
);

const DateInput = ( props ) => (
    <View>
        <Text style={ styles.label }>
            { props.label }{ props.required ? <Text style={ styles.errorTxt }> *</Text> : '' }
        </Text>
        <DatePicker
            style={ styles.datePicker }
            mode="date"
            confirmBtnText="Confirmar"
            cancelBtnText="Cancelar"
            format="DD-MM-YYYY"
            minDate="01-01-1920"
            maxDate="01-01-2003"

            date={ props.value }
            onDateChange={ props.onDateChange } 
        />
    </View>
)

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
    radioInput: {
        marginTop: 15
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
    },
    errorTxt: {
        color: '#f00',
        alignSelf: 'center'
    },
    datePicker: {
        width: 200
    }
})