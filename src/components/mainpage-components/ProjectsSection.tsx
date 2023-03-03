import { Box, GridItem, Link, Heading, SimpleGrid, Tab, TabList, TabPanel, TabPanels, Tabs, Text, HStack, Tag } from "@chakra-ui/react"
import useCheckMobileScreen from "Main/hooks/useCheckMobileScreen"
import NextLink from "next/link"
import Card from "../Card"
import SlideInSection from "../SlideInSection"

const ProjectsSection = () => {

  const isMobile = useCheckMobileScreen()
  const tabWidth = isMobile ? "33%" : "25%"

  return (<SlideInSection direction='right'>
    <Heading textAlign={'center'}>Projects 🗂</Heading>
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
          <SimpleGrid>
            <GridItem>

              <Link as={NextLink} href={'/projects/datascience-projects'}>
                <Card>
                  <HStack>
                    <Tag>Article</Tag> <Text>on Observable.com</Text>
                  </HStack>
                  <Heading>What makes a good videogame?</Heading>
                  <Text>An analysis of the qualitative aspects that contribute to a video game's success.</Text>
                </Card>
              </Link>


            </GridItem>
          </SimpleGrid>


        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
        <TabPanel>
          <p>three!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  </SlideInSection>)
}

export default ProjectsSection