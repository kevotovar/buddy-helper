import React, { useReducer } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { Text, Button, Icon } from "react-native-elements";
import { Map } from "immutable";

import { RootParamList } from "src/routers/Root";
import DrawerHeader from "src/components/DrawerHeader";
import Counter from "./components/Counter";

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
  value?: any;
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
    case "reset":
      return initialState;
    default:
      return state;
  }
}

const initialState = Map({
  "1": 10,
  "2": 10
});

export default function Home({}: HomeProps) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <SafeAreaView style={styles.container}>
      <DrawerHeader title="Contador" />
      <View style={styles.countersContainer}>
        <Counter index="1" dispatch={dispatch} value={state.get("1")} />
        <View>
          <Button
            onPress={() => dispatch({ type: "reset" })}
            icon={<Icon name="refresh" color="white" />}
            buttonStyle={{ backgroundColor: "black", borderRadius: 0 }}
          />
        </View>
        <Counter index="2" dispatch={dispatch} value={state.get("2")} />
      </View>
    </SafeAreaView>
  );
}
