import { Badge, Box, Image, Heading, HStack, Spacer, Text, Divider, SimpleGrid, GridItem, Stack, Link } from "@chakra-ui/react"
import { motion } from "framer-motion"
import useCheckMobileScreen from "Main/hooks/useCheckMobileScreen"
import { useState } from "react"
import EducationItem from "../EducationItem"
import NextLink from "next/link"
import SlideInSection from "../SlideInSection"
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
        <Heading
          id="about-me"
          textAlign={'center'}>About Me 🦾</Heading>
        <HStack>
          <Spacer /><Badge>{collapsed ? "Expand" : "Collapse"}</Badge><Spacer />
        </HStack>
      </Box>
      <SlideInSection direction="right">
        {collapsed ? <Divider /> :
          <Box>
            <Box
              as={motion.div}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              <Text>
                I grew up in Calgary, Alberta and did my <Link textDecoration={'underline'}
                  textDecorationColor='teal'
                  _selected={{
                    textDecorationColor: 'teal'
                  }}
                  as={NextLink} href="#education">BSc. majoring in Neuroscience</Link>  at the University of Calgary.
                <br />
                <br />
                In 2019, I moved to Hong Kong to attend med school. If you don&#39;t know what happened in the next three years 😷, I truly envy you, but ultimately, I was forced to make the decision to leave Hong Kong and the medicine, and pursue programming, a passion of mine that had always been placed on the backburner.
                <br />
                <br />
                I&#39;ve always had a deep passion for video games, science and design. More recently, my interest in video games has led me to focus heavily on applying the principles of interactivity, engagment and design to data science and programming.
                <br />
                <br />
                Currently, I am finishing up my <Link textDecoration={'underline'}
                  textDecorationColor='teal'
                  _selected={{
                    textDecorationColor: 'teal'
                  }}
                  as={NextLink} href="#education">Master of Data Science and Analytics</Link> at the University of Calgary.
                <br />
                <br />
                I would describe myself as creative and curious, but above all, I pride myself on being personable and adaptable.
              </Text>
              <br />
              <HStack justifyContent={'center'}>
                {isMobile ? <></> : <Text wordBreak={'normal'}>
                  Oh, and I like rock climbing.
                </Text>}
                <Image
                  w={400}
                  borderRadius={50}
                  alt="Gavin climbing Shadow of Mountain (8b)" src="/photos/climbing-shadow-of-mountain.jpg" />
              </HStack>
              {isMobile ? <Text wordBreak={'normal'}>
                Oh, and I like rock climbing.
              </Text> : <></>}

            </Box>
          </Box>
        }
      </SlideInSection>
    </Box>
  )
}

export default AboutMe