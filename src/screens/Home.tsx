import React, { useReducer } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { Text, Button, Icon } from "react-native-elements";
import { Map } from "immutable";

import { RootParamList } from "src/routers/Root";
import DrawerHeader from "src/components/DrawerHeader";

interface HomeProps {
  navigation: DrawerNavigationProp<RootParamList, "Home">;
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center" },
  countersContainer: { flex: 1, backgroundColor: "red", width: "100%" },
  counterContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  counterText: {
    color: "#fff"
  }
});

interface ReducerActions {
  type: string;
  value: any;
}

function reducer(state: Map<string, any>, action: ReducerActions) {
  let value;
  switch (action.type) {
    case "decrement":
      value = state.get(action.value.index) - action.value.amount;
      return state.set(action.value.index, value > 0 ? value : 0);
    case "increment":
      value = state.get(action.value.index) + action.value.amount;
      return state.set(action.value.index, value > 0 ? value : 0);
    default:
      return state;
  }
}

const initialState = Map({
  1: 10,
  2: 10
});

export default function Home({}: HomeProps) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <SafeAreaView style={styles.container}>
      <DrawerHeader title="Contador" />
      <View style={styles.countersContainer}>
        <View style={styles.counterContainer}>
          <Button
            icon={<Icon name="circle-with-minus" type="entypo" color="white" />}
            onPress={() =>
              dispatch({
                type: "decrement",
                value: { index: "1", amount: 1 }
              })
            }
          />
          <Text style={styles.counterText}>{state.get("1")}</Text>
          <Button
            icon={<Icon name="circle-with-plus" type="entypo" color="white" />}
            onPress={() =>
              dispatch({
                type: "increment",
                value: { index: "1", amount: 1 }
              })
            }
          />
        </View>
        <View style={styles.counterContainer}>
          <Text style={styles.counterText}>{state.get("2")}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
