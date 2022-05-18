import { extendTheme } from "@chakra-ui/react";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    greyDark: "#1E1E1E",
    greyBorder: "#555555",
    greyText: "#696969",
    grey: "#9A9A9A",
    primaryBG: "#5B5B5B",
    primaryRed: "#FF0000",
    purpleLight: "#DED9FF",
    purpleDark: "#4C4096",
    white: "#FFFFFF",
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
  fonts: {
    body: "Space grotesk",
    // body: "Raleway",
  },
};

export const theme = extendTheme({ colors });
