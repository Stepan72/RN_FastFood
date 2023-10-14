import { categories } from "../constants";

export type StackParamList = {
  Home: undefined;
  SecondScreen: undefined;
};

export type Category = (typeof categories)[number];
