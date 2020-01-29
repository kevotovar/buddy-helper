import React from "react";
import "react-native-gesture-handler";
import { NavigationNativeContainer } from "@react-navigation/native";

import Root from "src/routers/Root";

export default function App() {
  return (
    <NavigationNativeContainer>
      <Root />
    </NavigationNativeContainer>
  );
}
