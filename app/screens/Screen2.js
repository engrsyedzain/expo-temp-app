import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { screenNavigation } from "../navigations/navigationList";

const Screen2 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Welcome,</Text>
      <Button
        title="Go back"
        onPress={() => navigation.navigate(screenNavigation)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default Screen2;
