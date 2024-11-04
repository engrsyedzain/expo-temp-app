import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { screen2Navigtaion } from "../navigations/navigationList";

const Screen1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Button
        onPress={() => navigation.navigate(screen2Navigtaion)}
        title="Click here"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default Screen1;
