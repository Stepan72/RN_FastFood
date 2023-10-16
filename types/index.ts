import { categories } from "../constants";
import { ImageSourcePropType } from "react-native";

export interface FoodCardProps {
  name: string;
  price: string;
  ingredients: string;
  desc: string;
  image: ImageSourcePropType;
  index: number;
}

export type StackParamList = {
  Home: undefined;
  FoodDetails: FoodCardProps;
};

export type Category = (typeof categories)[number];
