import { UserProvider } from "./app/context/useProfile";
import AppNavigator from "./app/navigations/AppNavigator";

export default function App() {
  return (
    <UserProvider>
      <AppNavigator />
    </UserProvider>
  );
}
