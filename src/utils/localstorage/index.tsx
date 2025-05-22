import AsyncStorage from '@react-native-async-storage/async-storage';

export async function setItemByKey(key: string, value: any) {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
        console.log('e', e);
    }
}

export async function getItemByKey(key: string) {
    try {
        const jsonValue = await AsyncStorage.getItem(key);
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        return;
    }
}

export async function removeItemByKey(key: string) {
    try {
        return await AsyncStorage.removeItem(key);
    } catch (e) {
        console.log('e', e);
    }
}