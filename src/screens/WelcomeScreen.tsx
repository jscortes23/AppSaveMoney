import BgTwoColor from "components/BgTwoColor"
import StyledText from "components/StyledText"
import { StackParamsList } from "navigators/StackNavigator"
import React from "react"
import { Image, Pressable, Text, View } from "react-native"
import { NativeStackScreenProps } from "react-native-screens/lib/typescript/native-stack/types"
import { button, shadow, size, welcome } from "themes/appTheme"

type WelcomeScreenProps = NativeStackScreenProps<StackParamsList, 'Welcome'>

const WelcomeScreen: React.FC<WelcomeScreenProps> = (props) => {
  const { navigation } = props
  const handlePress = () => {
    navigation.navigate('SetupInitial')
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
            <StyledText lg regular textCentered>Your partner in smart saving and financial empowerment!</StyledText>
            <View style={shadow.lg}>
              <Image
                source={require('../../assets/img/bagMoney.png')}
                style={size.lg}
              />
            </View>
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
