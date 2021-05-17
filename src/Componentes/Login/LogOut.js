import React from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class LogOut extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillUnmount() {
        const clearStoredUser = async () => {
            try {
                await AsyncStorage.removeItem('@user_Key');
                this.props.setUser({
                    userType: null
                });
            } catch (e) {
                console.error(e);
            }
        };
        clearStoredUser();
    }

    render() {
        return(<>{this.props.navigation.navigate('Login')}</>);
    }

};