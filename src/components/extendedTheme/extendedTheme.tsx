import {
  defineStyleConfig,
  StyleFunctionProps,
  createMultiStyleConfigHelpers,
  extendTheme,
} from "@chakra-ui/react";
import { CardStyle } from "../Card";
import { drawerTheme } from "./drawerTheme";
import { tabsTheme } from "./tabsTheme";
const Button = defineStyleConfig({
  // The styles all button have in common
  baseStyle: {
    fontWeight: "bold",
    whiteSpace: "normal",
    borderRadius: "base", // <-- border radius is same for all variants and sizes
    borderImage:
      "conic-gradient(from var(--angle), rgb(19, 55, 97), aqua, blue, rgb(19, 55, 97)) 1",
    _hover: {
      bg: "highlight.pink",
    },
  },
  // Two sizes: sm and md
  sizes: {
    sm: {
      fontSize: "sm",
      px: 4, // <-- px is short for paddingLeft and paddingRight
      py: 3, // <-- py is short for paddingTop and paddingBottom
    },
    md: {
      fontSize: "md",
      px: 6, // <-- these values are tokens from the design system
      py: 4, // <-- these values are tokens from the design system
    },
  },
  // Two variants: outline and solid
  variants: {
    outline: {
      border: "2px solid",
      color: "white",
      _hover: {
        color: "highlight.pink",
        borderColor: "accent.pink",
        bg: "",
      },
      _active: {
        bg: "",
        borderColor: "highlight.pink",
      },
    },
    solid: {
      bg: "purple.500",
      color: "white",
    },
  },
  // The default size and variant values
  defaultProps: {
    size: "md",
    variant: "outline",
  },
});

const Link = defineStyleConfig({
  // The styles all button have in common
  baseStyle: {
    fontWeight: "bold",
    whiteSpace: "normal",
    borderRadius: "base", // <-- border radius is same for all variants and sizes
    borderImage:
      "conic-gradient(from var(--angle), rgb(19, 55, 97), aqua, blue, rgb(19, 55, 97)) 1",
    _hover: {
      bg: "",
    },
  },
  // Two sizes: sm and md
  sizes: {
    sm: {
      fontSize: "sm",
      px: 4, // <-- px is short for paddingLeft and paddingRight
      py: 3, // <-- py is short for paddingTop and paddingBottom
    },
    md: {
      fontSize: "md",
      px: 6, // <-- these values are tokens from the design system
      py: 4, // <-- these values are tokens from the design system
    },
  },
  // Two variants: outline and solid
  variants: {
    subtle: {
      textDecoration: "underline",
      textDecorationColor: "teal",
      textUnderlineOffset: "2px",
      transition: "text-underline-offset 0.2s ease-in",

      _hover: {
        textUnderlineOffset: "5px",
        transition: "text-underline-offset 0.2s ease-in",
      },
    },
    inline: {
      p: 0,
      textDecoration: "underline",
      textDecorationColor: "teal",
      _selected: {
        textDecorationColor: "teal",
      },
    },
  },
  // The default size and variant values
  defaultProps: {
    size: "md",
    variant: "subtle",
  },
});
// This function creates a set of function that helps us create multipart component styles.
const menuHelpers = createMultiStyleConfigHelpers(["menu", "item"]);
const Menu = menuHelpers.defineMultiStyleConfig({
  baseStyle: {
    menu: {
      boxShadow: "lg",
      rounded: "lg",
      flexDirection: "column",
      py: "2",
    },
    item: {
      fontWeight: "medium",
      lineHeight: "normal",
      color: "gray.600",
    },
  },
  sizes: {
    sm: {
      item: {
        fontSize: "0.75rem",
        px: 2,
        py: 1,
      },
    },
    md: {
      item: {
        fontSize: "0.875rem",
        px: 3,
        py: 2,
      },
    },
  },
  variants: {
    bold: {
      item: {
        fontWeight: "bold",
      },
      menu: {
        boxShadow: "xl",
      },
    },
    colorful: {
      item: {
        color: "orange.600",
      },
      menu: {
        bg: "orange.100",
      },
    },
  },
  defaultProps: {
    size: "md",
  },
});

const theme = extendTheme({
  fonts: {
    body: `'Nunito', sans-serif`,
    heading: `'Yeseva One', sans-serif`,
    //body: `'Raleway', sans-serif`,
  },
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  colors: {
    background: {
      sheen: "#8A8A83",
      gunmetal: "#3E3E3B",
      mediumDark: "#1C1C1A",
      dark: "#333330",
    },
    highlight: {
      purple: "#7928CA",
      pink: "#FF0080",
    },
    accent: {
      pink: "#97144D",
    },
  },
  components: {
    Button,
    CardStyle,
    Link,
    Tabs: tabsTheme,
    Drawer: drawerTheme,
    Text: {
      baseStyle: {
        fontSize: "18px",
      },
    },
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: "#000016",
        color: "white",
      },
    }),
  },
});

export default theme;
