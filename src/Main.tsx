import React from "react"
import { View } from "react-native"
import PaymentList from "@components/PaymentList"
import Welcome from "screens/Welcome"
import AppBar from "components/AppBar"
import { StatusBar } from "react-native"

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar />
      <PaymentList />
      {/* <Welcome /> */}
      <AppBar />
    </View>
  )
}

export default Main