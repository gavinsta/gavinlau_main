import {
  Badge,
  Box,
  BoxProps,
  Center,
  Collapse,
  Divider,
  GridItem,
  Heading,
  HStack,
  SimpleGrid,
  Spacer,
  Stack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import useCheckMobileScreen from "Main/hooks/useCheckMobileScreen";
import { useState } from "react";
import EducationItem from "../EducationItem";
import SlideInSection from "../SlideInSection";
interface CollapsibleSectionProps extends BoxProps {
  title: string;
  id: string;
}
export default function CollapsibleSection(props: CollapsibleSectionProps) {
  const isMobile = useCheckMobileScreen();
  const [collapsed, setCollapsed] = useState(false);
  const { title } = props;
  return (
    <Box
      id={props.id}
      padding={isMobile ? 5 : props.padding}
      pt={props.pt}
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      //@ts-ignore
      transition={{ delay: 0.5 }}
    >
      <Box
        onClick={() => {
          setCollapsed(!collapsed);
        }}
        style={{ transition: "all 0.3s ease-in-out" }}
        _hover={{
          cursor: "pointer",
          color: "highlight.pink",
          transition: "all 0.1s ease-in-out",
        }}
      >
        <Heading textAlign={"center"}>{title}</Heading>
        <HStack>
          <Spacer />
          <Badge>{collapsed ? "Expand" : "Collapse"}</Badge>
          <Spacer />
        </HStack>
        <Divider />
      </Box>
      <SlideInSection direction="right">
        <Collapse in={!collapsed} animateOpacity>
          {props.children}
        </Collapse>
      </SlideInSection>

      {collapsed ? (
        <> </>
      ) : (
        <>
          {/* <Divider /> */}

          <Badge
            onClick={() => {
              setCollapsed(!collapsed);
            }}
            _hover={{ cursor: "pointer" }}
          >
            {collapsed ? "Expand" : "Collapse"}
          </Badge>
        </>
      )}
    </Box>
  );
}
