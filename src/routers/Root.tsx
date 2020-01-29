import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "src/screens/Home";
import About from "src/screens/About";

export type RootParamList = {
  Home: undefined;
  About: undefined;
};

const Stack = createDrawerNavigator<RootParamList>();

export default function Root() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
}
