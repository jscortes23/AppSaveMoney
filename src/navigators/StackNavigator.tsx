import { createStackNavigator } from '@react-navigation/stack'
import InitialScreen from 'screens/InitialScreen'
import WelcomeScreen from 'screens/WelcomeScreen'
import AccountSetupScreen from 'screens/AccountSetupScreen'
import PlanningScreen from 'screens/PlanningScreen'
import LoginScreen from 'screens/LoginScreen'
import PaymentListScreen from 'screens/PaymentListScreen'

export type StackParamsList = {
  Welcome: undefined
  SetupInitial: undefined
  AccountSetup: undefined
  Planning: undefined
  Login: undefined
  PaymentList: undefined
}

const Stack = createStackNavigator<StackParamsList>()

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="SetupInitial" component={InitialScreen} />
      <Stack.Screen name="Planning" component={PlanningScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  )
}


export const StackLogin = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="AccountSetup" component={AccountSetupScreen} />
      <Stack.Screen name='PaymentList' component={PaymentListScreen} />
    </Stack.Navigator>
  )
}