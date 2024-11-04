import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawerContent from "./CustomDrawerContent";
import StackNavigation from "./StackNavigation";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{ headerShown: false, swipeEnabled: false }}
    >
      <Drawer.Screen name="InitialScreen" component={StackNavigation} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
