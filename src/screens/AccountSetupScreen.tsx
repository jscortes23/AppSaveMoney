import StyledText from "components/StyledText"
import { StackParamsList } from "navigators/StackNavigator"
import { useRef, useState } from "react"
import { Alert, Image, Modal, Pressable, TextInput, View } from "react-native"
import { NativeStackScreenProps } from "react-native-screens/lib/typescript/native-stack/types"
import { AccountSetup, button, modalAccountSetup, rootColor, size } from "themes/appTheme"

type AccountSetupScreenProps = NativeStackScreenProps<StackParamsList, 'AccountSetup'>

const AccountSetupScreen: React.FC<AccountSetupScreenProps> = (props) => {
  const { navigation } = props

  const [fullName, setFullName] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [bankAccountNumber, setBankAccountNumber] = useState<string>('')

  const fullNameRef = useRef<TextInput>(null)
  const phoneRef = useRef<TextInput>(null)
  const emailRef = useRef<TextInput>(null)
  const bankAccountNumberRef = useRef<TextInput>(null)

  const [modal, setModal] = useState<boolean>(false)

  const handleModal = () => {
    setModal(!modal)
  }

  const handleUploadPhoto = () => {
    Alert.alert('Account Setup', 'Photo uploaded successfully')
  }

  const handleSubmit = () => {
    if (fullName === '' || phone === '' || email === '' || bankAccountNumber === '') return setModal(true)
    navigation.navigate('Planning')
  }

  return (
    <View style={AccountSetup.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modal}
        onRequestClose={() => setModal(!modal)}
      >
        <View style={modalAccountSetup.centerView}>
          <View style={modalAccountSetup.container}>
            <StyledText semiBold lgX2>Please fill all the fields</StyledText>
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
          onSubmitEditing={() => phoneRef.current?.focus()}
        />
        <TextInput
          ref={phoneRef}
          style={AccountSetup.input}
          placeholderTextColor={rootColor.grey}
          placeholder="Mobile Number"
          keyboardType="phone-pad"
          onChangeText={(text) => setPhone(text)}
          value={phone}
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
          <Pressable onPress={() => navigation.navigate('Login')}>
            <StyledText lg lightBlue textCentered>Login Here</StyledText>
          </Pressable>
        </View>
      </View>
    </View>
  )
}

export default AccountSetupScreen