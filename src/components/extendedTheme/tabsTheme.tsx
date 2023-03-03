import { tabsAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tabsAnatomy.keys)

// define the base component styles
const baseStyle = definePartsStyle({
  // define the part you're going to style
  tab: {
    fontWeight: 'semibold', // change the font weight
    _selected: {
      color: "highlight.pink",
      bg: "blackAlpha.400"
    },
    _hover: {
      bg: "accent.pink",
      color: "white"
      //fontSize: 25
    }
  },
  tabpanel: {

  },
})

// export the component theme
export const tabsTheme = defineMultiStyleConfig({ baseStyle })