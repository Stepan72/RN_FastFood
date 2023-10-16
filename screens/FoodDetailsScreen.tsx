import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ChevronLeftIcon,
  MinusIcon,
  PlusIcon,
} from "react-native-heroicons/solid";
import * as Animatable from "react-native-animatable";
import { HeartIcon } from "react-native-heroicons/outline";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParamList } from "../types";
import { useRoute, useNavigation } from "@react-navigation/native";

type FoodDetailsScreenProps = NativeStackScreenProps<
  StackParamList,
  "FoodDetails"
>;
type FoodDetailsRouteProp = FoodDetailsScreenProps["route"];
type FoodDetailsNavigationProp = FoodDetailsScreenProps["navigation"];

export default function FoodDetailsScreen({
  route,
  navigation,
}: FoodDetailsScreenProps) {
  //   const { name, price, ingredients, desc, image, index } = route.params;

  const routeHook = useRoute<FoodDetailsRouteProp>();
  const navigationHook = useNavigation<FoodDetailsNavigationProp>();
  const { name, price, ingredients, desc, image, index } = routeHook.params;

  return (
    <View className="flex-1 bg-white">
      {/* backgroundImage */}
      <Image
        source={require("../assets/images/background.png")}
        className="w-full h-96 absolute"
        blurRadius={40}
        style={{ borderBottomLeftRadius: 50, borderBottomRightRadius: 50 }}
      />
      <SafeAreaView>
        {/* header bar */}
        <View className="flex-row justify-between mx-4 items-center">
          <TouchableOpacity
            className="bg-white rounded-2xl p-3 shadow"
            onPress={() => {
              //   navigation.goBack();
              navigationHook.goBack();
            }}
          >
            <ChevronLeftIcon size={23} stroke="black" color="black" />
          </TouchableOpacity>
          <TouchableOpacity className="bg-white rounded-2xl p-3 shadow">
            <HeartIcon size={23} stroke="red" color="white" />
          </TouchableOpacity>
        </View>
        {/* item name and image */}
        <View className="flex justify-center items-center">
          <Image className="w-48 h-48" source={image} />
          <Text className="text-white text-3xl">{name}</Text>
        </View>
        {/* plus and minus buttons */}
        <View className="flex-row justify-center items-center mt-6">
          <View className="flex-row justify-between items-center bg-gray-100 rounded-2xl space-x-3">
            <TouchableOpacity className="rounded-2xl bg-white border-2 border-gray-200 p-3">
              <MinusIcon size={20} strokeWidth={1.8} color="black" />
            </TouchableOpacity>
            <Text className="text-xl">1</Text>
            <TouchableOpacity className="rounded-2xl bg-white border-2 border-gray-200 p-3">
              <PlusIcon size={20} strokeWidth={1.8} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        {/* icons */}
        <View className="flex-row justify-between items-center mx-4 h-20 overflow-hidden">
          <Animatable.View
            delay={180}
            animation="slideInDown"
            className="flex items-center space-y-2"
          >
            <Image
              source={require("../assets/icons/calories.png")}
              className="h-6 w-6"
            />
            <Text className="font-semibold">130 cal</Text>
          </Animatable.View>
          <Animatable.View
            delay={280}
            animation="slideInDown"
            className="flex items-center space-y-2"
          >
            <Image
              source={require("../assets/icons/clock.png")}
              className="h-6 w-6"
            />
            <Text className="font-semibold">15-20 min</Text>
          </Animatable.View>
          <Animatable.View
            delay={380}
            animation="slideInDown"
            className="flex items-center space-y-2"
          >
            <Image
              source={require("../assets/icons/chat.png")}
              className="h-6 w-6"
            />
            <Text className="font-semibold">4.6 votes</Text>
          </Animatable.View>
          <Animatable.View
            delay={480}
            animation="slideInDown"
            className="flex items-center space-y-2"
          >
            <Image
              source={require("../assets/icons/weight.png")}
              className="h-6 w-6"
            />
            <Text className="font-semibold">350 g</Text>
          </Animatable.View>
        </View>
        {/* other  */}
        <View className="mx-4 flex-row justify-between items-center">
          <Text className="text-3xl font-semibold text-gray-800">
            Description
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
}
