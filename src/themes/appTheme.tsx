import { StyleSheet } from "react-native";

export const rootColor = {
  darkBlue: '#022A72',
  lightBlue: '#01BBF4',
  white: '#FFFFFF',
  black: '#000000',
  grey: '#8E8E93',
}

export const text = StyleSheet.create({
  center: {
    textAlign: 'center'
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
  sm: {
    width: 70,
    height: 78
  },
  lg: {
    width: 284,
    height: 249
  }
})

export const bgTwoColor = StyleSheet.create({
  bgContainer: {
    flex: 1,
    backgroundColor: colors.white.color,
  },
  bgBlue: {
    flex: 1,
    top: '50%',
    backgroundColor: colors.lightBlue.color,
  },
  content: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%',
    zIndex: 1
  }
})

export const container = StyleSheet.create({
  welcome: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
})

export const welcome = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 100,
    height: 390,
    justifyContent: 'space-between'
  },
  content: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    rowGap: 23,
  },
  title: {
    alignItems: 'center',
    rowGap: 4,
  },
  footer: {
    alignItems: 'center',
    justifyContent: 'center',
    rowGap: 20,
  }

})

export const AccountSetup = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: rootColor.black,
    borderRadius: 4,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  containerInputs: {
    rowGap: 16,
    marginBottom: 20
  },
  bgBlueRounded: {
    width: 184,
    aspectRatio: 1,
    backgroundColor: rootColor.lightBlue,
    borderRadius: 1000,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: "hidden"
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  header: {
    rowGap: 4,
    alignItems: 'center',
    marginBottom: 28,
    paddingHorizontal: 20,
  },
  sectionPhoto: {
    alignItems: 'center',
    justifyContent: 'center',
    rowGap: 6,
    marginBottom: 20
  },
  footer: {
    paddingBottom: 40,
    alignItems: 'center',
    rowGap: 20,
  }
})

export const modalAccountSetup = StyleSheet.create({
  centerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22
  },
  container: {
    paddingHorizontal: 40,
    paddingVertical: 30,
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 20,
    backgroundColor: rootColor.white,
    borderRadius: 20,
  }
})

export const button = StyleSheet.create({
  primary: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 20,
    backgroundColor: rootColor.white,
    paddingVertical: 18,
    paddingHorizontal: 40,
    borderRadius: 40,
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
})