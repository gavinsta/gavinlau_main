import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Box, Image, BoxProps } from "@chakra-ui/react";
import useCheckMobileScreen from "Main/hooks/useCheckMobileScreen";

const SlideInSection = (
  props: BoxProps & {
    /**Direction the section ENTERS from */
    direction: "left" | "right";
  }
) => {
  const isMobile = useCheckMobileScreen();
  const { direction, children } = props;
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger animation when component is 50% in view
    triggerOnce: true, // Only trigger animation once
  });
  const animationVariants = {
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    hidden: {
      opacity: 0,
      x: direction == "left" ? -500 : 500,
      transition: { duration: 0.5 },
    },
  };
  return (
    <Box
      as={motion.div}
      initial={isMobile ? "visible" : "hidden"}
      variants={animationVariants}
      ref={ref}
      animate={inView || isMobile ? "visible" : "hidden"}
    >
      {children}
    </Box>
  );
};

export default SlideInSection;
