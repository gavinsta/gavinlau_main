import {
  Container,
  List,
  ListItem,
  ListIcon,
  BoxProps,
  ButtonProps,
  Button,
  Heading,
  HStack,
  Icon,
  Stack,
  Fade,
  Box,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaArrowUp, FaCheckSquare } from "react-icons/fa";

interface ExpandableListProps extends BoxProps {
  listName: string;
  startExpanded?: boolean;
  iconsWhenCollapsed?: React.ReactNode[];
}
const ExpandableList = (props: ExpandableListProps) => {
  const { listName, children, startExpanded, iconsWhenCollapsed } = props;
  const [collapsed, setCollapsed] = useState(!startExpanded);
  return (
    <Stack overflow={"hidden"}>
      <Button
        h={collapsed ? "200px" : "80px"}
        style={{ transition: "height 0.2s ease-in-out" }}
        onClick={() => {
          setCollapsed(!collapsed);
        }}
      >
        <Stack>
          <HStack>
            <Icon
              as={FaArrowUp}
              style={{
                rotate: collapsed ? "-180deg" : "0deg",
                transition: "rotate 0.5s",
              }}
            />
            <Heading textTransform={"none"} fontSize={24} fontWeight={"bold"}>
              {listName}
            </Heading>
          </HStack>
          <HStack
            justifyContent={"center"}
            fontSize={30}
            as={motion.div}
            animate={{
              opacity: collapsed ? 1 : 0,
              height: collapsed ? "100px" : "0px",
            }}
            //@ts-ignore
            transition="0.1s linear"
          >
            {iconsWhenCollapsed}
          </HStack>
        </Stack>
      </Button>
      <Box
        as={motion.div}
        animate={{ opacity: collapsed ? 0 : 1 }}
        transition="0.2s linear"
      >
        <Container pl={10}>
          <List listStyleType={"disc"}>{children}</List>
        </Container>
      </Box>
    </Stack>
  );
};

export default ExpandableList;
