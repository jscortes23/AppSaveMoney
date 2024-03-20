import StyledText from "components/StyledText"
import { Alert, Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native"
import { rootColor, size } from "themes/appTheme"

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: rootColor.black,
    borderRadius: 4,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  containerInputs: {
    rowGap: 20,
  },
  secondary: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: rootColor.black,
    flexDirection: 'row',
    columnGap: 20,
    paddingVertical: 18,
    paddingHorizontal: 40,
    borderRadius: 40,
  },
  bgBlueRounded: {
    width: 184,
    aspectRatio: 1,
    backgroundColor: rootColor.lightBlue,
    borderRadius: 1000,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

const AccountSetupScreen = () => {
  const handlePress = () => {
    Alert.alert('Account Setup', 'Account setup completed successfully')
  }
  return (
    <View>
      <StyledText semiBold lgX2>Account Setup</StyledText>
      <StyledText lg>Please provide the basic details to complete the account setup</StyledText>
      <View style={styles.bgBlueRounded}>
        <Image
          source={require('../../assets/img/face.png')}
          style={size.sm}
        />
      </View>
      <StyledText semiBold lgX2>Add Photo</StyledText>
      <View style={styles.containerInputs}>
        <TextInput
          style={styles.input}
          placeholder="Enter full name"
        />
        <TextInput
          style={styles.input}
          placeholder="Mobile Number"
          keyboardType="phone-pad"
        />
        <TextInput
          style={styles.input}
          placeholder="Email id"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Banck Acc. No"
          keyboardType="numeric"
        />
      </View>
      <View>
        <Pressable style={styles.secondary} onPress={handlePress}>
          <StyledText semiBold lg white>Next</StyledText>
          <StyledText white>▶</StyledText>
        </Pressable>
        <View>
          <StyledText lg>Already hace Account?</StyledText>
          <StyledText lg lightBlue>Login Here</StyledText>
        </View>
      </View>
    </View>
  )
}

export default AccountSetupScreen