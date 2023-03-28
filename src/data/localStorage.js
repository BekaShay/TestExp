import AsyncStorage from '@react-native-async-storage/async-storage';

export const getStorage = async key => {
  try {
    const data = await AsyncStorage.getItem(key);
    return data != null ? JSON.parse(data) : null;
  } catch (error) {
  }
};

export const setStorage = async (key, data) => {
  try {
    const json = JSON.stringify(data);
    await AsyncStorage.setItem(key, json);
  } catch (error) {
  }
};

export const removeStorage = async key => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
  }
};
