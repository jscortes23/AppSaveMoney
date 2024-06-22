import React from 'react'
import { FlatList, StyleSheet, Text } from "react-native"
import paymentHistory from "../data/paymentHistory"
import PaymentHistoryItem from '../components/PaymentHistoryItem'
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types'
import { StackParamsList } from 'navigators/StackNavigator'

type PaymentListScreenProps = NativeStackScreenProps<StackParamsList, 'PaymentList'>

const PaymentListScreen: React.FC<PaymentListScreenProps> = (props) => {

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

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 28
  }
})

export default PaymentListScreen