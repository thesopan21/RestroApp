import { useTheme } from "@react-navigation/native";
import { FC } from "react";
import { Text, TextProps } from "react-native";



const ThemedText: FC<TextProps> = (props) => {
  const { colors } = useTheme()

  return <Text {...props} style={[{ color: colors.text }, props.style]} />;
}

export default ThemedText;