import { View, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <View className="flex-1 relative">
      <Image
        blurRadius={40}
        source={require("../assets/images/background.png")}
        className="flex-1 absolute w-full h-full"
      />
    </View>
  );
}
