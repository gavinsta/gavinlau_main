import {
  Box,
  Container,
  GridItem,
  Heading,
  Image,
  HStack,
  IconButton,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Spacer,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import NextLink from "next/link";
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/ai";
import useCheckMobileScreen from "Main/hooks/useCheckMobileScreen";
import NextImage from "next/image";
import Card from "Main/components/Card";
import NavBar from "Main/components/page-layout/NavBar";
import CollapsibleSection from "Main/components/page-layout/CollapsibleSection";
import { text } from "stream/consumers";
import ModalImage from "Main/components/image-components/ModalImage";

function Subsection(props: {
  text: string;
  alt: string;
  src: string;
  order: number;
  title: string;
  id: string;
  url?: string;
  imageTitle?: string;
  additionalContent?: {
    text: string;
    src: string;
    alt: string;
    imageTitle?: string;
  }[];
}) {
  const { order } = props;
  function TextPart() {
    return (
      <GridItem>
        <Text>{props.text}</Text>
        {props.url ? (
          <Link href={props.url} isExternal>
            See: {props.url}
          </Link>
        ) : (
          <></>
        )}
      </GridItem>
    );
  }
  return (
    <CollapsibleSection
      title={props.title}
      id={props.id}
      key={props.order}
      pt={5}
    >
      <Card>
        <SimpleGrid columns={2} spacingX={5}>
          {props.order % 2 == 0 ? <>{TextPart()}</> : <></>}
          <GridItem>
            <ModalImage
              alt={props.alt}
              src={props.src}
              width={"100%"}
              title={props.imageTitle ? props.imageTitle : props.title}
            />
          </GridItem>
          {props.order % 2 == 1 ? <>{TextPart()}</> : <></>}
        </SimpleGrid>

        {props.additionalContent && props.additionalContent.length > 0 ? (
          props.additionalContent.map((content, index) => {
            return (
              <SimpleGrid
                columns={2}
                key={index}
                spacingX={5}
                alignItems="center"
              >
                <GridItem alignItems={"center"}>
                  <Text>{content.text}</Text>
                </GridItem>
                <GridItem>
                  <ModalImage
                    alt={content.alt}
                    src={content.src}
                    width={"100%"}
                    title={
                      content.imageTitle ? content.imageTitle : props.title
                    }
                  />
                </GridItem>
              </SimpleGrid>
            );
          })
        ) : (
          <></>
        )}
      </Card>
    </CollapsibleSection>
  );
}

export default function DataScienceProjects() {
  const [collapsed, setCollapsed] = useState(false);
  const isMobile = useCheckMobileScreen();
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
    <Box>
      <NavBar
        links={[
          {
            name: "Home",
            href: "/",
          },
          {
            name: "Rebrickable Data Exploration",
            href: "/projects/tableau#rebrickable-data-analysis",
          },
          {
            name: "AirBnB Data Exploration",
            href: "/projects/tableau#airbnb-data-exploration",
          },
          {
            name: "Kickstarter Data Exploration",
            href: "/projects/tableau#kickstarter-data-exploration",
          },
        ]}
      />
      <Box pl={10} pr={10}>
        <Container pt={10} pb={10}>
          <Heading>Previous Tableau Projects</Heading>
        </Container>
        <Subsection
          url="https://rebrickable.com/"
          order={1}
          title="Rebrickable Data Exploration: Lego set themes and pieces"
          id="rebrickable-data-analysis"
          alt="A 2-dimensional PCA of the top ten most popular Lego set themes"
          src="/screenshots/lego_datathon_PCA_originalTheme.png"
          text="This datathon was focused around the Rebrickable database; a database dedicated to meticulously cataloging all Lego pieces and sets. For this analysis, we analyzed Lego sets from the top ten most popular 'themes' (such as StarWars, Technic, City, etc.). I used principle component analysis to reduce the dimensionality of the data to two. My teammates performed other analyses on the reduced dataset."
          imageTitle="PCA of the top ten most popular Lego set themes. Each set is colored by its original theme."
          additionalContent={[
            {
              text: "I wanted to explore the prevalence of colors in various Lego sets. Every set has a precise catalog of its pieces, allowing me to find how many pieces of a color are in all the sets. I used K-means clustering to find commonalities between the colors.",
              src: "/screenshots/lego_datathon_Kmeans_PCA2_clustering.png",
              alt: "k-means clustering of the top ten most popular Lego set themes. Each set is colored by its cluster.",
            },
            {
              text: "Afterwards, I wrote a little python script to visualize each cluster. The size of the bubble corresponds to the number of sets that these colors appear in. This is Group 0. The colors appear to be mostly pastel and light, and appear in the lowest number of sets, reflecting the emergence of these types of muted colors in later Lego set themes such as 'Friends.'",
              src: "/screenshots/lego_datathon_grouping0.png",
              alt: "Group 0: The colors appear to be mostly pastel.",
              imageTitle: "Group 0",
            },
            {
              text: "Group 1. This covers the largest variety of colors. They are primarily darker shades of the more popular primary colors.",
              src: "/screenshots/lego_datathon_grouping1.png",
              alt: "Group 1: There are more colors, adn they generally appear to be darker.",
              imageTitle: "Group 1",
            },
            {
              text: "Group 2. This covers the classic Lego colors. As the numbers indicate, these colors appear in a majority of sets and are the most used in Lego.",
              src: "/screenshots/lego_datathon_grouping2.png",
              alt: "Group 2: These are the classic Lego colors.",
              imageTitle: "Group 2",
            },
          ]}
        />
        <Subsection
          order={0}
          title="AirBnB Data Exploration: The Effect of Covid-19 policy on AirBnB Occupancy."
          id="airbnb-data-exploration"
          alt="screenshot of tableau dashboard exploring airbnb trends"
          src="/screenshots/airbnb_datathon.png"
          text="This dashboard explores AirBnB trends before and after the Covid-19 pandemic. It used datasets from Singapore, Chicago and Vancouver. "
        />
        <Subsection
          order={1}
          title="Kickstarter Data Exploration: The Effect of Staff Picks on Campaign Performance."
          id="kickstarter-data-exploration"
          alt="screenshot of tableau dashboard exploring kickstarter trends"
          src="/screenshots/kickstarter_datathon.png"
          text="This datathon explores the differences between 'Staff-picked' Kickstarter campaigns and campaigns that are not 'Staff-picked'. Across the board in terms of money raised, time until completion and number of backers, 'Staff-picked' campaigns outperform non-'Staff-picked' campaigns"
        />
      </Box>
    </Box>
  );
}
