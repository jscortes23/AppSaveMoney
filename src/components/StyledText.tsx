import { TextStylesProps } from 'interfaces/IStyledText'
import React from 'react'
import { Text } from 'react-native'
import { colors, fontSize, fontWeight, text, textFallback } from 'themes/appTheme'

const StyledText: React.FC<TextStylesProps> = (props) => {

  const textStyles: {} = [
    { ...textFallback.text },
    props.smX3 && fontSize.smX3,
    props.smX2 && fontSize.smX2,
    props.smX && fontSize.smX,
    props.sm && fontSize.sm,
    props.md && fontSize.md,
    props.lg && fontSize.lg,
    props.lgX && fontSize.lgX,
    props.lgX2 && fontSize.lgX2,
    props.lgX3 && fontSize.lgX3,
    props.lgX4 && fontSize.lgX4,
    props.regular && fontWeight.regular,
    props.semiBold && fontWeight.semiBold,
    props.darkBlue && colors.darkBlue,
    props.lightBlue && colors.lightBlue,
    props.white && colors.white,
    props.black && colors.black,
    props.grey && colors.grey,
    props.textCentered && text.center,
    { ...props.style }
  ]

  return (
    <Text style={textStyles} {...props.restOfProps}>
      {props.children}
    </Text>
  )
}

export default StyledText