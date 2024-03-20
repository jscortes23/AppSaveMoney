import BgTwoColor from "components/BgTwoColor"
import StyledText from "components/StyledText"
import React from "react"
import { Image, Pressable, Text, View } from "react-native"
import { algin, button, shadow, size, welcome } from "themes/appTheme"

const WelcomeScreen = ({ navigation }: any) => {
  const handlePress = () => {
    navigation.navigate('Setup Initial')
  }

  return (

    <BgTwoColor>
      <View style={welcome.container}>
        <View style={welcome.header}>
          <View style={welcome.title}>
            <StyledText lgX2 >Welcome to</StyledText>
            <StyledText lgX4 semiBold>Money Saver</StyledText>
          </View>

          <View style={welcome.content}>
            <StyledText lg regular style={algin.textCenter}>Your partner in smart saving and financial empowerment!</StyledText>
            <Image
              source={require('../../assets/img/bagMoney.png')}
              style={[size.lg, shadow.lg]}
            />
          </View>
        </View>


        <View style={welcome.footer}>
          <Pressable style={button.primary} onPress={handlePress}>
            <StyledText semiBold lg>Next</StyledText>
            <Text>▶</Text>
          </Pressable>
          <Text>1 / 4</Text>
        </View>
      </View>
    </BgTwoColor>
  )
}

export default WelcomeScreen
