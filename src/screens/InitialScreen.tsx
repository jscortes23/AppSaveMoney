import BgTwoColor from "components/BgTwoColor"
import StyledText from "components/StyledText"
import React from "react"
import { Image, Pressable, Text, View } from "react-native"
import { button, container, shadow, size, welcome } from "themes/appTheme"

const InitialScreen = ({ navigation }: any) => {
  const handlePress = () => {
    navigation.navigate('Welcome')
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
            <Image
              source={require('../../assets/img/setupImage.png')}
              style={[size.lg, shadow.lg]}
            />
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
