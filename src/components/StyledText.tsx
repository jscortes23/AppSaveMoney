import { TextStylesProps } from 'interfaces/IStyledText'
import React from 'react'
import { StyleSheet, Text, TextStyle } from 'react-native'

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    color: '#FFFFFF'
  },
  smX3: {
    fontSize: 6
  },
  smX2: {
    fontSize: 8
  },
  smX: {
    fontSize: 10
  },
  sm: {
    fontSize: 12
  },
  md: {
    fontSize: 14
  },
  lg: {
    fontSize: 16
  },
  lgX: {
    fontSize: 18
  },
  lgX2: {
    fontSize: 24
  },
  lgX3: {
    fontSize: 28
  },
  lgX4: {
    fontSize: 40
  },
  regular: {
    fontWeight: '400'
  },
  semiBold: {
    fontWeight: '600'
  },
  darkBlue: {
    color: '#022A72'
  },
  lightBlue: {
    color: '#01BBF4'
  },
  white: {
    color: '#FFFFFF'
  },
  black: {
    color: '#000000'
  },
  grey: {
    color: '#8E8E93'
  }
})

export default function StyledText({ children, text, smX3, smX2, smX, sm, md, lg, lgX, lgX2, lgX3, lgX4, regular, semiBold, darkBlue, lightBlue, white, black, grey }: TextStylesProps) {
  // const textStyles: [ number | string | undefined ] = [
  const textStyles: any = [
    text,
    smX3 && styles.smX3,
    smX2 && styles.smX2,
    smX && styles.smX,
    sm && styles.sm,
    md && styles.md,
    lg && styles.lg,
    lgX && styles.lgX,
    lgX2 && styles.lgX2,
    lgX3 && styles.lgX3,
    lgX4 && styles.lgX4,
    regular && styles.regular,
    semiBold && styles.semiBold,
    darkBlue && styles.darkBlue,
    lightBlue && styles.lightBlue,
    white && styles.white,
    black && styles.black,
    grey && styles.grey
  ]

  return (
    <Text style={textStyles}>
      {children}
    </Text>
  )
}