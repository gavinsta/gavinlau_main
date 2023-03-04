import { Box, GridItem, Link, Heading, Image, SimpleGrid, Tab, TabList, TabPanel, TabPanels, Tabs, Text, HStack, Tag, Button, Switch, Icon } from "@chakra-ui/react"
import useCheckMobileScreen from "Main/hooks/useCheckMobileScreen"
import NextLink from "next/link"
import { useState } from "react"
import { SiUnity } from "react-icons/si"
import Card from "../Card"
import SlideInSection from "../SlideInSection"

const ProjectsSection = () => {

  const isMobile = useCheckMobileScreen()
  const tabWidth = isMobile ? "33%" : "25%"
  const [toggleMobileView, setToggleMobileView] = useState(false)
  return (<>
    <Heading textAlign={'center'}
      id='projects'>Projects 🗂</Heading>
    <Text fontStyle={'italic'} textAlign='center'>Some of the content iframes will look different compared to the actual site</Text>
    <SlideInSection direction='right'>
      <Tabs
        size={'lg'}>
        <TabList
          justifyContent='center'>
          <Tab
            width={tabWidth}>Data Science</Tab>
          <Tab
            width={tabWidth}>{isMobile ? "Web Dev" : "Web Development"}</Tab>
          <Tab
            width={tabWidth}>{isMobile ? "Game Dev" : "Game Development"}</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <SimpleGrid columns={isMobile ? 1 : 2} spacing={5}>
              <GridItem>

                <Link as={NextLink} href={'/projects/datascience-projects'}>
                  <Card>
                    <HStack>
                      <Tag>Article</Tag> <Text>on Observable.com</Text>
                    </HStack>
                    <Heading>What makes a good videogame?</Heading>
                    <Text>An analysis of the qualitative aspects that contribute to a video game&#39;s success.</Text>
                  </Card>
                </Link>


              </GridItem>
              <GridItem>

                <Link as={NextLink} href={'/projects/datascience-projects#tableau-work'}>
                  <Card>
                    <HStack>
                      <Tag>Dashboards</Tag> <Text></Text>
                    </HStack>
                    <Heading>Tableau Work</Heading>
                    <Text>AirBnB data, Kickstarter data, Lego data... </Text>
                    <Image alt='screenshot of tableau dashboard exploring airbnb trends' src={"/screenshots/airbnb_datathon.png"} width={"100%"} />
                  </Card>
                </Link>


              </GridItem>
            </SimpleGrid>


          </TabPanel>
          <TabPanel>
            <HStack>
              {isMobile ? <></> : <Switch
                colorScheme={'teal'}
                defaultChecked
                onChange={() => {
                  setToggleMobileView(!toggleMobileView)
                }}
              >Toggle Mobile Views</Switch>}
            </HStack>


            <SimpleGrid columns={isMobile || toggleMobileView ? 1 : 2} spacing={5}>
              <GridItem>
                <Link as={NextLink} href={'https://cumbydigital.com'}>
                  <Card overflowY={'hidden'} h={"500"}>

                    <Heading>Cumby Digital</Heading>
                    <Text>A React web app that enables users to book advertisement times on digital billboards</Text>
                    <iframe width="100%" height="800"
                      src="https://www.cumbydigital.com"></iframe>
                  </Card>
                </Link>
              </GridItem>
              <GridItem>
                <Link as={NextLink} href={'https://billboardhouse.net'}>
                  <Card overflowY={'hidden'} h={"500"}>
                    <Heading>Billboard House</Heading>
                    <Text>A Wordpress site for managing a venue</Text>
                    <iframe width="100%" height="800"
                      src="https://billboardhouse.net"></iframe>
                  </Card>
                </Link>
              </GridItem>
            </SimpleGrid>


          </TabPanel>
          <TabPanel>
            <SimpleGrid columns={isMobile ? 1 : !toggleMobileView ? 1 : 2} spacing={5}>
              <GridItem>
                <Card overflowY={'hidden'} h={"500"}>
                  <Heading textAlign={'center'}>Unnamed Project</Heading>
                  <Text>Alternate title: &quot;Couch Campaigners&quot;</Text>
                  <Text textAlign={'center'}>An adventure role-playing party game, where players use their mobile devices (or any browser) as the controller.</Text>
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
    </SlideInSection></>)
}

export default ProjectsSection