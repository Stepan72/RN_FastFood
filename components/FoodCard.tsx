import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { ShoppingBagIcon } from "react-native-heroicons/solid";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack/lib/typescript/src/types";
import { StackParamList } from "../types";
import { FoodCardProps } from "../types";

type Props = NativeStackScreenProps<StackParamList, "FoodDetails">;
type FoodDetailsNavigationProp = Props["navigation"];

export default function FoodCard({
  name,
  price,
  ingredients,
  desc,
  image,
  index,
}: FoodCardProps) {
  const navigation = useNavigation<FoodDetailsNavigationProp>();

  return (
    <Animatable.View
      delay={index * 120}
      animation="slideInRight"
      style={{ backgroundColor: "#ffffff33" }}
      className="w-56 h-70 my-4 mr-6 p-3 py-5 rounded-3xl"
    >
      <View className="flex-row justify-center">
        <Image source={image} className="w-32 h-32" />
      </View>
      <View className="flex-1 px-3 py-2 space-y-2">
        <Text className="text-white text-xl font-medium tracking-wider">
          {name}
        </Text>
        <Text className="text-white">{ingredients}</Text>
      </View>
      <View className="flex-row justify-between items-center px-1">
        <Text className="text-white font-semibold text-2xl">$ {price}</Text>
        <TouchableOpacity
          className="bg-white p-3 rounded-full"
          onPress={() => {
            navigation.navigate("FoodDetails", {
              name,
              price,
              ingredients,
              desc,
              image,
              index,
            });
          }}
        >
          <ShoppingBagIcon size={24} color="black" />
        </TouchableOpacity>
      </View>
    </Animatable.View>
  );
}
