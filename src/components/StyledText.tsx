import { TextStylesProps } from 'interfaces/IStyledText'
import React from 'react'
import { Text } from 'react-native'
import { colors, fontSize, fontWeight, textFallback } from 'themes/appTheme'

export default function StyledText({ children, smX3, smX2, smX, sm, md, lg, lgX, lgX2, lgX3, lgX4, regular, semiBold, darkBlue, lightBlue, white, black, grey, style, restOfProps }: TextStylesProps) {

  const textStyles: any = [
    { ...textFallback.text },
    smX3 && fontSize.smX3,
    smX2 && fontSize.smX2,
    smX && fontSize.smX,
    sm && fontSize.sm,
    md && fontSize.md,
    lg && fontSize.lg,
    lgX && fontSize.lgX,
    lgX2 && fontSize.lgX2,
    lgX3 && fontSize.lgX3,
    lgX4 && fontSize.lgX4,
    regular && fontWeight.regular,
    semiBold && fontWeight.semiBold,
    darkBlue && colors.darkBlue,
    lightBlue && colors.lightBlue,
    white && colors.white,
    black && colors.black,
    grey && colors.grey,
    { ...style }
  ]

  return (
    <Text style={textStyles} {...restOfProps}>
      {children}
    </Text>
  )
}