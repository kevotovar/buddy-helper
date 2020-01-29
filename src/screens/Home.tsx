import React from "react";
import { View, Text, Button } from "react-native";
import { DrawerNavigationProp } from "@react-navigation/drawer";

import { RootParamList } from "src/routers/Root";

interface HomeProps {
  navigation: DrawerNavigationProp<RootParamList, "Home">;
}

export default function Home({ navigation }: HomeProps) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to about"
        onPress={() => navigation.navigate("About")}
      />
    </View>
  );
}
