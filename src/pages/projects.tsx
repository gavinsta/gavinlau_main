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
  Container,
  Spacer,
} from "@chakra-ui/react";
import useCheckMobileScreen from "Main/hooks/useCheckMobileScreen";
import NextLink from "next/link";
import { useEffect, useState } from "react";
import { SiUnity } from "react-icons/si";
import Card from "Main/components/Card";
import SlideInSection from "Main/components/SlideInSection";
import useSWR from "swr";
import WebProjectDisplay, {
  WebProject,
} from "Main/components/project-section/WebProjectDisplay";
import useWindowDimensions from "Main/hooks/useWindowDimensions";
import DatascienceProjectPreview, {
  DatascienceProject,
} from "Main/components/project-section/DatascienceProjectPreview";
import NavBar from "Main/components/page-layout/NavBar";

const fetcher = (url: string) => fetch(url).then((r) => r.json());
const WebProjectsSummary = (props: { columns: number }) => {
  const { columns } = props;
  const isMobile = useCheckMobileScreen();
  const { data, error } = useSWR("/api/projects", fetcher);
  let obj: any;
  if (error) return <div>failed to load</div>;
  if (!data) return <div>Loading...</div>;
  else {
    obj = JSON.parse(data);
    const webProjects: WebProject[] = obj.webprojects;
    return (
      <SimpleGrid columns={columns} p={5} pr={isMobile ? "50px" : 5}>
        {webProjects.map((project: WebProject) => {
          if (project.display == "false") return <></>;

          return <WebProjectDisplay key={project.title} webProject={project} />;
        })}
      </SimpleGrid>
    );
  }
};

const DatascienceProjectsSummary = (props: { columns: number }) => {
  const { columns } = props;
  const { data, error } = useSWR("/api/projects", fetcher);
  let obj: any;
  if (error) return <div>failed to load</div>;
  if (!data) return <div>Loading...</div>;
  else {
    obj = JSON.parse(data);
    const webProjects: DatascienceProject[] = obj.datascience;
    return (
      <SimpleGrid columns={columns}>
        {webProjects.map((project: DatascienceProject) => {
          if (project.display == "false") return <></>;

          return (
            <DatascienceProjectPreview key={project.title} project={project} />
          );
        })}
      </SimpleGrid>
    );
  }
};
const ProjectsSection = () => {
  const isMobile = useCheckMobileScreen();
  const { width } = useWindowDimensions();
  const [toggleMobileView, setToggleMobileView] = useBoolean(false);
  const [tabIndex, setTabIndex] = useState(0);

  function handleTabsChange(index: number) {
    setTabIndex(index);
  }
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
      <NavBar
        links={[
          { name: "Home", href: "/" },
          { name: "Back to Top", href: "#projects" },
        ]}
        buttons={[
          {
            name: "Datascience Projects",
            action: () => {
              setTabIndex(0);
            },
          },
          {
            name: "Web Projects",
            action: () => {
              setTabIndex(1);
            },
          },
          {
            name: "Game Projects",
            action: () => {
              setTabIndex(2);
            },
          },
        ]}
      />
      <Heading textAlign={"center"}>Projects 🗂</Heading>

      <Tabs size={"lg"} index={tabIndex} onChange={handleTabsChange}>
        <TabList justifyContent="center" zIndex={"sticky"} width="100%">
          <Tab width={"100%"}>Data Science</Tab>
          <Tab width={"100%"}>{isMobile ? "Web Dev" : "Web Development"}</Tab>
          <Tab width={"100%"}>{isMobile ? "Game Dev" : "Game Development"}</Tab>
        </TabList>
        <Spacer h="50px" />
        <TabPanels>
          <SlideInSection direction="right">
            <TabPanel>
              <DatascienceProjectsSummary columns={Math.floor(width / 500)} />
            </TabPanel>
          </SlideInSection>
          <SlideInSection direction="left">
            <TabPanel>
              <Text fontStyle={"italic"} textAlign="center">
                Note: The sites are rendered in iframes, so their contents may
                be distorted
              </Text>
              <ToggleMobileViewButton />

              <WebProjectsSummary
                columns={toggleMobileView ? Math.floor(width / 650) : 1}
              />
              <ToggleMobileViewButton />
            </TabPanel>
          </SlideInSection>
          <SlideInSection direction="right">
            <TabPanel>
              <SimpleGrid columns={2} spacing={5}>
                <GridItem>
                  <Card overflowY={"hidden"} h={"500"}>
                    <Heading textAlign={"center"}>Couch Campaigners</Heading>
                    <Text>
                      {`
                      An adventure role-playing party game where players use
                      their mobile devices (or any browser) as the controller.
                      I've been working on this game for just over a year now.`}
                    </Text>
                    <Container borderRadius={5} p={5} bg="background.gunmetal">
                      <Heading size={"md"}>Description</Heading>
                      <Text textAlign={"center"}>
                        Band up with a team of friends online or in-person to
                        complete quests, customize your characters, and run an
                        adventuring guild as you see fit.
                      </Text>
                    </Container>
                    <HStack>
                      <Icon as={SiUnity} /> <Text>Made in Unity</Text>
                    </HStack>
                  </Card>
                </GridItem>
              </SimpleGrid>
            </TabPanel>
          </SlideInSection>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default ProjectsSection;
