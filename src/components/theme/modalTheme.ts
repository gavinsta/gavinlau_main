import { modalAnatomy as parts } from "@chakra-ui/anatomy";
import {
  createMultiStyleConfigHelpers,
  defineStyle,
} from "@chakra-ui/styled-system";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const xxl = defineStyle({
  px: "6",
  py: "2",
  fontSize: "xl",
});

const sizes = {
  xxl: definePartsStyle({ dialog: xxl }),
};

export const modalTheme = defineMultiStyleConfig({
  sizes,
});
