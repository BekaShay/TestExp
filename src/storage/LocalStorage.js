import AsyncStorage from '@react-native-async-storage/async-storage';

export const getStorage = async key => {
  try {
    const data = await AsyncStorage.getItem(key);// получение ключа
    return data != null ? JSON.parse(data) : null;
  } catch (error) {
  }
};

export const setStorage = async (key, data) => {
  try {
    const json = JSON.stringify(data); // конвертация в жсон формат
    await AsyncStorage.setItem(key, json);
  } catch (error) {
    console.log('error', error);
  }
};

export const removeStorage = async key => {
  try {
    await AsyncStorage.removeItem(key); // удаление ключа
  } catch (error) {
  }
};