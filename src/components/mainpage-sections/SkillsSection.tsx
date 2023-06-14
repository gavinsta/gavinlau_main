import {
  Badge,
  Box,
  Divider,
  GridItem,
  Heading,
  HStack,
  Icon,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Spacer,
  Text,
} from "@chakra-ui/react";
import useCheckMobileScreen from "Main/hooks/useCheckMobileScreen";
import ExpandableList from "../ExpandableList";
import SlideInSection from "../SlideInSection";
import {
  SiAmazonaws,
  SiTensorflow,
  SiCsharp,
  SiDigitalocean,
  SiDocker,
  SiJavascript,
  SiMariadb,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiTableau,
  SiTypescript,
  SiUbuntu,
  SiUnity,
  SiVercel,
  SiPlotly,
  SiChakraui,
  SiAdobephotoshop,
  SiSketchup,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { ImStatsBars } from "react-icons/im";
import { useState } from "react";
import useWindowDimensions from "Main/hooks/useWindowDimensions";
import CollapsibleSection from "../page-layout/CollapsibleSection";
// const SkillsSection = () => {
//   const [collapsed, setCollapsed] = useState(false)
//   const isMobile = useCheckMobileScreen();
//   const { width } = useWindowDimensions();
//   const smallScreen = width < 1000
//   return (
//     <Box
//     id='technical-skills'
//       padding={isMobile ? 5 : 10}
//     //bg={'linear-gradient(35deg, #3E3E3B 50%,#1C1C1A) '}
//     >
//       <Box onClick={() => {
//         setCollapsed(!collapsed)
//       }}>
//         <Heading

//           textAlign={'center'}>Technical Skills 💻 </Heading>
//         <HStack>
//           <Spacer /><Badge>{collapsed ? "Expand" : "Collapse"}</Badge><Spacer />
//         </HStack>
//       </Box>
//       <SlideInSection direction='right'>
//         {collapsed ?
//           <Divider />
//           :
//           <SimpleGrid columns={isMobile ? 1 : smallScreen ? 2 : Math.floor(width / 400)} spacing={5} spacingY={5}
//             h={isMobile ? "100%" : "100%"}>
//             <GridItem>
//               <ExpandableList listName='Statistics'>
//                 <ListItem>
//                   IBM SPSS
//                 </ListItem>
//                 <ListItem>
//                   R and R Studio
//                 </ListItem>
//                 <ListItem>
//                   Regression Techniques (Linear, Multinomial, Tree)
//                 </ListItem>
//                 <ListItem>
//                   Clustering Techniques
//                 </ListItem>
//                 <ListItem>
//                   Fundmanetal Statistical Tests (T-test, Chi-squared, etc.)
//                 </ListItem>
//               </ExpandableList>
//             </GridItem>
//             <GridItem>
//               <ExpandableList listName='Programming Languages'>
//                 <ListItem>
//                   <ListIcon as={SiCsharp} />C#
//                 </ListItem>
//                 <ListItem>
//                   <ListIcon as={SiPython} />Python
//                 </ListItem>
//                 <ListItem>
//                   <ListIcon as={FaJava} />Java
//                 </ListItem>
//                 <ListItem>
//                   <ListIcon as={SiJavascript} />Javascript
//                 </ListItem>
//                 <ListItem>
//                   <ListIcon as={SiTypescript} />Typescript
//                 </ListItem>
//               </ExpandableList>
//             </GridItem>
//             <GridItem>
//               <ExpandableList listName='Frameworks'>
//                 <ListItem>
//                   <ListIcon as={SiReact} />React
//                 </ListItem>
//                 <ListItem>
//                   <ListIcon as={SiNextdotjs} />NEXT.js (what this site is built on)
//                 </ListItem>
//                 <ListItem>
//                   <ListIcon as={SiUnity} />Unity (a game engine, not a framework, I know)
//                 </ListItem>
//               </ExpandableList>
//             </GridItem>
//             <GridItem>
//               <ExpandableList listName='Databases & Environments'>
//                 <ListItem>
//                   <ListIcon as={SiPrisma} />Prisma
//                 </ListItem>
//                 <ListItem>
//                   <ListIcon as={SiMariadb} />SQL (MariaDB)
//                 </ListItem>
//                 <ListItem>
//                   <ListIcon as={SiPostgresql} />PostgreSQL
//                 </ListItem>
//                 {/* <ListItem>
//                   <ListIcon as={SiMongodb} />MongoDB
//                 </ListItem> */}
//                 <ListItem>
//                   <ListIcon as={SiDocker} />Docker
//                 </ListItem>

//               </ExpandableList>
//             </GridItem>
//             <GridItem>
//               <ExpandableList listName='Visualization Tools'>
//                 <ListItem>
//                   D3.js
//                 </ListItem>
//                 <ListItem>
//                   Plotly (JS and Python)
//                 </ListItem>
//                 <ListItem>
//                   MatPlotLib
//                 </ListItem>
//                 <ListItem>
//                   <ListIcon as={SiTableau} />Tableau
//                 </ListItem>
//               </ExpandableList>
//             </GridItem>
//             <GridItem>
//               <ExpandableList listName='Cloud & OS'>
//                 <ListItem>
//                   <ListIcon as={SiDigitalocean} />Digital Ocean
//                 </ListItem>
//                 <ListItem>
//                   <ListIcon as={SiUbuntu} />Ubuntu (Linux VM)
//                 </ListItem>
//                 <ListItem>
//                   <ListIcon as={SiAmazonaws} /> AWS (Learning)
//                 </ListItem>
//                 <ListItem>
//                   <ListIcon as={SiVercel} />Vercel (hosting this site)
//                 </ListItem>
//               </ExpandableList>
//             </GridItem>
//           </SimpleGrid>}
//       </SlideInSection>
//     </Box>
//   )
// }

const SkillsSection = () => {
  const { width } = useWindowDimensions();
  const isMobile = useCheckMobileScreen();
  return (
    <CollapsibleSection title="Technical Skills 💻" id="technical-skills">
      <Text p={3} textAlign={"center"}>
        I've picked up a lot of skills as a hobbyist and professionally, and I'm
        actively learning many more.
      </Text>
      <SimpleGrid
        columns={isMobile ? 1 : Math.floor(width / 400)}
        spacing={5}
        spacingY={5}
        fontSize={"19px"}
        h={isMobile ? "100%" : "100%"}
      >
        <GridItem h={"300px"}>
          <ExpandableList
            listName="Statistics & Machine Learning"
            iconsWhenCollapsed={[
              <Icon as={ImStatsBars} />,
              <Icon as={SiTensorflow} />,
            ]}
          >
            <ListItem>IBM SPSS</ListItem>
            <ListItem>R and R Studio</ListItem>
            <ListItem>
              Regression Techniques (Linear, Multinomial, Tree)
            </ListItem>
            <ListItem>Clustering Techniques</ListItem>
            <ListItem>
              Fundmanetal Statistical Tests (T-test, Chi-squared, etc.)
            </ListItem>
            <ListItem>
              <ListIcon as={SiTensorflow} />
              Tensorflow & Keras
            </ListItem>
          </ExpandableList>
        </GridItem>
        <GridItem h={"300px"}>
          <ExpandableList
            listName="Programming Languages"
            iconsWhenCollapsed={[
              <Icon as={SiCsharp} />,
              <Icon as={SiPython} />,
              <Icon as={SiJavascript} />,
              <Icon as={SiTypescript} />,
            ]}
          >
            <ListItem>
              <ListIcon as={SiCsharp} />
              C#
            </ListItem>
            <ListItem>
              <ListIcon as={SiPython} />
              Python
            </ListItem>
            <ListItem>
              <ListIcon as={FaJava} />
              Java
            </ListItem>
            <ListItem>
              <ListIcon as={SiJavascript} />
              Javascript
            </ListItem>
            <ListItem>
              <ListIcon as={SiTypescript} />
              Typescript
            </ListItem>
          </ExpandableList>
        </GridItem>
        <GridItem h={"300px"}>
          <ExpandableList
            listName="Full Stack Web Development"
            iconsWhenCollapsed={[
              <Icon as={SiReact} />,
              <Icon as={SiNextdotjs} />,
              <Icon as={SiUnity} />,
              <Icon as={SiChakraui} />,
            ]}
          >
            <ListItem>
              <ListIcon as={SiChakraui} />
              Chakra UI (one of my absolute favorite tools!)
            </ListItem>
            <ListItem>
              <ListIcon as={SiReact} />
              React
            </ListItem>
            <ListItem>
              <ListIcon as={SiNextdotjs} />
              NEXT.js (what this site is built on)
            </ListItem>
          </ExpandableList>
        </GridItem>

        <GridItem h={"300px"}>
          <ExpandableList
            listName="Visualization Tools"
            iconsWhenCollapsed={[
              <Icon as={SiPlotly} />,
              <Icon as={SiTableau} />,
            ]}
          >
            <ListItem>D3.js</ListItem>
            <ListItem>
              <ListIcon as={SiPlotly} />
              Plotly (JS and Python)
            </ListItem>
            <ListItem>MatPlotLib</ListItem>
            <ListItem>
              <ListIcon as={SiTableau} />
              Tableau
            </ListItem>
          </ExpandableList>
        </GridItem>
        <GridItem h={"300px"}>
          <ExpandableList
            listName="Cloud & Environments"
            iconsWhenCollapsed={[
              <Icon as={SiDigitalocean} />,
              <Icon as={SiUbuntu} />,
              <Icon as={SiDocker} />,
            ]}
          >
            <ListItem>
              <ListIcon as={SiDocker} />
              Docker
            </ListItem>
            <ListItem>
              <ListIcon as={SiDigitalocean} />
              Digital Ocean
            </ListItem>
            <ListItem>
              <ListIcon as={SiUbuntu} />
              Ubuntu (Linux VM)
            </ListItem>
            <ListItem>
              <ListIcon as={SiAmazonaws} /> AWS
            </ListItem>
            <ListItem>
              <ListIcon as={SiVercel} />
              Vercel (hosting this site)
            </ListItem>
          </ExpandableList>
        </GridItem>
        <GridItem h={"300px"}>
          <ExpandableList
            listName="Databases"
            iconsWhenCollapsed={[
              <Icon as={SiPrisma} />,
              <Icon as={SiMariadb} />,
              <Icon as={SiPostgresql} />,
            ]}
          >
            <ListItem>
              <ListIcon as={SiPrisma} />
              Prisma
            </ListItem>
            <ListItem>
              <ListIcon as={SiMariadb} />
              SQL (MariaDB)
            </ListItem>
            <ListItem>
              <ListIcon as={SiPostgresql} />
              PostgreSQL
            </ListItem>
            {/* <ListItem>
                  <ListIcon as={SiMongodb} />MongoDB
                </ListItem> */}
          </ExpandableList>
        </GridItem>
        <GridItem h={"300px"}>
          <ExpandableList
            listName="Game Dev"
            iconsWhenCollapsed={[<Icon as={SiUnity} />]}
          >
            <ListItem>
              <ListIcon as={SiUnity} />
              Unity
            </ListItem>
          </ExpandableList>
        </GridItem>
        <GridItem h={"300px"}>
          <ExpandableList
            listName="Art & Design"
            iconsWhenCollapsed={[
              <Icon as={SiAdobephotoshop} />,
              <Icon as={SiSketchup} />,
            ]}
          >
            <ListItem>
              <ListIcon as={SiAdobephotoshop} />
              Photoshop
            </ListItem>
            <ListItem>Procreate (iOS app)</ListItem>
            <ListItem>
              <ListIcon as={SiSketchup} />
              Sketchup
            </ListItem>
          </ExpandableList>
        </GridItem>
      </SimpleGrid>
    </CollapsibleSection>
  );
};
export default SkillsSection;
