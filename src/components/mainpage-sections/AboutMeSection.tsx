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

import SlideInSection from "../SlideInSection";
import CollapsibleSection from "../page-layout/CollapsibleSection";

const content = `I made this site because I have so many different interests and I wanted to have a place to share them. I mostly work as a software developer and a datascientist, but I am also working on my own [indie game](projects), which consumes most of my spare time.

I like to make music, play video games, and rock climb (I know, sooo original).
`;

const AboutMe = () => {
  const isMobile = useCheckMobileScreen();
  return (
    <CollapsibleSection title="About Me 🦾" id="about-me">
      <SimpleGrid columns={isMobile ? 1 : 3} fontSize="lg" spacing={5}>
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
              Here I am climbing a beautiful 8a+ on Lamma Island in Hong Kong.
            </Text>
          </Stack>
        </GridItem>
      </SimpleGrid>
    </CollapsibleSection>
  );
};
export default AboutMe;
