import { Box, Heading, Link, Text } from "@chakra-ui/react";
import Card from "../Card";
import NextLink from "next/link";
import { useEffect, useState } from "react";
interface WebProjectDisplayProps {
  webProject: WebProject;
}
export interface WebProject {
  display: "true" | "false";
  title: string;
  description: string;
  url: string;
}
export default function WebProjectDisplay(props: WebProjectDisplayProps) {
  const { title, description, url } = props.webProject;
  return (
    <Card h={"500px"}>
      <Link as={NextLink} href={url}>
        <Heading>{title}</Heading>
      </Link>
      <Text>{description}</Text>
      <Box overflow={"scroll"} w="100%" h="500px">
        <iframe
          width="100%"
          height="1000"
          style={{ overflowY: "scroll" }}
          src={url}
        ></iframe>
      </Box>
    </Card>
  );
}
