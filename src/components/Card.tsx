import { Box, BoxProps, ChakraProps, defineStyleConfig, ThemingProps, transition, useStyleConfig } from "@chakra-ui/react";

export const CardStyle = defineStyleConfig({
  // The styles all Cards have in common
  baseStyle: {
    display: 'flex',
    flexDirection: 'column',
    background: 'black',//'linear-gradient(35deg, #3E3E3B 50%,#1C1C1A) ',
    alignItems: 'center',
    gap: 6,
    transition: 'transform 0.3s ease-in-out',
    _hover: {
      boxShadow: '2xl',
      transition: 'transform 0.2s ease-in-out',
    }
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