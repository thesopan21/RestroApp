import { LinkingOptions } from "@react-navigation/native";
import { RootStackParamList } from "../types/navigationTypes";

export const linking: LinkingOptions<RootStackParamList>  = {
  prefixes: ['awesomeproject://', 'https://awesomeproject.com'],
  config: {
    screens: {
      Public: {
        screens: {
          Home: 'home',
        },
      },
      Auth: {
        screens: {
          Login: 'login',
        },
      },
      RoleBased: {
        screens: {
          Feed: 'feed',
          Profile: 'profile',
        },
      },
    },
  },
};
