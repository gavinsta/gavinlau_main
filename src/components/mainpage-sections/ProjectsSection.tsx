import {
  Box,
  GridItem,
  Link,
  Heading,
  Image,
  SimpleGrid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  HStack,
  Tag,
  Button,
  Switch,
  Icon,
  useBoolean,
} from "@chakra-ui/react";
import useCheckMobileScreen from "Main/hooks/useCheckMobileScreen";
import NextLink from "next/link";
import { useEffect, useState } from "react";
import { SiUnity } from "react-icons/si";
import Card from "../Card";
import SlideInSection from "../SlideInSection";
import useSWR from "swr";
import WebProjectDisplay, {
  WebProject,
} from "Main/components/project-section-components/WebProjectDisplay";
import useWindowDimensions from "Main/hooks/useWindowDimensions";

const fetcher = (url: string) => fetch(url).then((r) => r.json());
const WebProjectContent = (props: { columns: number }) => {
  const { columns } = props;
  const { data, error } = useSWR("/api/projects", fetcher);
  let obj: any;
  if (error) return <div>failed to load</div>;
  if (!data) return <div>Loading...</div>;
  else {
    obj = JSON.parse(data);
    const webProjects: WebProject[] = obj.webprojects;
    return (
      <SimpleGrid columns={columns}>
        {webProjects.map((project: WebProject) => {
          if (project.display == "false") return <></>;

          return <WebProjectDisplay key={project.title} webProject={project} />;
        })}
      </SimpleGrid>
    );
  }
};

const ProjectsSection = () => {
  const isMobile = useCheckMobileScreen();
  const tabWidth = isMobile ? "33%" : "100%";
  const { width } = useWindowDimensions();
  const [toggleMobileView, setToggleMobileView] = useBoolean(false);
  function ToggleMobileViewButton() {
    return (
      <Switch
        colorScheme={"teal"}
        isChecked={toggleMobileView}
        onChange={() => {
          setToggleMobileView.toggle();
        }}
      >
        Toggle Mobile Views
      </Switch>
    );
  }
  return (
    <Box id="projects" pt={isMobile ? 5 : 10}>
      <Heading textAlign={"center"}>Projects 🗂</Heading>
      <Text fontStyle={"italic"} textAlign="center">
        Some of the content iframes will look different compared to the actual
        site
      </Text>
      <SlideInSection direction="right">
        <Tabs size={"lg"}>
          <TabList justifyContent="center">
            <Tab width={tabWidth}>Data Science</Tab>
            <Tab width={tabWidth}>
              {isMobile ? "Web Dev" : "Web Development"}
            </Tab>
            <Tab width={tabWidth}>
              {isMobile ? "Game Dev" : "Game Development"}
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <SimpleGrid columns={isMobile ? 1 : 2} spacing={5}>
                <GridItem>
                  <Link as={NextLink} href={"/projects/datascience-projects"}>
                    <Card>
                      <HStack>
                        <Tag>Article</Tag> <Text>on Observable.com</Text>
                      </HStack>
                      <Heading>What makes a good videogame?</Heading>
                      <Text>
                        An analysis of the qualitative aspects that contribute
                        to a video game&#39;s success.
                      </Text>
                    </Card>
                  </Link>
                </GridItem>
                <GridItem>
                  <Link
                    as={NextLink}
                    href={"/projects/datascience-projects#tableau-work"}
                  >
                    <Card>
                      <HStack>
                        <Tag>Dashboards</Tag> <Text></Text>
                      </HStack>
                      <Heading>Tableau Work</Heading>
                      <Text>AirBnB data, Kickstarter data, Lego data... </Text>
                      <Image
                        alt="screenshot of tableau dashboard exploring airbnb trends"
                        src={"/screenshots/airbnb_datathon.png"}
                        width={"100%"}
                      />
                    </Card>
                  </Link>
                </GridItem>
              </SimpleGrid>
            </TabPanel>
            <TabPanel>
              <ToggleMobileViewButton />
              <Text fontStyle={"italic"}>
                Note: The sites are rendered in iframes, so their contents may
                be distorted
              </Text>
              <WebProjectContent
                columns={toggleMobileView ? Math.floor(width / 650) : 1}
              />
              <ToggleMobileViewButton />
            </TabPanel>
            <TabPanel>
              <SimpleGrid columns={2} spacing={5}>
                <GridItem>
                  <Card overflowY={"hidden"} h={"500"}>
                    <Heading textAlign={"center"}>Unnamed Project</Heading>
                    <Text>Alternate title: &quot;Couch Campaigners&quot;</Text>
                    <Text textAlign={"center"}>
                      An adventure role-playing party game, where players use
                      their mobile devices (or any browser) as the controller.
                    </Text>
                    <Text>Passion project.</Text>
                    <Text>Tools:</Text>
                    <HStack>
                      <Icon as={SiUnity} /> <Text>Made in Unity</Text>
                    </HStack>
                  </Card>
                </GridItem>
              </SimpleGrid>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </SlideInSection>
    </Box>
  );
};

export default ProjectsSection;
