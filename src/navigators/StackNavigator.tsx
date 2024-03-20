import { createStackNavigator } from '@react-navigation/stack'
import InitialScreen from 'screens/InitialScreen'
import WelcomeScreen from 'screens/WelcomeScreen'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createStackNavigator()

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Setup Initial" component={InitialScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator