import BgTwoColor from "components/BgTwoColor"
import StyledText from "components/StyledText"
import React from "react"
import { Image, Pressable, Text, View } from "react-native"
import { button, container, shadow, size } from "themes/appTheme"

const WelcomeScreen = ({ navigation }: any) => {
  const handlePress = () => {
    navigation.navigate('Setup Initial')
  }

  return (

    <BgTwoColor>
      <View style={container.welcome}>
        <StyledText lgX2 >Welcome to</StyledText>
        <StyledText lgX4 semiBold>Money Saver</StyledText>
        <StyledText lg regular>Your partner in smart saving and financial empowerment!</StyledText>
        <Image
          source={require('../../assets/img/bagMoney.png')}
          style={[size.lg, shadow.lg]}
        />

        <Pressable style={button.primary} onPress={handlePress}>
          <StyledText semiBold lg>Next</StyledText>
          <Text>▶</Text>
        </Pressable>
      </View>
    </BgTwoColor>
  )
}

export default WelcomeScreen
