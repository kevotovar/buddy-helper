import React from "react";
import { Header } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { RootParamList } from "src/routers/Root";

interface DrawerHeaderProps {
  title: string;
}

export default function DrawerHeader({ title }: DrawerHeaderProps) {
  const navigation = useNavigation<DrawerNavigationProp<RootParamList>>();
  return (
    <Header
      leftComponent={{
        icon: "menu",
        onPress: navigation.openDrawer,
        color: "#fff"
      }}
      centerComponent={{
        text: title,
        style: {
          color: "#fff"
        }
      }}
    />
  );
}
