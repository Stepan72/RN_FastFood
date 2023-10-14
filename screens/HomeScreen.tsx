import {
  View,
  Image,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  AdjustmentsHorizontalIcon,
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/solid";
import { categories } from "../constants";
import { Category } from "../types";

export default function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState<Category>("Burger");
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
        {/* heading title */}
        <View className="my-12 space-y-2">
          <Text className="mx-4 text-5xl font-medium text-gray-800">
            Fast and
          </Text>
          <Text className="mx-4 text-5xl font-medium text-gray-800">
            <Text className="font-extrabold">Delicious</Text> Food
          </Text>
        </View>
        {/* Search Bar */}
        <View className="mx-4 flex-row space-x-3 justify-between">
          <View className="flex-row flex-1 p-4 bg-white rounded-2xl">
            <MagnifyingGlassIcon color="gray" />
            <TextInput
              placeholder="Food"
              value="Search"
              className="ml-2 text-gray-800"
            />
          </View>
          <View className="bg-white rounded-2xl p-4">
            <AdjustmentsHorizontalIcon size={25} color="black" />
          </View>
        </View>
        {/* Categories  */}
        <ScrollView
          className="my-6 py-6 max-h-20"
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 20 }}
        >
          {categories.map((category, index) => {
            const isActive = category === activeCategory;
            const activeTextClass = isActive ? "text-red-500" : "";
            return (
              <TouchableOpacity
                className="mr-8"
                onPress={() => {
                  setActiveCategory(category);
                }}
              >
                <Text
                  className={`text-white text-base tracking-widest ${activeTextClass}`}
                >
                  {category}
                </Text>
                {isActive && (
                  <View className="flex-row justify-center">
                    <Image
                      className="h-4 w-5"
                      source={require("../assets/images/line.png")}
                    />
                  </View>
                )}
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
