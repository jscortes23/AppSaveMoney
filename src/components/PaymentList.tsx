import React from 'react'
import { FlatList, StyleSheet, Text } from "react-native"
import paymentHistory from "../data/paymentHistory"
import PaymentHistoryItem from './PaymentHistoryItem'

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 28
  }
})

const PaymentList = () => {
  return (
    <FlatList
      style={styles.container}
      data={paymentHistory}
      ItemSeparatorComponent={() => <Text />}
      renderItem={({ item: { id, fecha, dinero_gastado, estado } }) => (
        <PaymentHistoryItem
          id={id}
          fecha={fecha}
          dinero_gastado={dinero_gastado}
          estado={estado}
        />
      )}
    >
    </FlatList>
  )
}

export default PaymentList