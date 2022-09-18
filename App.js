import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";

const Stack = createNativeStackNavigator();

const globalScreenOptions = {
  headerStyle: {
    backgroundColor: "#1e1f24",
  },
  headerShadowVisible: false,
  headerTitleStyle: {
    color: "#ef8025",
    fontWeight: "800",
    fontSize: 20,
  },
  headerTitleAlign: "center",
  headerTintColor: "#dadada",
};

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator screenOptions={globalScreenOptions}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1e1f24",
  },
});
