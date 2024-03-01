import { PaymentHistory } from "interfaces/IPaymentHistory"
import React from "react"
import { StyleSheet, Text, View } from "react-native"
import StyledText from "@components/StyledText"

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 10,
    paddingTop: 10,
    backgroundColor: '#000000',
    borderRadius: 12,
  },
  white: {
    color: '#ffffff'
  }
})

const PaymentHistoryItem = ({ id, fecha, dinero_gastado, estado }: PaymentHistory) => {
  return (
    <View key={id} style={styles.container}>
      <StyledText lightBlue>Fecha: {fecha}</StyledText>
      <Text style={styles.white}>Dinero gastado:{dinero_gastado}</Text>
      <Text style={styles.white}>Estado: {estado}</Text>
    </View>
  )
}

export default PaymentHistoryItem
