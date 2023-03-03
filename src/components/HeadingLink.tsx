import { Heading, HeadingProps, HStack, Icon, keyframes } from "@chakra-ui/react"
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs"
const HeadingLink = (props: HeadingProps & { link?: string }) => {
  const { link, children } = props;
  return (<Link href={link ? link : ""}>
    <HStack
      as={motion.div}>
      <Heading>{children}</Heading>
      <Icon as={BsArrowRight} fontSize={30}
        _hover={{
          transform: `translate(10px,0px)`
        }}
        transition={`transform ease 300ms;`} />
    </HStack>

  </Link>)
}


const keyframe_dot1 = keyframes`
  0% {
    transform: scale(1, 1);
  }
  25% {
    transform: scale(1, 1.5);
  }
  50% {
    transform: scale(1, 0.67);
  }
  75% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
`;
export default HeadingLink