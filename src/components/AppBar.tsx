import { Image, StyleSheet, View } from "react-native"
import StyledText from "./StyledText"
// Para que calcule de forma automatica la barra de arriba del celular
// import Constants from 'expo-constants'

const styles = StyleSheet.create({
  container: {
    // paddingTop: Constants.statusBarHeight + 10,
    marginBottom: 16,
    marginHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    paddingHorizontal: 40,
    backgroundColor: '#cacaca',
    borderRadius: 50,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    elevation: 2
  }
})

const AppBar = () => {
  return (
    <View style={styles.container}>
      <StyledText>
        <Image
          source={require('../../assets/img/bagMoney.png')}
          style={{ width: 20, height: 20 }}
        />
        Home
      </StyledText>
      <StyledText>Goals</StyledText>
      <StyledText>Notification</StyledText>
      <StyledText>Reports</StyledText>
    </View>
  )
}

export default AppBar