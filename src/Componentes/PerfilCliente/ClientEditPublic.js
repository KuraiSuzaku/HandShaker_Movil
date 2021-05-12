import React, { useState } from 'react';
import { Styles } from './Indice';
import {
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import { Avatar } from 'react-native-elements';

export default props => {
    const [name, setName] = useState(props.name);
    const [lastName, setLastName] = useState(props.lastName);
    const [phone, setPhone] = useState(props.phone);
    const [mail, setMail] = useState(props.mail);

    const saveProfile = () => {
        alert("Perfil guardado");
    }

    return(
        <>
        <View style={Styles.Content}>
            <ScrollView>
                <View style={{flexDirection: 'row'}}>
                    <Avatar
                        rounded
                        source={require('../../../public/Profile/user.png')}
                        size='large'
                    />
                    <View style={{flex:3, paddingLeft: 10, alignContent: 'center'}}>
                        <Text style={Styles.Label}>
                            Nombre(s)*
                        </Text>
                        <TextInput 
                            style={Styles.Input}
                            returnKeyType='next'
                            selectTextOnFocus={true}
                            textContentType='givenName'
                            defaultValue={name}
                            onChangeText={setName}
                        />
                        <Text style={Styles.Label}>
                            Apellidos*
                        </Text>
                        <TextInput
                            style={Styles.Input}
                            returnKeyType='next'
                            textContentType='familyName'
                            onChangeText={setLastName}
                            defaultValue={lastName}
                        />
                    </View>
                </View>
                <View>
                    <Text style={Styles.Label}>
                        Teléfono (10 dígitos)
                    </Text>
                    <TextInput
                        style={Styles.Input}
                        returnKeyType='next'
                        keyboardType='number-pad'
                        placeholder='xx-xxxx-xxxx'
                        maxLength={10}
                        textContentType='telephoneNumber'
                        onChangeText={setPhone}
                        defaultValue={phone}
                    />
                    <Text style={Styles.Label}>
                        Correo Electrónico
                    </Text> 
                    <TextInput
                        style={Styles.Input}
                        placeholder='ejemplo@handshaker.com'
                        textContentType='emailAddress'
                        onChangeText={setMail}
                        defaultValue={mail}
                    />
                </View>
                <TouchableOpacity onPress={saveProfile}>
                <View style={Styles.Button}>
                    <Text style={Styles.ButtonLabel}>
                        Guardar
                    </Text>
                </View>
                </TouchableOpacity>
                <Text style={[Styles.Label, Styles.InfoLabel]}>
                    La información provista en esta 
                    pestaña será visible para los 
                    trabajadores que usted contacte, 
                    evite usar lenguaje inapropiado.                       
                </Text>
                <Text style={[Styles.Label, Styles.InfoLabel]}>
                    * Estos campos son obligatorios 
                </Text>
            </ScrollView>
        </View>
        </>
    );
};
