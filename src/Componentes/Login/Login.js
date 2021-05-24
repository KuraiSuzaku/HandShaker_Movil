import React, { Component } from 'react'
import { StyleSheet, View, Image, Text, ScrollView, TouchableOpacity, TextInput, ToastAndroid} from 'react-native'
import Colores  from './../../Estilos/Colores'
import {User} from "./../../Classes/User"
import {Worker} from "./../../Classes/Worker"
import {Client} from "./../../Classes/Client"
import {PremiumWorker} from "./../../Classes/PremiumWorker"
import AsyncStorage from '@react-native-async-storage/async-storage';

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

    componentDidMount() {
        const getUser = async () => {
            try {
                const jsonValue = await AsyncStorage.getItem('@user_Key');
                if(jsonValue !== null) {
                    const storedUser = JSON.parse(jsonValue);
                    this.setState({
                        user: {...storedUser}
                    });
                    this.props.navigation.navigate('Perfil');
                }
            } catch(e) {
                console.error(e);
            }
        };
        getUser();
    }

    componentWillUnmount() {
        const storeUser = async (value) => {
            try {
                await AsyncStorage.removeItem('@user_key');
                const jsonValue = JSON.stringify(value);
                await AsyncStorage.setItem('@user_Key', jsonValue);
                this.props.setUser(value);
            } catch (e) {
                console.error(e);
            }
        };
        if(this.state.user)
            storeUser(this.state.user);
    }

    handleEmail (text){
        this.setState({ email: text })
     }
     handlePassword (text){
        this.setState({ password: text })
     }

    handleLogin( event ){
        //Login code with front end
        let Email=this.state.email;
        let Password=this.state.password;      
    	let userObject= new User(Email,Password)//Login
        userObject.Login(userObject).then(res=>{
            console.log("RESULTADO "+res.Response);
        if ( res.Response=="1"){
            //userObject//este es el usuario
        //the user exist and *userObject has its properties filled.
        console.log("tipo Usuario\t"+ userObject.UserType)// check the user type 
        if( userObject.UserType.includes("Worker")&& !userObject.UserType.includes("Premium")){
          // check if the user is a worker
           let WorkerObject = new Worker(userObject.Email);
           WorkerObject.GetWorkerInformation(WorkerObject).then((res) => {
            //on here WorkerObject has all the information of the user.
            //here you can send it to its corresponding component
            WorkerObject=res;
            this.setState({
                user: {...WorkerObject}
            });
            ToastAndroid.show(("Worker User"), ToastAndroid.SHORT);
            this.props.navigation.navigate('Perfil')
          });
        }
        if(userObject.UserType.includes("PremiumWorker")){
          // check if the user is a worker      
          let PremiumWorkerObject = new PremiumWorker(userObject.Email);
          PremiumWorkerObject.GetPremiumWorkerInformation(PremiumWorkerObject).then((res) => {
            //on here PremiumWorkerObject has all the information of the user.
            //here you can send it to its corresponding component
            PremiumWorkerObject=res;
            this.setState({
                user: {...PremiumWorkerObject}
            });
            ToastAndroid.show(("Premium Worker User"), ToastAndroid.SHORT);
            this.props.navigation.navigate('Perfil')
          });
        }
        if(userObject.UserType.includes("Client")){
          // check if the user is a worker
          let ClientObject = new Client(userObject.Email);
          ClientObject.GetClientInformation(ClientObject).then((res) => {
            //on here ClientObject has all the information of the user.
            //here you can send it to its corresponding component
            ClientObject=res;
            this.setState({
                user: {...ClientObject}
            });
            ToastAndroid.show(("Client User"), ToastAndroid.SHORT);
            this.props.navigation.navigate('Perfil')
          });
        }
        
      } 
    else{ //there was an error on the login
      if(res.Response=="404")
        { 
        console.log("No Existe Usuario")
        ToastAndroid.show(("No Existe Usuario"), ToastAndroid.SHORT);
        }
      if(res.Response=="401")
      {
          ToastAndroid.show(("Password incorrecto"), ToastAndroid.SHORT);      
        }
    }

  })  
   

}


handleGetAllWorkers( event ){
    console.log("All Workers");

    let allWorkers= new Worker()//Login
    allWorkers.GetAllWorkers().then(res=>{       
       //Look at Worker Class, it returns an array of all workers
    })  
}


handleGetOnlyWorkers( event ){
    console.log("Worker");

    let OnlyWorkers= new Worker()//Login
    OnlyWorkers.GetOnlyWorkers().then(res=>{       
       //Look at Worker Class, it returns an array of only workers
    })  
}

handleGetPremiumWorkers( event ){
    console.log("Premium Worker");

    //Code to get all Workers 
    let OnlyPremiumWorkers= new PremiumWorker()//Login
    OnlyPremiumWorkers.GetPremiumWorkers().then(res=>{       
       //Look at Premium Worker Class, it returns an array of PremiumWorkers 
       console.log("TRABAJADORES PREMIUM");
       res.forEach(element => {
        console.log("trabajador n");
        console.log(element.Name);
      });
    })  
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
                        <FormButton txt="Registrarse"
                            handleLogin={ () => this.props.navigation.navigate('Registro') }
                        />
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
