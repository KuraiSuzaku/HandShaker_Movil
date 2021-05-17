import AsyncStorage from '@react-native-async-storage/async-storage';

const storeUser = async (value) => {
    try {
        await AsyncStorage.setItem('@user_Key', value);
    } catch (e) {
        console.error(e);
    }
}
//  Worker@gmail.com
const getUser = async () => {
    console.log('Entra a getUser');
    try {
        const value = await AsyncStorage.getItem('@user_Key');
        if(value !== null) {
            //return value;
            console.log('GET LOCAL USER VALUE: ', value);
        }
    } catch(e) {
        console.error(e);
    }
}

export { storeUser, getUser };