import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { ImageSourcePropType } from "react-native";
import { ShoppingBagIcon } from "react-native-heroicons/solid";

interface FoodCardProps {
  name: string;
  price: string;
  ingredients: string;
  desc: string;
  image: ImageSourcePropType;
  index: number;
}

export default function FoodCard({
  name,
  price,
  ingredients,
  desc,
  image,
  index,
}: FoodCardProps) {
  return (
    <View
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
        <TouchableOpacity className="bg-white p-3 rounded-full">
          <ShoppingBagIcon size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
