
import { Inter } from '@next/font/google'
import styles from 'Main/styles/Home.module.css'
//import Image from 'next/image'
import {
  Heading, Grid, GridItem, Button, Box, Container, Image, keyframes,
  Tabs, TabList, TabPanels, Tab, TabPanel, Text, HStack, Spacer, Stack, SimpleGrid, ListItem
} from '@chakra-ui/react'
import HeadingLink from 'Main/components/HeadingLink'
import Card from 'Main/components/Card'
import LoadingDots from 'Main/components/LoadingDots'
import { motion } from 'framer-motion';
import SlideInImage from 'Main/components/SlideInImage'
import useCheckMobileScreen from 'Main/hooks/useCheckMobileScreen'
import Post from 'Main/interfaces/post'
//import skillsTextPath from 'Main/components/skills.md'
import { useEffect, useState } from 'react'
import { getAllPosts } from 'Main/lib/api'
import PostPreview from 'Main/components/PostPreview'
import ProfilePicture from 'Main/components/ProfilePicture'
import SlideInSection from 'Main/components/SlideInSection'
import ExpandableList from 'Main/components/ExpandableList'
import SkillsSection from 'Main/components/mainpage-components/SkillsSection'
import ProjectsSection from 'Main/components/mainpage-components/ProjectsSection'
import AboutMe from 'Main/components/mainpage-components/AboutMeSection'
import EducationSection from 'Main/components/mainpage-components/EducationSection'
const inter = Inter({ subsets: ['latin'] })

type Props = {
  allPosts: Post[]
}
export default function Index({ allPosts }: Props) {
  const isMobile = useCheckMobileScreen()

  console.log(`HOW MANY POSTS?!?! ${allPosts.length}`)
  console.log(`CWD is ${process.cwd()}`)
  return (
    <>
      <Box

        padding={isMobile ? 5 : 40}
        pt={5}
      //</>bg={"background.mediumDark"}
      >
        <Box
          padding={isMobile ? 10 : 20}
          borderRadius={"15"}
          bg={'linear-gradient(35deg, #3E3E3B 50%,#1C1C1A) '}
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
            <Text textAlign={'center'}>Data Science, Programming and Neuroscience</Text>
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
                    <Text>Data Science, Programming and Neuroscience</Text>
                  </Box>
                </Stack>

              </HStack>

            </HStack>
          }
        </Box>
        <Spacer h={isMobile ? 5 : 15} />
        <AboutMe />
        <Spacer h={isMobile ? 5 : 15} />
        <EducationSection />
        <Spacer h={isMobile ? 5 : 15} />
        <SkillsSection />
        <Spacer h={isMobile ? 5 : 15} />
        <ProjectsSection />
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