import React from "react"
import { View } from "react-native"
import PaymentList from "screens/PaymentListScreen"
import Welcome from "screens/WelcomeScreen"
import AppBar from "components/AppBar"
import { StatusBar } from "react-native"
import SetupAccount from "screens/SetupAccountScreen"

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar />
      {/* <PaymentList /> */}
      {/* <Welcome /> */}
      <AppBar />
    </View>
  )
}

export default Main