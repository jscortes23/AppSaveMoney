import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import StyledNavbar from 'components/StyledNavbar'


const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  return (
    <Tab.Navigator tabBar={StyledNavbar}>
      <Tab.Screen name="Home" component={WelcomeScreen} />
      <Tab.Screen name="Setup your account" component={SetupAccountScreen} />
    </Tab.Navigator>
  )
}

export default TabNavigator