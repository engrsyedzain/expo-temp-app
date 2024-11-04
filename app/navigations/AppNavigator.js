import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import DrawerNavigation from "./DrawerNavigation";

const AppNavigator = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <SafeAreaView style={{ flex: 1 }}>
          <DrawerNavigation />
        </SafeAreaView>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default AppNavigator;
