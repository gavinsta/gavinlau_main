import { Badge, Box, Divider, GridItem, Heading, HStack, List, ListIcon, ListItem, SimpleGrid, Spacer } from "@chakra-ui/react"
import useCheckMobileScreen from "Main/hooks/useCheckMobileScreen"
import ExpandableList from "../ExpandableList"
import SlideInSection from "../SlideInSection"
import { SiCsharp, SiDocker, SiJavascript, SiMariadb, SiMongodb, SiNextdotjs, SiPostgresql, SiPrisma, SiPython, SiReact, SiTableau, SiTypescript, SiUnity } from "react-icons/si"
import { FaJava } from "react-icons/fa"
import { useState } from "react"
import useWindowDimensions from "Main/hooks/useWindowDimensions"
const SkillsSection = () => {
  const [collapsed, setCollapsed] = useState(false)
  const isMobile = useCheckMobileScreen();
  const { width } = useWindowDimensions();
  const smallScreen = width < 1000
  return (<SlideInSection direction='right'>
    <Box
      padding={isMobile ? 5 : 10}
    //bg={'linear-gradient(35deg, #3E3E3B 50%,#1C1C1A) '}
    >
      <Box onClick={() => {
        setCollapsed(!collapsed)
      }}>
        <Heading
          id='technical-skills'
          textAlign={'center'}>Technical Skills 💻 </Heading>
        <HStack>
          <Spacer /><Badge>{collapsed ? "Expand" : "Collapse"}</Badge><Spacer />
        </HStack>
      </Box>

      {collapsed ?
        <Divider />
        :
        <SimpleGrid columns={isMobile ? 1 : smallScreen ? 2 : 3} spacing={5} spacingY={5}
          h={isMobile ? "100%" : "100%"}>
          <GridItem>
            <ExpandableList listName='Statistics'>
              <ListItem>
                IBM SPSS
              </ListItem>
              <ListItem>
                R and R Studio
              </ListItem>
              <ListItem>
                Regression Techniques (Linear, Multinomial, Tree)
              </ListItem>
              <ListItem>
                Clustering Techniques
              </ListItem>
              <ListItem>
                Fundmanetal Statistical Tests (T-test, Chi-squared, etc.)
              </ListItem>
            </ExpandableList>
          </GridItem>
          <GridItem>
            <ExpandableList listName='Programming Languages'>
              <ListItem>
                <ListIcon as={SiCsharp} />C#
              </ListItem>
              <ListItem>
                <ListIcon as={SiPython} />Python
              </ListItem>
              <ListItem>
                <ListIcon as={FaJava} />Java
              </ListItem>
              <ListItem>
                <ListIcon as={SiJavascript} />Javascript
              </ListItem>
              <ListItem>
                <ListIcon as={SiTypescript} />Typescript
              </ListItem>
            </ExpandableList>
          </GridItem>
          <GridItem>
            <ExpandableList listName='Frameworks'>
              <ListItem>
                <ListIcon as={SiReact} />React
              </ListItem>
              <ListItem>
                <ListIcon as={SiNextdotjs} />NEXT.js (what this site is built on)
              </ListItem>
              <ListItem>
                <ListIcon as={SiUnity} />Unity (a game engine, not a framework, I know)
              </ListItem>
            </ExpandableList>
          </GridItem>
          <GridItem>
            <ExpandableList listName='Databases & Environments'>
              <ListItem>
                <ListIcon as={SiPrisma} />Prisma
              </ListItem>
              <ListItem>
                <ListIcon as={SiMariadb} />SQL (MariaDB)
              </ListItem>
              <ListItem>
                <ListIcon as={SiPostgresql} />PostgreSQL
              </ListItem>
              <ListItem>
                <ListIcon as={SiMongodb} />MongoDB
              </ListItem>
              <ListItem>
                <ListIcon as={SiDocker} />Docker
              </ListItem>

            </ExpandableList>
          </GridItem>
          <GridItem>
            <ExpandableList listName='Visualization Tools'>
              <ListItem>
                D3.js
              </ListItem>
              <ListItem>
                Plotly (JS and Python)
              </ListItem>
              <ListItem>
                MatPlotLib
              </ListItem>
              <ListItem>
                <ListIcon as={SiTableau} />Tableau
              </ListItem>
            </ExpandableList>
          </GridItem>

        </SimpleGrid>}
    </Box>
  </SlideInSection>)
}
export default SkillsSection