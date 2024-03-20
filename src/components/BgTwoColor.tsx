import { View } from "react-native"
import { bgTwoColor } from "themes/appTheme"
import { BgTwoColorProps } from "interfaces/IBgTwoColor";

const BgTwoColor = ({ children }: BgTwoColorProps) => {
  return (
    <View style={bgTwoColor.bgContainer}>
      <View style={bgTwoColor.content}>
        {children}
      </View>
      <View style={bgTwoColor.bgBlue}></View>
    </View>
  )
}

export default BgTwoColor