import { ErrorLike } from "@react-native-async-storage/async-storage/lib/typescript/types"
import StyledText from "components/StyledText"
import { auth, dbFirebase } from "config/firebaseConfig"
import { ErrorFn, createUserWithEmailAndPassword } from "firebase/auth"
import { ref, set } from "firebase/database"
import { UserData } from "interfaces/IUser"
import { StackParamsList } from "navigators/StackNavigator"
import { useRef, useState } from "react"
import { Alert, Image, Modal, Pressable, ScrollView, TextInput, View } from "react-native"
import { NativeStackScreenProps } from "react-native-screens/lib/typescript/native-stack/types"
import { AccountSetup, button, modalAccountSetup, rootColor, size } from "themes/appTheme"

type AccountSetupScreenProps = NativeStackScreenProps<StackParamsList, 'AccountSetup'>

const AccountSetupScreen: React.FC<AccountSetupScreenProps> = (props) => {
  const { navigation } = props

  const [fullName, setFullName] = useState<string>('')
  const [phoneNumber, setPhoneNumber] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [bankAccountNumber, setBankAccountNumber] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [errorMessage, setErrorMessage] = useState<string>('')

  const fullNameRef = useRef<TextInput>(null)
  const phoneNumberRef = useRef<TextInput>(null)
  const emailRef = useRef<TextInput>(null)
  const passwordRef = useRef<TextInput>(null)
  const bankAccountNumberRef = useRef<TextInput>(null)

  const [modal, setModal] = useState<boolean>(false)

  const handleModal = () => {
    setModal(!modal)
  }

  const handleUploadPhoto = () => {
    Alert.alert('Account Setup', 'Photo uploaded successfully')
  }

  const handleSubmit = () => {
    if ((fullName === '' || phoneNumber === '' || email === '' || bankAccountNumber === '') || errorMessage) return setModal(true)
    handleRegister({ fullName, phoneNumber, email, password, bankAccountNumber })
  }

  const handleRegister = async ({ fullName, phoneNumber, email, password, bankAccountNumber }: UserData) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      const user = userCredential.user

      if (!user) return

      await set(ref(dbFirebase, `user/${user.uid}`), {
        email: email,
        fullName: fullName,
        phoneNumber: phoneNumber,
        bankAccountNumber: bankAccountNumber
      })
      navigation.navigate('PaymentList')
    } catch (error: any) {
      setErrorMessage(error.message)
    }
  }

  return (
    <ScrollView>
      <View style={AccountSetup.container}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modal}
          onRequestClose={() => setModal(!modal)}
        >
          <View style={modalAccountSetup.centerView}>
            <View style={modalAccountSetup.container}>
              <StyledText semiBold lgX2>{errorMessage ?? 'Please fill all the fields'}</StyledText>
              <Pressable style={button.secondary} onPress={handleModal}>
                <StyledText semiBold lg white>Close</StyledText>
              </Pressable>
            </View>
          </View>
        </Modal>
        <View style={AccountSetup.header}>
          <StyledText semiBold lgX2>Account Setup</StyledText>
          <StyledText lg textCentered>Please provide the basic details to complete the account setup</StyledText>
        </View>
        <Pressable style={AccountSetup.sectionPhoto} onPress={handleUploadPhoto}>
          <View style={AccountSetup.bgBlueRounded}>
            <Image
              source={require('../../assets/img/face.png')}
              style={size.sm}
            />
          </View>
          <StyledText semiBold lgX2>Add Photo</StyledText>
        </Pressable>
        <View style={AccountSetup.containerInputs}>
          <TextInput
            ref={fullNameRef}
            style={AccountSetup.input}
            placeholderTextColor={rootColor.grey}
            placeholder="Enter full name"
            onChangeText={(text) => setFullName(text)}
            value={fullName}
            onSubmitEditing={() => phoneNumberRef.current?.focus()}
          />
          <TextInput
            ref={phoneNumberRef}
            style={AccountSetup.input}
            placeholderTextColor={rootColor.grey}
            placeholder="Mobile Number"
            keyboardType="phone-pad"
            onChangeText={(text) => setPhoneNumber(text)}
            value={phoneNumber}
            onSubmitEditing={() => emailRef.current?.focus()}
          />
          <TextInput
            ref={emailRef}
            style={AccountSetup.input}
            placeholderTextColor={rootColor.grey}
            placeholder="Email id"
            keyboardType="email-address"
            onChangeText={(text) => setEmail(text)}
            value={email}
            onSubmitEditing={() => passwordRef.current?.focus()}
          />
          <TextInput
            ref={passwordRef}
            style={AccountSetup.input}
            placeholderTextColor={rootColor.grey}
            placeholder="Password"
            secureTextEntry={true}
            autoCapitalize="none"
            onChangeText={(text) => setPassword(text)}
            value={password}
            onSubmitEditing={() => bankAccountNumberRef.current?.focus()}
          />
          <TextInput
            ref={bankAccountNumberRef}
            style={AccountSetup.input}
            placeholderTextColor={rootColor.grey}
            placeholder="Banck Acc. No"
            keyboardType="numeric"
            onChangeText={(text) => setBankAccountNumber(text)}
            value={bankAccountNumber}
          />
        </View>
        <View style={AccountSetup.footer}>
          <Pressable style={button.secondary} onPress={handleSubmit}>
            <StyledText semiBold lg white>Next</StyledText>
            <StyledText white>▶</StyledText>
          </Pressable>
          <View>
            <StyledText lg>Already have Account?</StyledText>
            <Pressable onPress={handleSubmit}>
              <StyledText lg lightBlue textCentered>Login Here</StyledText>
            </Pressable>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default AccountSetupScreen