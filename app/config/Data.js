import AsyncStorage from "@react-native-async-storage/async-storage";

const storeToken = async (data) => {
  try {
    await AsyncStorage.setItem(token, JSON.stringify(data));
  } catch (e) {
    return e;
  }
};

const getToken = async () => {
  try {
    const value = await AsyncStorage.getItem(token);
    return value ? JSON.parse(value) : null;
  } catch (e) {
    return e;
  }
};

const token = "Token";

export default { storeToken, getToken };
