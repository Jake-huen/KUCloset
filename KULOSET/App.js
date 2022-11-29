import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import CodyScreen from "./screens/CodyScreen";
import LoginScreen from "./screens/LoginScreen";
import AddScreen from "./screens/AddScreen";
import ProfileScreen from "./screens/ProfileScreen";
import RegistrationScreen from "./screens/RegisterationScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Cody" component={CodyScreen} />
          <Stack.Screen
            name="Add"
            component={AddScreen}
            options={{ presentation: "modal", headerShown: false }}
          />
          <Stack.Screen name="MyPage" component={ProfileScreen} />
          <Stack.Screen name="Register" component={RegistrationScreen} />
        </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
