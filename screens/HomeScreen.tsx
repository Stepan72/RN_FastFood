import { View, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Bars3CenterLeftIcon } from "react-native-heroicons/solid";

export default function HomeScreen() {
  return (
    <View className="flex-1 relative">
      <Image
        blurRadius={40}
        source={require("../assets/images/background.png")}
        className="flex-1 absolute w-full h-full"
      />
      <SafeAreaView className="flex-1">
        {/* header icon bar */}
        <View className="flex-row justify-between items-center mx-4">
          <View className="bg-white shadow-md rounded-2xl p-3">
            <Bars3CenterLeftIcon size={25} color="black" stroke="gray" />
          </View>
          <View className="rounded-2xl border-slate-300 border-2">
            <Image
              className="w-12 h-12 rounded-2xl"
              source={require("../assets/images/avatar.png")}
            />
          </View>
        </View>
        {/* next */}
        <View></View>
      </SafeAreaView>
    </View>
  );
}
