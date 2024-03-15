import StyledText from "components/StyledText"
import { useState } from "react"
import { Alert, Button, Image, Pressable, StyleSheet, Text, View } from "react-native"
import { fontSize, fontWeight, rootColor, size } from "themes/appTheme"
import SetupAccountScreen from "screens/SetupAccountScreen"
import { NavigationContainer } from '@react-navigation/native'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20
  },
})

const button = StyleSheet.create({
  primary: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 56,
    backgroundColor: rootColor.white,
    paddingVertical: 18,
    paddingHorizontal: 40,
    borderRadius: 40,
  }
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

      <Pressable style={button.primary} onPress={handlePress}>
        <StyledText style={{ width: '100%' }} semiBold lg>Next</StyledText>
        <Text style={{ flex: .1 }}>▶</Text>
      </Pressable>
    </View>
  )
}

export default WelcomeScreen
