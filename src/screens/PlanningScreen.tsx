import StyledText from "components/StyledText"
import { Alert, Image, Pressable, ScrollView, StyleSheet, TextInput, View } from "react-native"
import { button, rootColor, size } from "themes/appTheme"

const PlanningScreen = () => {
  const handleSubmit = () => {
    Alert.alert('Planning', 'Planning completed successfully')
  }

  const styles = StyleSheet.create({
    inputBorderBottom: {
      borderBottomColor: rootColor.black,
      borderBottomWidth: 1,
      paddingVertical: 8,
      color: rootColor.black
    },
    inputAllBorders: {
      borderWidth: 1,
      borderColor: rootColor.black,
      borderRadius: 4,
      paddingVertical: 8,
      color: rootColor.black
    },
    choiceContainer: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'space-around'
    }
  })

  return (
    <ScrollView>
      <StyledText semiBold lgX2 darkBlue>Financial Planning</StyledText>
      <StyledText lg>Empower your finances by setting and tracking your goals.</StyledText>
      <StyledText semiBold md darkBlue>What’s your Goal?</StyledText>
      <TextInput
        style={styles.inputBorderBottom}
        placeholderTextColor={rootColor.grey}
        placeholder="Enter that you spent"
      />
      <StyledText semiBold md darkBlue>What's your target amount?</StyledText>
      <TextInput
        style={styles.inputAllBorders}
        placeholderTextColor={rootColor.grey}
        placeholder="Enter your target amount"
      />
      <StyledText semiBold md darkBlue>When do you plan to achieve this goal?</StyledText>
      <TextInput
        style={styles.inputAllBorders}
        placeholderTextColor={rootColor.grey}
        placeholder="Enter your target date"
      />
      <StyledText semiBold md darkBlue>Choose your saving style</StyledText>
      <View>
        <View style={styles.choiceContainer}>
          <Image
            source={require('../../assets/img/handPercentage.png')}
            style={size.sm}
          />
          <View>
            <StyledText semiBold sm darkBlue>Percentage-Based</StyledText>
            <StyledText smX>Save a percentage of your income.</StyledText>
            <StyledText smX2>Read More</StyledText>
          </View>
        </View>
        <View style={styles.choiceContainer}>
          <Image
            source={require('../../assets/img/handSaving.png')}
            style={size.sm}
          />
          <View>
            <StyledText semiBold sm darkBlue>Round-Up</StyledText>
            <StyledText smX>Round up transactions and save the spare change. It adds up</StyledText>
            <StyledText smX2>Read More</StyledText>
          </View>
        </View>
        <View style={styles.choiceContainer}>
          <Image
            source={require('../../assets/img/coin.png')}
            style={size.sm}
          />
          <View>
            <StyledText semiBold sm darkBlue>Fixed Amounts</StyledText>
            <StyledText smX>Set a fixed amount to save regularly. Consistency is key</StyledText>
            <StyledText smX2>Read More</StyledText>
          </View>
        </View>
      </View>
      <Pressable style={button.secondary} onPress={handleSubmit}>
        <StyledText semiBold lg white>Next</StyledText>
        <StyledText white>▶</StyledText>
      </Pressable>
    </ScrollView >
  )
}

export default PlanningScreen