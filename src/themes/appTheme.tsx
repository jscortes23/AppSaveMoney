import { StyleSheet } from "react-native";

const rootColor = {
  darkBlue: '#022A72',
  lightBlue: '#01BBF4',
  white: '#FFFFFF',
  black: '#000000',
  grey: '#8E8E93',
}

export const algin = StyleSheet.create({
  center: {
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export const colors = StyleSheet.create({
  darkBlue: {
    color: rootColor.darkBlue,
  },
  lightBlue: {
    color: rootColor.lightBlue
  },
  white: {
    color: rootColor.white
  },
  black: {
    color: rootColor.black
  },
  grey: {
    color: rootColor.grey
  }
})

export const textFallback = StyleSheet.create({
  text: {
    fontSize: 12,
    color: '#000000'
  },
})

export const fontSize = StyleSheet.create({
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
})

export const fontWeight = StyleSheet.create({
  regular: {
    fontWeight: '400'
  },
  semiBold: {
    fontWeight: '600'
  },
})

export const shadow = StyleSheet.create({
  md: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    elevation: 2
  },
  lg: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowRadius: 8,
    elevation: 2
  }
})

export const size = StyleSheet.create({
  lg: {
    width: 284,
    height: 249
  }
})
