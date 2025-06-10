import { KeyboardAvoidingView, Platform, StyleProp, StyleSheet, ViewStyle } from 'react-native'
import React, { FC, ReactNode } from 'react'
import { Edge, SafeAreaView } from 'react-native-safe-area-context';

/**
 * Props for the SafeAreaWrapper component.
 */
type SafeAreaWrapperProps = {
  /** Child components to render within the wrapper */
  children: ReactNode;

  /** 
   * Edges to apply safe area padding. 
   * Defaults to ['top', 'left', 'right', 'bottom'] 
   * @see https://github.com/th3rdwave/react-native-safe-area-context
  */
  edges?: Edge[];

  /** 
   * Additional styles to apply to the container 
   * Optional custom styles for the container.
   * Accepts any valid ViewStyle.
   * @see https://reactnative.dev/docs/style
  */
  style?: StyleProp<ViewStyle>;

  /**
 * Whether to enable keyboard avoidance. Defaults to false.
 * @see https://reactnative.dev/docs/keyboardavoidingview
 */
  avoidKeyboard?: boolean;
}

const defaultPadding = '6%';

/**
 * A wrapper component that applies safe area padding and optionally handles keyboard avoidance.
 *
 * @example
 * <SafeAreaWrapper>
 *   <Text>Welcome!</Text>
 * </SafeAreaWrapper>
 *
 * @example
 * <SafeAreaWrapper avoidKeyboard>
 *   <TextInput placeholder="Type here" />
 * </SafeAreaWrapper>
 */
const SafeAreaWrapper: FC<SafeAreaWrapperProps> = ({
  children,
  style,
  edges = ['top', 'left', 'right'],
  avoidKeyboard = false
}) => {


  return avoidKeyboard ?
    (
      <KeyboardAvoidingView 
        style={styles.container} 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <SafeAreaView
          style={[styles.container, { padding: defaultPadding }, style]}
          edges={edges}
        >
          {children}
        </SafeAreaView>
      </KeyboardAvoidingView>
    )
    :
    (
      <SafeAreaView
        style={[styles.container, { padding: defaultPadding }, style]}
        edges={edges}
      >
        {children}
      </SafeAreaView>
    )
}

export default SafeAreaWrapper

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})