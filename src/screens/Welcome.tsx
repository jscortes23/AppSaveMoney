import StyledText from "components/StyledText"
import { useState } from "react"
import { Alert, Button, Image, StyleSheet, View } from "react-native"


const styles = StyleSheet.create({
  container: {
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20
  },
})

const Welcome = () => {

  return (
    <View style={styles.container}>

      <StyledText lgX2 >Welcome to</StyledText>
      <StyledText lgX4 semiBold>Money Saver</StyledText>
      <StyledText lg regular>Your partner in smart saving and financial empowerment!</StyledText>
      <Image
        source={require('../../assets/img/bagMoney.png')}
        style={{ width: 284, height: 249 }}
      />
      <Button
        onPress={() => { Alert.alert('Funciona') }}
        title="Next"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />

    </View>
  )
}

export default Welcome
