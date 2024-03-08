import { PaymentHistory } from "interfaces/IPaymentHistory"
import React from "react"
import { StyleSheet, View } from "react-native"
import StyledText from "@components/StyledText"

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    paddingEnd: 30,
    backgroundColor: '#000000',
    borderRadius: 4,
  },
  sectionPrice: {
    flex: 1,
    rowGap: 2
  },
  sectionState: {
    flex: .5
  }
})

const parseThousands = (price: number) => {
  return price >= 1000
    ? `$ ${Math.round(price / 100) / 10}K` :
    `$ ${price}`
}

const PaymentHistoryItem = ({ id, fecha, dinero_gastado, estado }: PaymentHistory) => {
  return (
    <View key={id} style={styles.container}>
      <View style={styles.sectionPrice}>
        <StyledText white smX2>Fecha: {fecha}</StyledText>
        <StyledText white lg semiBold>{parseThousands(dinero_gastado)}</StyledText>
      </View>
      <StyledText white smX style={styles.sectionState}>{estado}</StyledText>
    </View>
  )
}

export default PaymentHistoryItem
