import { drawerAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(drawerAnatomy.keys)



// define the base component styles
const baseStyle = definePartsStyle({
  // define the part you're going to style
  dialog: {
    bg: "blackAlpha.600"
  },
  header: {
    fontWeight: 'semibold', // change the font weight
    _selected: {
      color: "highlight.pink",
      bg: "blackAlpha.400"
    },

  },
  closeButton: {
    _hover: {
      bg: "accent.pink",
      color: "white"
      //fontSize: 25
    }
  },
  overlay: {
    bg: "blackAlpha.400"
  },
  drawer: {
    bg: "blackAlpha.400"
  }

})

// export the component theme
export const drawerTheme = defineMultiStyleConfig({ baseStyle })