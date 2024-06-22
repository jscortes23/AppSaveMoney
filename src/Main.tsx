import React from "react"
import { View } from "react-native"
import { StatusBar } from "react-native"
import StackNavigator, { StackLogin } from "navigators/StackNavigator"
import LoginScreen from "screens/LoginScreen";


const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar />
      <StackLogin />
    </View>
  );
};

export default Main