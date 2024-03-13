import StyledText from "components/StyledText"
import { useState } from "react"
import { Alert, Button, Image, StyleSheet, View } from "react-native"
import { size } from "themes/appTheme"
import SetupAccountScreen from "screens/SetupAccountScreen"
import { NavigationContainer } from '@react-navigation/native'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'


const styles = StyleSheet.create({
  container: {
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20
  },
})

const WelcomeScreen = ({ navigation }: any) => {
  const handlePress = () => {
    navigation.navigate('Detail report')
  }

  return (
    <View style={styles.container}>

      <StyledText lgX2 >Welcome to</StyledText>
      <StyledText lgX4 semiBold>Money Saver</StyledText>
      <StyledText lg regular>Your partner in smart saving and financial empowerment!</StyledText>
      <Image
        source={require('../../assets/img/bagMoney.png')}
        style={size.lg}
      />
      <Button
        onPress={handlePress}
        title="Next"
        color="#fffff"
        accessibilityLabel="Learn more about this purple button"
      />

    </View>
  )
}

export default WelcomeScreen
