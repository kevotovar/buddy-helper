import React from "react";
import { View, Text } from "react-native";
import DrawerHeader from 'src/components/DrawerHeader'

export default function About() {
  return (
    <View>
      <DrawerHeader title="Acerca de" />
      <Text>Desarrollado por Kevin Tovar</Text>
    </View>
  );
}
