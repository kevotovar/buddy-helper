import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { Text, Button, Icon } from "react-native-elements";

interface CounterProps {
  value: number;
  dispatch: Function;
  index: string;
  backgroundColor: string;
}

const styles = StyleSheet.create({
  counterContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  counterText: {
    color: "#fff",
    fontSize: 24
  }
});

export default function Counter({
  value,
  dispatch,
  index,
  backgroundColor
}: CounterProps) {
  function increment() {
    dispatch({
      type: "increment",
      value: { index, amount: 1 }
    });
  }
  function decrement() {
    dispatch({
      type: "decrement",
      value: { index, amount: 1 }
    });
  }
  return (
    <View style={[styles.counterContainer, { backgroundColor }]}>
      <Button
        icon={<Icon name="circle-with-minus" type="entypo" color="white" />}
        onPress={decrement}
      />
      <Text style={styles.counterText}>{value}</Text>
      <Button
        icon={<Icon name="circle-with-plus" type="entypo" color="white" />}
        onPress={increment}
      />
    </View>
  );
}
