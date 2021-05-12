import AsyncStorage from '@react-native-async-storage/async-storage';

const storeUser = async (value) => {
    try {
        await AsyncStorage.setItem('@storage_Key', value)
    } catch (e) {
        console.error(e);
    }
}

const getUser = async () => {
    try {
        const value = await AsyncStorage.getItem('@storage_Key')
        if(value !== null) {
        return value;
        }
    } catch(e) {
        console.error(e);
    }
}