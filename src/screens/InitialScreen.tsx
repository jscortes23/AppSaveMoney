import BgTwoColor from "components/BgTwoColor"
import StyledText from "components/StyledText"
import { StackParamsList } from "navigators/StackNavigator"
import React from "react"
import { Image, Pressable, Text, View } from "react-native"
import { NativeStackScreenProps } from "react-native-screens/lib/typescript/native-stack/types"
import { button, shadow, size, welcome } from "themes/appTheme"

type InitialScreenProps = NativeStackScreenProps<StackParamsList, 'SetupInitial'>

const InitialScreen: React.FC<InitialScreenProps> = (props) => {
  const { navigation } = props

  const handlePress = () => {
    navigation.navigate('AccountSetup')
  }

  return (
    <BgTwoColor>
      <View style={welcome.container}>
        <View style={welcome.header}>
          <View style={welcome.title}>
            <StyledText lgX3 semiBold>Setup Your Account</StyledText>
            <StyledText lg>In just few minutes</StyledText>
          </View>

          <View style={welcome.content}>
            <View style={shadow.lg}>
              <Image
                source={require('../../assets/img/setupImage.png')}
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
          <Text>2 / 4</Text>
        </View>
      </View>
    </BgTwoColor>
  )
}

export default InitialScreen
