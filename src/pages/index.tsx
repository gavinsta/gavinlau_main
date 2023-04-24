
import { Inter } from '@next/font/google'
import NextLink from 'next/link'
import {
  Heading, GridItem, Box, Text, HStack, Spacer, Stack, SimpleGrid, IconButton, Link, ButtonGroup
} from '@chakra-ui/react'
import { motion } from 'framer-motion';
import useCheckMobileScreen from 'Main/hooks/useCheckMobileScreen'
import Post from 'Main/interfaces/post'
import { getAllPosts } from 'Main/lib/api'
import ProfilePicture from 'Main/components/ProfilePicture'
import SkillsSection from 'Main/components/mainpage-sections/SkillsSection'
import ProjectsSection from 'Main/components/mainpage-sections/ProjectsSection'
import AboutMe from 'Main/components/mainpage-sections/AboutMeSection'
import EducationSection from 'Main/components/mainpage-sections/EducationSection'
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai'
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { useState } from 'react';
const inter = Inter({ subsets: ['latin'] })

type Props = {
  allPosts: Post[]
}

function IndexMenu() {
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
  return (<>
    <HStack
      position={'fixed'}
      padding={1}
      pl={2}
      pr={10}
      boxShadow={'2xl'}
      as={motion.div}
      initial={collapsed ? show.bar : hide.bar}
      animate={collapsed ? hide.bar : show.bar}
      width={'100%'}
      top={0}
      bg={`#3E3E3BB6`}
      _hover={{
        background: `linear-gradient(35deg, #3E3E3B 50%,#1C1C1A)`
      }}
      zIndex='sticky'>
      <IconButton
        borderColor={""}
        borderWidth=""
        aria-label='expand menu'
        onClick={() => {
          setCollapsed(true)
        }}
        icon={<AiOutlineMenuFold />} />
      {/* <Link as={NextLink} href="/">Home</Link> */}
      <Spacer />
      <SimpleGrid columns={isMobile ? 1 : 5} spacingX={10}>

        <GridItem>
          <Link as={NextLink} href="#about-me">◾️ About Me</Link>
        </GridItem>
        <GridItem>
          <Link as={NextLink} href="#education">◾️ Education</Link>

        </GridItem>
        <GridItem>
          <Link as={NextLink} href="#technical-skills">◾️ Skills & Technologies</Link>

        </GridItem>
        <GridItem>
          <Link as={NextLink} href="#projects">◾️ Projects</Link>

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
  </>)
}
/**Component that has all of my professional links (github, linkedin, etc.) */
function Links() {

  return <ButtonGroup>
    <Link href="https://github.com/gavinsta" p={1}>


      <IconButton aria-label='Link to Github profile' icon={<SiGithub />} />
    </Link>
    <Link p={1} href="https://www.linkedin.com/in/data-scientist-programmer-gamedev-gavin-lau/">
      <IconButton aria-label='Link to LinkedIn profile' icon={<SiLinkedin />} />
    </Link>

  </ButtonGroup>
}
export default function Index({ allPosts }: Props) {
  const isMobile = useCheckMobileScreen()

  console.log(`HOW MANY POSTS?!?! ${allPosts.length}`)
  console.log(`CWD is ${process.cwd()}`)
  return (
    <>
      <IndexMenu />
      <Box

        padding={isMobile ? 5 : 40}
        pt={5}
      //</>bg={"background.mediumDark"}
      >
        <Box
          padding={isMobile ? 10 : 20}
          borderRadius={"15"}
          bg={`linear-gradient(35deg, #3E3E3BB6 50%,#97144DB3), url('/photos/hongkong-on-boat.jpg') `}
          //backgroundImage={'/photos/hongkong-on-boat.jpg'}
          //linear-gradient(35deg, #3E3E3BB6 50%,#1C1C1AB3)
          backgroundSize="cover"
          backgroundPosition={'center'}
        >
          {isMobile ? <Stack
            w={"100%"}
            align="center"
            as={motion.div}
            initial={{ x: 1000 }}
            animate={{ x: 0, transition: { duration: 1, bounce: 0.3, type: 'spring' } }}

          >
            <ProfilePicture />
            <Heading fontSize={40}>Gavin Lau</Heading>
            <Text textAlign={'center'}>Data Scientist and Programmer based in Calgary.</Text>
            <Links />
          </Stack> :
            <HStack>
              <HStack
                as={motion.div}
                initial={{ x: 1000 }}
                animate={{ x: 0, transition: { duration: 1, bounce: 0.3, type: 'spring' } }}
              >
                <ProfilePicture />
                <Spacer w={5} />
                <Stack>
                  <Heading fontSize={60}>Gavin Lau</Heading>
                  <Box
                    as={motion.div}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 1, duration: 1, bounce: 0.3, type: 'spring' } }}
                  >
                    <Text>Data Scientist and Programmer based in Calgary.</Text>
                  </Box>
                  <Links />

                </Stack>

              </HStack>
            </HStack>
          }
        </Box>
        <Spacer h={isMobile ? 5 : 15} />
        <SkillsSection />
        <Spacer h={isMobile ? 5 : 15} />
        <ProjectsSection />
        <Spacer h={isMobile ? 5 : 15} />
        <AboutMe />
        <Spacer h={isMobile ? 5 : 15} />
        <EducationSection />
      </Box>




      {/* {allPosts.map((post) => (
        <PostPreview
          key={post.slug}
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
          author={post.author}
          slug={post.slug}
          excerpt={post.excerpt}
        />
      ))} */}
    </>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}