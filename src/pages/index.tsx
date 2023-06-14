import { Inter } from "@next/font/google";
import NextLink from "next/link";
import {
  Heading,
  GridItem,
  Box,
  Text,
  HStack,
  Spacer,
  Stack,
  SimpleGrid,
  IconButton,
  Link,
  ButtonGroup,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import useCheckMobileScreen from "Main/hooks/useCheckMobileScreen";
import Post from "Main/interfaces/post";
import { getAllPosts } from "Main/lib/api";
import ProfilePicture from "Main/components/ProfilePicture";
import SkillsSection from "Main/components/mainpage-sections/SkillsSection";
import ProjectsSection from "Main/components/mainpage-sections/ProjectsSection";
import AboutMe from "Main/components/mainpage-sections/AboutMeSection";
import EducationSection from "Main/components/mainpage-sections/EducationSection";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { useState } from "react";
import PostPreview from "Main/components/post-components/PostPreview";
import NavBar from "Main/components/page-layout/NavBar";
import CollapsibleSection from "Main/components/page-layout/CollapsibleSection";
import RecentPosts from "Main/components/post-components/RecentPosts";
const inter = Inter({ subsets: ["latin"] });

type Props = {
  allPosts: Post[];
};

/**Component that has all of my professional links (github, linkedin, etc.) */
function Links() {
  return (
    <ButtonGroup>
      <Link href="https://github.com/gavinsta" p={1}>
        <IconButton aria-label="Link to Github profile" icon={<SiGithub />} />
      </Link>
      <Link
        p={1}
        href="https://www.linkedin.com/in/data-scientist-programmer-gamedev-gavin-lau/"
      >
        <IconButton
          aria-label="Link to LinkedIn profile"
          icon={<SiLinkedin />}
        />
      </Link>
    </ButtonGroup>
  );
}

const mainNavBarContents = [
  { name: "Skills", href: "#technical-skills" },
  { name: "Projects", href: "#projects" },
  {
    name: "About Me",
    href: "#about-me",
  },
  {
    name: "Education",
    href: "#education",
  },
  { name: "Recent Posts", href: "#recent-posts" },
];
export default function Index({ allPosts }: Props) {
  const isMobile = useCheckMobileScreen();

  console.log(`HOW MANY POSTS?!?! ${allPosts.length}`);
  console.log(`CWD is ${process.cwd()}`);
  return (
    <>
      <NavBar links={mainNavBarContents} />
      <Box
        padding={isMobile ? 5 : 10}
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
                Data Scientist and Programmer based in Calgary.
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
                    <Text>Data Scientist and Programmer based in Calgary.</Text>
                  </Box>
                  <Links />
                </Stack>
              </HStack>
            </HStack>
          )}
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
      <RecentPosts posts={allPosts.slice(0, 4)} columns={2} />
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
    "visibility",
  ]);

  return {
    props: { allPosts },
  };
};
