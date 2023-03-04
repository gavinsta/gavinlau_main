import { Box, Container, GridItem, Heading, Image, HStack, IconButton, Link, SimpleGrid, Stack, Text, Spacer } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import NextLink from "next/link"
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from 'react-icons/ai'
import useCheckMobileScreen from "Main/hooks/useCheckMobileScreen";
import NextImage from "next/image";
import Card from "Main/components/Card";
export default function DataScienceProjects() {
  const [collapsed, setCollapsed] = useState(false)
  const isMobile = useCheckMobileScreen()
  const hide = {
    button: {
      y: -500,
      transition: {
        duration: 0.5,
      }
    },
    bar: {
      y: -500,
      transition: {
        duration: 0.5,
      }
    }

  }
  const show = {
    button: {
      y: 0,
      transition: {
        duration: 0.5,
      }
    },
    bar: {
      y: 0,
      transition: {
        duration: 0.5,
      }
    }

  }
  return (
    <Box >

      <HStack position={'fixed'}
        padding={1}
        pl={2}
        pr={10}
        boxShadow={'2xl'}
        as={motion.div}
        initial={collapsed ? show.bar : hide.bar}
        animate={collapsed ? hide.bar : show.bar}
        width={'100%'}
        top={0}
        background={'background.gunmetal'}
        zIndex='sticky'>
        <IconButton
          borderColor={""}
          borderWidth=""
          aria-label='expand menu'
          onClick={() => {
            setCollapsed(true)
          }}
          icon={<AiOutlineMenuFold />} />
        <Link as={NextLink} href="/">Home</Link>
        <Spacer />
        <SimpleGrid columns={isMobile ? 1 : 2} spacingX={2}>

          <GridItem>
            <Link as={NextLink} href="#what-makes-a-good-video-game">◾️ What makes a good videogame</Link>
          </GridItem>
          <GridItem>
            <Link as={NextLink} href="#tableau-work">◾️ Tableau</Link>

          </GridItem>
        </SimpleGrid>


      </HStack>
      <IconButton
        bg='background.gunmetal'
        position={'fixed'}
        top={2}
        left={2}
        as={motion.button}
        initial={collapsed ? hide.button : show.button}
        animate={collapsed ? show.button : hide.button}
        zIndex='sticky'
        aria-label='expand menu'
        onClick={() => {
          setCollapsed(false)
        }}
        icon={<AiOutlineMenuUnfold />} />
      <Box pl={10} pr={10}>
        <Container pt={10}
          pb={10}>
          <Heading>Data science projects</Heading>
          <Text>Visualizations, Modelling and Articles</Text>
        </Container>
        <Heading id="what-makes-a-good-video-game">Articles on Observable</Heading>
        <Box bg={'white'}>
          <iframe width="100%" height="500"
            src="https://observablehq.com/embed/@gavinsta/what-makes-a-good-video-game?cell=*"></iframe>
        </Box>
        <Spacer h={20} />
        <Heading id="tableau-work">Tableau</Heading>
        <Text >Interactive embeds to come.</Text>
        <Box>
          <SimpleGrid spacing={5}>
            <GridItem>
              <Card>
                <Text fontSize={30}>AirBnB Data Exploration</Text>
                <Image alt='screenshot of tableau dashboard exploring airbnb trends' src={"/screenshots/airbnb_datathon.png"} width={"100%"} />

              </Card>
            </GridItem>
            <GridItem>
              <Card>
                <Text fontSize={30}>Kickstarter Data Exploration</Text>
                <Image alt='screenshot of tableau dashboard exploring kickstarter trends' src={"/screenshots/kickstarter_datathon.png"} width={"100%"} />

              </Card>
            </GridItem>
          </SimpleGrid>
        </Box>
      </Box>

    </Box >)
}