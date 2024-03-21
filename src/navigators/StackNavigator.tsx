import { createStackNavigator } from '@react-navigation/stack'
import InitialScreen from 'screens/InitialScreen'
import WelcomeScreen from 'screens/WelcomeScreen'
import AccountSetupScreen from 'screens/AccountSetupScreen'

const Stack = createStackNavigator()

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Setup Initial" component={InitialScreen} />
      <Stack.Screen name="Account Setup" component={AccountSetupScreen} />
    </Stack.Navigator>
  )
}

export default StackNavigator