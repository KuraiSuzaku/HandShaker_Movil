import React, { useState } from 'react';
import { Styles } from './Indice';
import {
    Alert,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import { Avatar } from 'react-native-elements';
import ImagePicker from 'react-native-image-picker';
import ImgToBase64 from 'react-native-image-base64';

export default props => {
    const [name, setName] = useState(props.user.Name);
    const [lastName, setLastName] = useState(props.user.LastName);
    const [phone, setPhone] = useState(props.user.Phones[0].Phone);
    const [mail, setMail] = useState(props.user.Email);
    const [avatar, setAvatar] = useState({
        uri: props.user.ProfilePicture.Path});
    const [userTemp, setUserTemp] = useState(props.user);

    const saveProfile = () => {
        /**
         * Guarda el prefil de usuario
         * Nombre: name
         * Apellidos: lastName
         * Teléfono: phone
         * ProfilePicture.Path: avatar.uri
         */

        props.setUser({
            ...userTemp,
            Name: name,
            LastName: lastName,
            Phones: [{ Phone: phone }],
            ProfilePicture: {
                Path: avatar.uri
            }
        });
    }

    const confirmUpdate = () => {
        if(name != props.user.Name
            || lastName != props.user.LastName
            || phone != props.user.Phones[0].Phone
            || avatar != props.user.ProfilePicture.Path) {
            Alert.alert("Actualizar Prefil", "¿Seguro que desea actualizar su perfil con la infromación proporcionada?", [{
                    text: "Cancelar"
                },
                {
                    text: "Confirmar",
                    onPress: saveProfile
                }
            ]);
        }
    }

    const changeAvatar = () => {
        const options = {
            mediaType: 'photo',
            quality: 1,
            maxWidth: 500,
            maxHeight: 500
        };
        ImagePicker.showImagePicker(options, (response) => {      
            if(!response.didCancel){
                let base64 = null;
                try {
                    ImgToBase64.getBase64String(response.uri)
                        .then( base64String => {
                            base64 = 'data:image/jpg;base64,' + base64String;
                            setAvatar({
                                uri: base64
                            });
                        }).catch( err => console.error(err) );
                } catch (e) {
                    console.error(e);
                }
            }
        });
    }

    return(
        <>
        <View style={Styles.Content}>
            <ScrollView>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity onPress={ () => changeAvatar() } >
                        <Avatar
                            rounded
                            source={avatar}
                            size='large'
                        >
                            <Avatar.Accessory size={30} />
                        </Avatar>
                    </TouchableOpacity>
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
                        editable={false}
                        style={Styles.Input}
                        placeholder='ejemplo@handshaker.com'
                        textContentType='emailAddress'
                        defaultValue={mail}
                    />
                </View>
                <TouchableOpacity onPress={confirmUpdate}>
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
