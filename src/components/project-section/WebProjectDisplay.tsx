import {
  Box,
  Heading,
  HStack,
  Link,
  Image,
  Text,
  Switch,
  useBoolean,
  Stack,
} from "@chakra-ui/react";
import Card from "../Card";
import NextLink from "next/link";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import remarkImages from "remark-images";
import remarkSlug from "remark-slug";
interface WebProjectDisplayProps {
  webProject: WebProject;
}
export interface WebProject {
  display: "true" | "false";
  title: string;
  description: string;
  url: string;
  screenshot?: string;
}
export default function WebProjectDisplay(props: WebProjectDisplayProps) {
  const { title, description, url, screenshot } = props.webProject;
  const [expand, setExpand] = useBoolean(false);
  return (
    <Card>
      <Link as={NextLink} href={url} isExternal>
        <Heading>{title}</Heading>
      </Link>
      <HStack spacing={5}>
        <ReactMarkdown
          className="md"
          rehypePlugins={[rehypeHighlight]}
          remarkPlugins={[remarkGfm, remarkSlug, remarkImages]}
        >
          {description}
        </ReactMarkdown>
        {/* <Text>{description}</Text> */}
        {screenshot ? (
          <></>
        ) : (
          <Stack>
            <Text>Expand</Text>
            <Switch
              colorScheme={"teal"}
              isChecked={expand}
              onChange={() => {
                setExpand.toggle();
              }}
            />
          </Stack>
        )}
      </HStack>
      <Box
        as={motion.div}
        overflow={"scroll"}
        w="100%"
        animate={
          expand
            ? { height: "1000px", transition: { duration: 0.3 } }
            : { height: "500px", transition: { duration: 0.3 } }
        }
      >
        {screenshot ? (
          <Image src={screenshot} alt={`View of ${title}`} />
        ) : (
          <iframe
            width="100%"
            height="1000"
            style={{ overflowY: "scroll" }}
            src={url}
          ></iframe>
        )}
      </Box>
    </Card>
  );
}
