import { StyleProp, StyleSheet, View, ViewProps, ViewStyle } from 'react-native'
import React, { FC } from 'react'
import { useTheme } from '@react-navigation/native'

interface ThemedViewProps extends ViewProps {
  style?: StyleProp<ViewStyle>
}

const ThemedView: FC<ThemedViewProps> = ({ style, children, ...rest }) => {

  const { colors } = useTheme()

  return (
    <View
      style={[{ backgroundColor: colors.background }, style]}
      {...rest}
    >
      {children}
    </View>
  )
}

export default ThemedView

const styles = StyleSheet.create({})