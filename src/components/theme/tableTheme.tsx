import { tableAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tableAnatomy.keys)

// define the base component styles
const baseStyle = definePartsStyle({
  // define the part you're going to style
  tr: {
    fontWeight: 'semibold', // change the font weight
    _selected: {
      color: "teal",
      bg: "blackAlpha.400"
    },
    _hover: {
      bg: "teal",
      color: "white"
      //fontSize: 25
    }
  },
  tabpanel: {

  },
})

// export the component theme
export const tabsTheme = defineMultiStyleConfig({ baseStyle })