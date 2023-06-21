import {
  Badge,
  Box,
  Image,
  Heading,
  HStack,
  Spacer,
  Text,
  Divider,
  SimpleGrid,
  GridItem,
  Stack,
  Link,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import useCheckMobileScreen from "Main/hooks/useCheckMobileScreen";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import remarkSlug from "remark-slug";
import remarkImages from "remark-images";

import CollapsibleSection from "Main/components/page-layout/CollapsibleSection";

const content = `## Hi, I'm Gavin \n
Thanks for stopping by! 

I'm a Datascientist and Programmer, currenty working at [Andromeda Medical Imaging](https://andromedamedicalimaging.com) as a Technical Lead.

I mostly work as a software developer and a datascientist, but I am also working on my own [indie game](projects), which consumes most of my spare time.

I like to make music, play video games, and rock climb (I know, sooo original).

## What is this site?

Before I made this site, I had so many different interests and experiences, but no where to share and store them all in an organized fashion. This page is really just a glorified list of links that connect all my various activities.\n

I also figure this is a great place for me to experiment with new technologies, and show my love for design, so expect this site to change a lot over time.
`;

const AboutMe = () => {
  const isMobile = useCheckMobileScreen();
  return (
    <CollapsibleSection title="About Me 🦾" id="about-me">
      <SimpleGrid columns={isMobile ? 1 : 3} fontSize="lg" spacing={5}>
        <GridItem>
          <Stack justifyContent={"center"}>
            <Image
              w={400}
              borderRadius={50}
              alt="Hanging out with an alpaca."
              src="/photos/gavin-lau-profile-with-an-alpaca.jpeg"
            />
            <Text wordBreak={"normal"}></Text>
          </Stack>
        </GridItem>
        <GridItem colSpan={isMobile ? 1 : 2}>
          <ReactMarkdown
            className="md"
            rehypePlugins={[rehypeHighlight]}
            remarkPlugins={[remarkGfm, remarkSlug, remarkImages]}
          >
            {content}
          </ReactMarkdown>
        </GridItem>
        <GridItem>
          <Stack justifyContent={"center"}>
            <Image
              w={400}
              borderRadius={50}
              alt="Gavin climbing Shadow of Mountain (8b)"
              src="/photos/climbing-shadow-of-mountain.jpg"
            />
            <Text wordBreak={"normal"}>
              Shadow of the Mountain: a beautiful 8a+ on Lamma Island in Hong
              Kong.
            </Text>
          </Stack>
        </GridItem>
      </SimpleGrid>
    </CollapsibleSection>
  );
};
export default AboutMe;
