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
import ProfilePicture from "Main/components/about-me/ProfilePicture";
import SkillsSection from "Main/components/mainpage-sections/SkillsSection";
import AboutMe from "Main/components/mainpage-sections/AboutMeSection";
import EducationSection from "Main/components/mainpage-sections/EducationSection";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { useState } from "react";
import PostPreview from "Main/components/post-components/PostPreview";
import NavBar from "Main/components/page-layout/NavBar";
import CollapsibleSection from "Main/components/page-layout/CollapsibleSection";
import RecentPosts from "Main/components/mainpage-sections/RecentPosts";
import GavinLauHeader from "Main/components/about-me/GavinLauHeader";
const inter = Inter({ subsets: ["latin"] });

type Props = {
  allPosts: Post[];
};

const mainNavBarContents = [
  {
    name: "About Me",
    href: "#about-me",
  },
  { name: "Skills", href: "#technical-skills" },
  { name: "Projects", href: "/projects" },

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
      <GavinLauHeader />
      <Box
        padding={isMobile ? 5 : 10}
        pt={5}
        //</>bg={"background.mediumDark"}
      >
        <Spacer h={isMobile ? 5 : 15} />
        <AboutMe />
        <Spacer h={isMobile ? 5 : 15} />
        <SkillsSection />
        <Spacer h={isMobile ? 5 : 15} />
        <EducationSection />
      </Box>
      <RecentPosts
        posts={allPosts.filter((p) => p.visibility === "public")}
        columns={2}
      />
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
