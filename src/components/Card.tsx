import { Box, BoxProps, ChakraProps, defineStyleConfig, ThemingProps, useStyleConfig } from "@chakra-ui/react";

export const CardStyle = defineStyleConfig({
  // The styles all Cards have in common
  baseStyle: {
    display: 'flex',
    flexDirection: 'column',
    background: 'linear-gradient(35deg, #3E3E3B 50%,#1C1C1A) ',
    alignItems: 'center',
    gap: 6,
  },
  // Two variants: rounded and smooth
  variants: {
    rounded: {
      padding: 8,
      borderRadius: 'xl',
      boxShadow: 'xl',
    },
    smooth: {
      padding: 6,
      borderRadius: 'base',
      boxShadow: 'md',
    },
  },
  // The default variant value
  defaultProps: {
    variant: 'smooth',
  },
})

function Card(props: BoxProps & ThemingProps) {
  const { variant, ...rest } = props
  const styles = useStyleConfig('CardStyle')

  // Pass the computed styles into the `__css` prop
  return <Box __css={styles} {...rest} />
}

export default Card
//background: linear-gradient(15deg, #3f87a6, #ebf8e1, #f69d3c);