import StyledText from "components/StyledText"
import { StackParamsList } from "navigators/StackNavigator"
import { Alert, Image, Pressable, ScrollView, StyleSheet, TextInput, View } from "react-native"
import { NativeStackScreenProps } from "react-native-screens/lib/typescript/native-stack/types"
import { button, fontSize, rootColor, size } from "themes/appTheme"

type PlanningScreenProps = NativeStackScreenProps<StackParamsList, 'Planning'>

const PlanningScreen: React.FC<PlanningScreenProps> = (props) => {
  const handleSubmit = () => {
    Alert.alert('Planning', 'Planning completed successfully')
  }

  const styles = StyleSheet.create({
    header: {
      alignItems: 'center',
      alignSelf: 'center',
      rowGap: 5,
      maxWidth: 250,
      marginBottom: 23
    },
    inputBorderBottom: {
      borderBottomColor: rootColor.black,
      borderBottomWidth: 1,
      paddingHorizontal: 8,
      paddingVertical: 4,
      marginHorizontal: 18,
      color: rootColor.black,
      marginBottom: 24
    },
    inputAllBorders: {
      width: 261,
      borderWidth: .5,
      borderColor: rootColor.black,
      fontSize: fontSize.lg.fontSize,
      fontWeight: '600',
      borderRadius: 4,
      paddingVertical: 8,
      color: rootColor.black
    },
    choiceContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 8,
      paddingHorizontal: 30,
      columnGap: 40,
      backgroundColor: '#e9e9e9',
      marginHorizontal: 24,
      borderRadius: 16,
    },
    contentSaving: {
      rowGap: 10
    },
    choiceContent: {
      // flex: 5,
      flex: 1,
      rowGap: 16
    },
    containerInput: {
      alignItems: 'center',
      justifyContent: 'center',
      rowGap: 12,
      marginBottom: 16,
    },
    containerSaving: {
      rowGap: 10,
    }
  })

  return (
    <ScrollView>
      <View style={styles.header}>
        <StyledText semiBold lgX2 darkBlue>Financial Planning</StyledText>
        <StyledText lg textCentered>Empower your finances by setting and tracking your goals.</StyledText>
      </View>
      <StyledText semiBold md darkBlue textCentered>What’s your Goal?</StyledText>
      <TextInput
        style={styles.inputBorderBottom}
        placeholderTextColor={rootColor.grey}
        placeholder="Enter that you spent"
      />
      <View style={styles.containerInput}>
        <StyledText semiBold md darkBlue textCentered>What's your target amount?</StyledText>
        <TextInput
          style={styles.inputAllBorders}
          placeholderTextColor={rootColor.grey}
          placeholder="Enter your target amount"
          textAlign="center"
        />
      </View>
      <View style={styles.containerInput}>
        <StyledText semiBold md darkBlue textCentered>When do you plan to achieve this goal?</StyledText>
        <TextInput
          style={styles.inputAllBorders}
          placeholderTextColor={rootColor.grey}
          placeholder="Enter your target date"
          textAlign="center"
        />
      </View>
      <View style={styles.containerSaving}>
        <StyledText semiBold md darkBlue textCentered>Choose your saving style</StyledText>
        <View style={styles.contentSaving}>
          <View style={styles.choiceContainer}>
            <Image
              source={require('../../assets/img/handPercentage.png')}
              style={size.sm}
            />
            <View style={styles.choiceContent}>
              <View>
                <StyledText semiBold md darkBlue>Percentage-Based</StyledText>
                <StyledText sm>Save a percentage of your income.</StyledText>
              </View>
              <StyledText smX2>Read More</StyledText>
            </View>
          </View>
          <View style={styles.choiceContainer}>
            <Image
              source={require('../../assets/img/handSaving.png')}
              style={size.sm}
            />
            <View style={styles.choiceContent}>
              <View>
                <StyledText semiBold md darkBlue>Round-Up</StyledText>
                <StyledText sm>Round up transactions and save the spare change. It adds up</StyledText>
              </View>
              <StyledText smX2>Read More</StyledText>
            </View>
          </View>
          <View style={styles.choiceContainer}>
            <Image
              source={require('../../assets/img/coin.png')}
              style={size.sm}
            />
            <View style={styles.choiceContent}>
              <View>
                <StyledText semiBold md darkBlue>Fixed Amounts</StyledText>
                <StyledText sm>Set a fixed amount to save regularly. Consistency is key</StyledText>
              </View>
              <StyledText smX2>Read More</StyledText>
            </View>
          </View>
        </View>
        <Pressable style={button.secondary} onPress={handleSubmit}>
          <StyledText semiBold lg white>Get Started</StyledText>
          <StyledText white>▶</StyledText>
        </Pressable>
      </View>
    </ScrollView>
  )
}

export default PlanningScreen