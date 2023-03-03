import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Box, BoxProps, Container, Image, ImageProps } from "@chakra-ui/react"

const PageSection = (props: BoxProps) => {
  const { children } = props;
  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger animation when component is 50% in view
    //triggerOnce: true, // Only trigger animation once
  });
  return (<Box ref={ref}>
    {children}
  </Box>
  )
}

export default PageSection