import { Image, StyleSheet, View } from "react-native"
import StyledText from "./StyledText"
import NavbarButton from "./StyledNavbar"
import { algin, shadow } from "themes/appTheme"
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createStackNavigator } from '@react-navigation/stack'
import WelcomeScreen from "screens/WelcomeScreen"
import StyledNavbar from "./StyledNavbar"
import PaymentListScreen from "screens/PaymentListScreen"
import SetupAccountScreen from "screens/SetupAccountScreen"
// Para que calcule de forma automatica la barra de arriba del celular
// import Constants from 'expo-constants'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

const AppBar = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={StyledNavbar}>
        <Tab.Screen name="Home" component={WelcomeScreen} />
        <Tab.Screen name="Setup your account" component={SetupAccountScreen} />
        <Stack.Screen name="Detail report" component={PaymentListScreen} />
      </Tab.Navigator>

      {/* <View style={[styles.container, shadow.md]}> */}
      {/* <NavbarButton text="Home" />
        <NavbarButton text="Goals" />
        <NavbarButton text="Notification" />
        <NavbarButton text="Reports" /> */}
      {/* </View> */}
    </NavigationContainer>
  )
}

export default AppBar