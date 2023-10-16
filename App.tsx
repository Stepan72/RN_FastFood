import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StackParamList } from "./types";
import HomeScreen from "./screens/HomeScreen";
import { LogBox } from "react-native";
import FoodDetailsScreen from "./screens/FoodDetailsScreen";

const Stack = createNativeStackNavigator<StackParamList>();

// LogBox.ignoreLogs([
//   "Non-serializable values were found in the navigation state",
// ]);

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="FoodDetails" component={FoodDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
