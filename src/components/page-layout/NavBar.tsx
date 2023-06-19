import {
  HStack,
  IconButton,
  Spacer,
  SimpleGrid,
  GridItem,
  Link,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import useCheckMobileScreen from "Main/hooks/useCheckMobileScreen";
import useWindowDimensions from "Main/hooks/useWindowDimensions";
import NextLink from "next/link";
import { useState } from "react";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";

interface NavBarProps {
  links: { name: string; href: string }[];
}
export default function NavBar(props: NavBarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const isMobile = useCheckMobileScreen();
  const { width } = useWindowDimensions();
  const hide = {
    button: {
      y: -500,
      transition: {
        duration: 0.5,
      },
    },
    bar: {
      y: -500,
      transition: {
        duration: 0.5,
      },
    },
  };
  const show = {
    button: {
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
    bar: {
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <>
      <HStack
        position={"fixed"}
        padding={1}
        pl={2}
        pr={10}
        boxShadow={"2xl"}
        as={motion.div}
        initial={collapsed ? show.bar : hide.bar}
        animate={collapsed ? hide.bar : show.bar}
        width={"100%"}
        top={0}
        bg={`#3E3E3BB6`}
        _hover={{
          background: `linear-gradient(35deg, #3E3E3B 50%,#1C1C1A)`,
        }}
        zIndex="sticky"
      >
        <IconButton
          color="white"
          borderColor={"transparent"}
          borderWidth=""
          aria-label="expand menu"
          _hover={{
            borderColor: "transparent",
            color: "highlight.pink",
          }}
          onClick={() => {
            setCollapsed(true);
          }}
          icon={<AiOutlineMenuFold />}
        />

        {/* <Link as={NextLink} href="/">Home</Link> */}
        <SimpleGrid
          columns={isMobile ? 1 : Math.floor(width / 300)}
          spacingX={10}
        >
          {props.links.map((link) => {
            return (
              <GridItem key={link.name}>
                <Link as={NextLink} href={link.href}>
                  ◾️ {link.name}
                </Link>
              </GridItem>
            );
          })}
        </SimpleGrid>
      </HStack>
      <IconButton
        bg="background.gunmetal"
        position={"fixed"}
        top={2}
        left={2}
        as={motion.button}
        initial={collapsed ? hide.button : show.button}
        animate={collapsed ? show.button : hide.button}
        zIndex="sticky"
        aria-label="expand menu"
        onClick={() => {
          setCollapsed(false);
        }}
        icon={<AiOutlineMenuUnfold />}
      />
    </>
  );
}
