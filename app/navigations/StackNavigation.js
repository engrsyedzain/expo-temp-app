import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen2Navigtaion, screenNavigation } from "./navigationList";

import Screen1 from "../screens/Screen1";
import Screen2 from "../screens/Screen2";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={screenNavigation}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={screenNavigation} component={Screen1} />
      <Stack.Screen name={screen2Navigtaion} component={Screen2} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
