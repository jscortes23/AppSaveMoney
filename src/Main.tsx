import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { StatusBar } from "react-native"
import BgTwoColor from "components/BgTwoColor"
import StackNavigator from "navigators/StackNavigator"


const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar />
      <StackNavigator />
    </View>
  );
};

export default Main