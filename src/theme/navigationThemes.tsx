import { DarkTheme as NavigationDarkTheme, DefaultTheme as NavigationDefaultTheme } from "@react-navigation/native";

export const LightTheme = {
  ...NavigationDefaultTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
    background: '#ffffff',
    card: '#f8f8f8',
    text: '#000000',
    border: '#e0e0e0',
    primary: '#6200ee',
  },
};

export const DarkTheme = {
  ...NavigationDarkTheme,
  colors: {
    ...NavigationDarkTheme.colors,
    background: '#212121',
    card: '#1f1f1f',
    text: '#FFFFFF',
    border: '#272727',
    primary: '#bb86fc',
  },
};