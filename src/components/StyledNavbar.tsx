import StyledText from "./StyledText"
import { Image, View, TouchableOpacity, StyleSheet } from 'react-native';
import { algin, colors, shadow } from "themes/appTheme";

const styles = StyleSheet.create({
  container: {
    // paddingTop: Constants.statusBarHeight + 10,
    marginBottom: 16,
    marginHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    paddingHorizontal: 40,
    backgroundColor: '#cacaca',
    borderRadius: 50,
  }
})


function StyledNavbar({ state, descriptors, navigation }: any) {
  return (
    <View style={[styles.container, shadow.md, { backgroundColor: colors.white.color }]}>

      {
        state.routes.map((route: any, index: any) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
                ? options.title
                : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={algin.center}
            >
              <Image source={require('../../assets/img/homeIcon.png')} tintColor={isFocused ? '#022A72' : '#8E8E93'} style={{ width: 20, height: 20 }} />
              <StyledText style={{ color: isFocused ? '#022A72' : '#8E8E93' }}>
                {label}
              </StyledText>
            </TouchableOpacity>
          );
        })

      }
    </View>
  );
}

export default StyledNavbar