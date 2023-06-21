import {
  Box,
  GridItem,
  Heading,
  HStack,
  Img,
  Link,
  Tag,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";
import Card from "../Card";
import { motion } from "framer-motion";
export interface DatascienceProject {
  display: "true" | "false";
  title: string;
  description: string;
  url: string;
  host?: string;
  tags: string[];
  iframe?: string;
  cover?: string;
}
const bgMotion = {
  rest: {
    opacity: 0.5,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeIn",
    },
  },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeOut",
    },
  },
};
interface DatascienceProjectPreviewProps {
  project: DatascienceProject;
}
export default function DatascienceProjectPreview(
  props: DatascienceProjectPreviewProps
) {
  const { project } = props;
  return (
    <GridItem
      rowSpan={project.iframe ? 2 : 1}
      key={project.title}
      as={motion.div}
      whileHover="hover"
      initial="rest"
      animate="rest"
    >
      <Card
        borderRadius={"20px"}
        {...(project.cover
          ? {
              backgroundImage: `url(${project.cover})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top",
            }
          : {})}
      >
        <Box
          as={motion.div}
          variants={bgMotion}
          bgColor={"blackAlpha.900"}
          borderRadius={"20px"}
          p={4}
        >
          <HStack>
            {project.tags &&
              project.tags.map((t) => (
                <Tag key={project.tags.indexOf(t)}>{t}</Tag>
              ))}
          </HStack>
          <Link as={NextLink} href={project.url} isExternal>
            {project.host ? <Text>on {project.host}</Text> : <></>}
            <Heading>{project.title}</Heading>
          </Link>
          <Text>{project.description}</Text>
          <Text textAlign={"left"} fontSize="sm">
            Click the link to see more.
          </Text>
        </Box>

        {project.iframe ? (
          <Box p={0} bg="white" width="100%">
            <iframe src={project.iframe} width="100%" height="300px"></iframe>
          </Box>
        ) : (
          <></>
        )}
      </Card>
    </GridItem>
  );
}
