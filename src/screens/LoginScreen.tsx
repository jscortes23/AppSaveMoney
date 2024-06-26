import BgTwoColor from "components/BgTwoColor"
import StyledText from "components/StyledText"
import { useEffect, useState } from "react"
import { Alert, Pressable, Text, TextInput, View } from "react-native"
import { AccountSetup, button, rootColor } from "themes/appTheme"

import { NativeStackScreenProps } from "react-native-screens/lib/typescript/native-stack/types"
import { StackParamsList } from "navigators/StackNavigator"

// Firebase
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { appFirebase } from "config/firebaseConfig"
import { auth } from "config/firebaseConfig";

type LoginScreenProps = NativeStackScreenProps<StackParamsList, 'Login'>

const LoginScreen: React.FC<LoginScreenProps> = (props) => {
  const { navigation } = props

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [errorMessage, setErrorMessage] = useState<string>('')

  const handleLogin = async () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentail) => {
        const user = userCredentail.user
        if (!user) return
        navigation.navigate('PaymentList')
      })
      .catch((error) => {
        setErrorMessage(error.message)
      })
  }

  return (
    <BgTwoColor>
      <StyledText semiBold lgX3 textCentered>Login</StyledText>
      <View>
        <StyledText lg>Email</StyledText>
        <TextInput
          style={AccountSetup.input}
          placeholderTextColor={rootColor.grey}
          placeholder="Enter your email"
          onChangeText={(text) => setEmail(text)}
          autoCapitalize="none"
          textContentType="emailAddress"
          inputMode="email"
        />
      </View>
      <View>
        <StyledText lg>Password</StyledText>
        <TextInput
          style={AccountSetup.input}
          placeholderTextColor={rootColor.grey}
          placeholder="Enter your password"
          secureTextEntry={true}
          autoCapitalize="none"
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <Pressable style={button.secondary} onPress={() => handleLogin()}>
        <StyledText lg white>Enter</StyledText>
      </Pressable>
      {errorMessage && <Text>{errorMessage}</Text>}
      <Pressable style={button.primary} onPress={() => navigation.navigate('AccountSetup')}>
        <StyledText lg>Register</StyledText>
      </Pressable>
    </BgTwoColor>
  )
}

export default LoginScreen