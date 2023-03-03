import { Badge, Box, Image, Heading, HStack, Spacer, Text, Divider, SimpleGrid, GridItem, Stack } from "@chakra-ui/react"
import { motion } from "framer-motion"
import useCheckMobileScreen from "Main/hooks/useCheckMobileScreen"
import { useState } from "react"
import EducationItem from "../EducationItem"

const AboutMe = () => {
  const isMobile = useCheckMobileScreen()
  const [collapsed, setCollapsed] = useState(false)
  return (
    <Box
      padding={isMobile ? 5 : 10}
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Box onClick={() => {
        setCollapsed(!collapsed)
      }}>
        <Heading textAlign={'center'}>About Me 🦾</Heading>
        <HStack>
          <Spacer /><Badge>{collapsed ? "Expand" : "Collapse"}</Badge><Spacer />
        </HStack>
      </Box>
      {collapsed ? <Divider /> :
        <Box>
          <Box
            as={motion.div}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <HStack justifyContent={'center'}>
              {isMobile ? <></> : <Text wordBreak={'normal'}>
                Oh, and I like rock climbing.
              </Text>}
              <Image
                w={400}
                borderRadius={50}
                alt="Climbing Shadow of Mountain (8b)" src="/photos/climbing-shadow-of-mountain.jpg" />
            </HStack>
            {isMobile ? <Text wordBreak={'normal'}>
              Oh, and I like rock climbing.
            </Text> : <></>}

          </Box>
        </Box>
      }


    </Box>
  )
}

export default AboutMe