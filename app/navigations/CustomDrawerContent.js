// CustomDrawerContent.js
import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useProfile } from "../context/useProfile";
import { Image } from "expo-image";
import { studentImageBaseUrl } from "../services/WebServices";

const CustomDrawerContent = (props) => {
  const { user } = useProfile();

  const onLogoutClick = async () => {
    //await Data.storeToken(null);
    await AsyncStorage.clear();

    // props.navigation.navigate(loginNavigtaion);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#2C2C54",
      }}
    >
      <TouchableOpacity
        style={styles.textContainer}
        onPress={() => console.log("Drawer navigation button click")}
      >
        {/* <FontAwesome name="user-circle-o" size={80} color="#fff" /> */}

        {user.image ? (
          <Image
            source={{ uri: studentImageBaseUrl + user.image }}
            style={styles.image}
            contentFit="cover"
          />
        ) : (
          <FontAwesome name="user-circle-o" size={80} color="#fff" />
        )}
        <Text style={{ fontSize: 22, color: "white", marginTop: 5 }}>
          {user.fname}
        </Text>
      </TouchableOpacity>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("Drawer navigation button click.")}
        >
          <Text style={styles.buttonText}>Change Password</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={onLogoutClick}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logoutContainer: {
    // borderTopWidth: 1,
    borderTopColor: "#ccc",
    paddingHorizontal: 10,
    marginBottom: "5%",
  },
  textContainer: {
    // flex: 1,
    padding: 5,
    paddingVertical: "13%",
    // marginTop: "5%",
    fontSize: 15,
    backgroundColor: "#EB7400",
    // marginBottom: 740,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#3D314A",
  },
  button: {
    paddingHorizontal: 10,
    marginBottom: "5%",

    width: "90%",
    height: 40,
    //backgroundColor: "#EB7400",
    backgroundColor: "#EB7400",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    // marginBottom: 20,
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
  },
});

export default CustomDrawerContent;
