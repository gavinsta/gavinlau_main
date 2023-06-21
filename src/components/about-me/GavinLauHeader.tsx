import {
  Box,
  Stack,
  Heading,
  HStack,
  Spacer,
  Text,
  ButtonGroup,
  IconButton,
  Link,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import useCheckMobileScreen from "Main/hooks/useCheckMobileScreen";
import { SiGithub, SiLinkedin } from "react-icons/si";

import ProfilePicture from "./ProfilePicture";
/**Component that has all of my professional links (github, linkedin, etc.) */
function Links() {
  return (
    <ButtonGroup>
      <Link href="https://github.com/gavinsta" p={1} isExternal>
        <IconButton
          aria-label="Link to Github profile"
          icon={<SiGithub />}
          fontSize={"30px"}
          w="50px"
          h="50px"
        />
      </Link>
      <Link
        isExternal
        p={1}
        href="https://www.linkedin.com/in/data-scientist-programmer-gamedev-gavin-lau/"
      >
        <IconButton
          aria-label="Link to LinkedIn profile"
          icon={<SiLinkedin />}
          fontSize={"30px"}
          w="50px"
          h="50px"
        />
      </Link>
    </ButtonGroup>
  );
}

export default function GavinLauHeader(props: { bgImage?: string }) {
  const isMobile = useCheckMobileScreen();
  return (
    <Box
      padding={isMobile ? 10 : 20}
      borderRadius={"15"}
      bg={
        props.bgImage
          ? `linear-gradient(35deg, #3E3E3BB6 50%,#97144DB3), url('${props.bgImage}') `
          : `linear-gradient(35deg, #3E3E3BB6 50%,#97144DB3), url('/splash/calgary_downtown_cover.jpg') `
      }
      //backgroundImage={'/photos/hongkong-on-boat.jpg'}
      //linear-gradient(35deg, #3E3E3BB6 50%,#1C1C1AB3)
      backgroundSize="cover"
      backgroundPosition={"center"}
    >
      {isMobile ? (
        <Stack
          w={"100%"}
          align="center"
          as={motion.div}
          initial={{ x: 1000 }}
          animate={{
            x: 0,
            transition: { duration: 1, bounce: 0.3, type: "spring" },
          }}
        >
          <ProfilePicture />
          <Heading fontSize={40}>Gavin Lau</Heading>
          <Text textAlign={"center"}>
            Data Scientist, Programmer and Game Developer based in Calgary.
          </Text>
          <Links />
        </Stack>
      ) : (
        <HStack>
          <HStack
            as={motion.div}
            initial={{ x: 1000 }}
            animate={{
              x: 0,
              transition: { duration: 1, bounce: 0.3, type: "spring" },
            }}
          >
            <ProfilePicture />
            <Spacer w={5} />
            <Stack>
              <Heading fontSize={60}>Gavin Lau</Heading>
              <Box
                as={motion.div}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: {
                    delay: 1,
                    duration: 1,
                    bounce: 0.3,
                    type: "spring",
                  },
                }}
              >
                <Text>
                  Data Scientist, Programmer and Game Developer based in
                  Calgary.
                </Text>
              </Box>
              <Links />
            </Stack>
          </HStack>
        </HStack>
      )}
    </Box>
  );
}
