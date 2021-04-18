import React, { useState } from 'react';
import { Styles } from './Indice';
import {
    ScrollView,
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import { add } from 'react-native-reanimated';

export default props => {
    const [currentPass, setCurrentPass] = useState(null);
    const [newPass, setNewPass] = useState(null);
    const [confirmPass, setConfirmPass] = useState(null);
    const [address, setAddress] = useState(props.address);
    const [number, setNumber] = useState(props.number);
    const [colony, setColony] = useState(props.colony);
    const [street1, setStreet1] = useState(props.street1);
    const [street2, setStreet2] = useState(props.street2);

    const savePassword = () => {
        if(newPass != confirmPass)
            alert("Las contraseñas no coinciden.\nIntentelo de nuevo.");
        else if(newPass == null)
            alert("La nueva contraseña no cumple con los requerimientos de seguridad.");
        else
            alert("Contraseña guardada.");
    }

    const saveAddress = () => {
        alert("Dirección guardada");
    }

    return(
        <>
            <View style={Styles.Content}>
                <ScrollView>
                    <View style={{flex:1}}>
                        <Text style={Styles.Label}>
                            Correo electrónico: 
                        </Text>
                    </View>
                    <View style={Styles.SectionContainer}>
                        <Text style={[Styles.Label, Styles.SectionLabel]}>
                            Cambiar Contraseña
                        </Text>
                        <Text style={Styles.Label}>
                            Contraseña Actual
                        </Text>
                        <TextInput 
                            style={Styles.Input}
                            placeholder='xxxxxxxxxxxxxxx'
                            onChangeText={setCurrentPass}
                        />
                        <Text style={Styles.Label}>
                            Contraseña Nueva
                        </Text>
                        <TextInput 
                            style={Styles.Input}
                            placeholder='xxxxxxxxxxxxxxx'
                            onChangeText={setNewPass}
                        />
                        <Text style={Styles.Label}>
                            Confirmar Contraseña Nueva
                        </Text>
                        <TextInput 
                            style={Styles.Input}
                            placeholder='xxxxxxxxxxxxxxx'
                            onChangeText={setConfirmPass}
                        />
                        <TouchableOpacity onPress={savePassword}>
                        <View style={Styles.Button}>
                            <Text style={Styles.ButtonLabel}>
                                Guardar
                            </Text>
                        </View>
                        </TouchableOpacity>
                    </View>
                    <View style={Styles.SectionContainer}>
                        <Text style={[Styles.Label, Styles.SectionLabel]}>
                            Dirección Personal
                        </Text>
                        <Text style={[Styles.Label, Styles.InfoLabel]}>
                            Esta dirección puede ser la de su casa o lugar de trabajo
                        </Text>
                        <Text style={Styles.Label}>
                            Calle
                        </Text>
                        <TextInput 
                            style={[Styles.Input, {maxWidth: 500}]}
                            placeholder='Calle principal'
                            onChangeText={setAddress}
                            defaultValue={address}
                        />
                        <View style={{flexDirection: 'row'}}>
                            <View style={{flex: 1}}>
                                <Text style={Styles.Label}>
                                    Número
                                </Text>
                                <TextInput
                                    keyboardType='number-pad'
                                    style={Styles.Input}
                                    onChangeText={setNumber}
                                    defaultValue={number}
                                />
                            </View>
                            <View style={{flex: 3}}>
                                <Text style={Styles.Label}>
                                    Colonia
                                </Text>
                                <TextInput
                                    style={Styles.Input}
                                    onChangeText={setColony}
                                    defaultValue={colony}
                                />
                            </View>
                        </View>
                        <View style={{flexDirection: 'row', marginTop: 10}}>
                            <Text style={[Styles.Label, {flex: 2, textAlign: 'left'}]}>
                                Entre
                            </Text>
                            <TextInput
                                style={[Styles.Input, {flex: 7}]}
                                placeholder='Calle 1'
                                onChangeText={setStreet1}
                                defaultValue={street1}
                            />
                            <Text style={[Styles.Label, {flex: 1, textAlign: 'left'}]}>
                                Y
                            </Text>
                            <TextInput
                                style={[Styles.Input, {flex: 7}]}
                                placeholder='Calle 2'
                                onChangeText={setStreet2}
                                defaultValue={street2}
                            />
                        </View>
                        <TouchableOpacity onPress={saveAddress}>
                        <View style={Styles.Button}>
                            <Text style={Styles.ButtonLabel}>
                                Guardar
                            </Text>
                        </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </>
    );
};