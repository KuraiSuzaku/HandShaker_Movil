import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default props => {
    const navigation = useNavigation();
    const LogOut = () => {
        navigation.navigate('Login');
    };
    return(<>{LogOut()}</>);
};