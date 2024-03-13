import StyledText from "components/StyledText"
import { Image, StyleSheet, View } from "react-native"
import { algin, size } from "themes/appTheme"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20
  },
})

const SetupAccountScreen = () => {
  return (
    <View style={[algin.center, styles.container]}>
      <StyledText semiBold lgX3>Setup Your Account</StyledText>
      <StyledText lg>In just few minutes</StyledText>
      <Image source={require('../../assets/img/setupImage.png')} style={size.lg} />
    </View >
  )
}

export default SetupAccountScreen