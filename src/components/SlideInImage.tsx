import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Box, Image, ImageProps } from "@chakra-ui/react"



const SlideInImage = (props: ImageProps & { direction: "left" | "right" }) => {
  const { direction, alt, src } = props
  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger animation when component is 50% in view
    //triggerOnce: true, // Only trigger animation once
  });
  const animationVariants = {
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, x: direction == "left" ? -500 : 500, }
  };
  return (
    <Box
      as={motion.div}
      initial={"hidden"}
      variants={animationVariants}
      ref={ref}
      animate={inView ? "visible" : "hidden"}
    >
      <Image alt={alt} src={src} />
    </Box>
  );
};

export default SlideInImage