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
        {`I've picked up a lot of skills as a hobbyist and professionally, and I'm
        actively learning many more.`}
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
              <Icon key={"stats"} as={ImStatsBars} />,
              <Icon key={"tf"} as={SiTensorflow} />,
            ]}
          >
            <ListItem key={0}>IBM SPSS</ListItem>
            <ListItem key={1}>R and R Studio</ListItem>
            <ListItem key={2}>
              Regression Techniques (Linear, Multinomial, Tree)
            </ListItem>
            <ListItem key={3}>Clustering Techniques</ListItem>
            <ListItem key={4}>
              Fundmanetal Statistical Tests (T-test, Chi-squared, etc.)
            </ListItem>
            <ListItem key={5}>
              <ListIcon as={SiTensorflow} />
              Tensorflow & Keras
            </ListItem>
          </ExpandableList>
        </GridItem>
        <GridItem h={"300px"}>
          <ExpandableList
            listName="Programming Languages"
            iconsWhenCollapsed={[
              <Icon key={"cs"} as={SiCsharp} />,
              <Icon key={"python"} as={SiPython} />,
              <Icon key={"js"} as={SiJavascript} />,
              <Icon key={"ts"} as={SiTypescript} />,
            ]}
          >
            <ListItem key={6}>
              <ListIcon as={SiCsharp} />
              C#
            </ListItem>
            <ListItem key={7}>
              <ListIcon as={SiPython} />
              Python
            </ListItem>
            <ListItem key={8}>
              <ListIcon as={FaJava} />
              Java
            </ListItem>
            <ListItem key={9}>
              <ListIcon as={SiJavascript} />
              Javascript
            </ListItem>
            <ListItem key={10}>
              <ListIcon as={SiTypescript} />
              Typescript
            </ListItem>
          </ExpandableList>
        </GridItem>
        <GridItem h={"300px"}>
          <ExpandableList
            listName="Full Stack Web Development"
            iconsWhenCollapsed={[
              <Icon key={"react"} as={SiReact} />,
              <Icon key={"next"} as={SiNextdotjs} />,
              <Icon key={"chakraui"} as={SiChakraui} />,
            ]}
          >
            <ListItem key={11}>
              <ListIcon as={SiChakraui} />
              Chakra UI (one of my absolute favorite tools!)
            </ListItem>
            <ListItem key={12}>
              <ListIcon as={SiReact} />
              React
            </ListItem>
            <ListItem key={13}>
              <ListIcon as={SiNextdotjs} />
              NEXT.js (what this site is built on)
            </ListItem>
          </ExpandableList>
        </GridItem>

        <GridItem h={"300px"}>
          <ExpandableList
            listName="Visualization Tools"
            iconsWhenCollapsed={[
              <Icon key={"plotly"} as={SiPlotly} />,
              <Icon key={"tableau"} as={SiTableau} />,
            ]}
          >
            <ListItem key={14}>D3.js</ListItem>
            <ListItem key={15}>
              <ListIcon as={SiPlotly} />
              Plotly (JS and Python)
            </ListItem>
            <ListItem key={16}>MatPlotLib</ListItem>
            <ListItem key={17}>
              <ListIcon as={SiTableau} />
              Tableau
            </ListItem>
          </ExpandableList>
        </GridItem>
        <GridItem h={"300px"}>
          <ExpandableList
            listName="Cloud & Environments"
            iconsWhenCollapsed={[
              <Icon key={"digitalocean"} as={SiDigitalocean} />,
              <Icon key="ubuntu" as={SiUbuntu} />,
              <Icon key="docker" as={SiDocker} />,
            ]}
          >
            <ListItem key={18}>
              <ListIcon as={SiDocker} />
              Docker
            </ListItem>
            <ListItem key={19}>
              <ListIcon as={SiDigitalocean} />
              Digital Ocean
            </ListItem>
            <ListItem key={20}>
              <ListIcon as={SiUbuntu} />
              Ubuntu (Linux VM)
            </ListItem>
            <ListItem key={21}>
              <ListIcon as={SiAmazonaws} /> AWS
            </ListItem>
            <ListItem key={22}>
              <ListIcon as={SiVercel} />
              Vercel (hosting this site)
            </ListItem>
          </ExpandableList>
        </GridItem>
        <GridItem h={"300px"}>
          <ExpandableList
            listName="Databases"
            iconsWhenCollapsed={[
              <Icon key="prisma" as={SiPrisma} />,
              <Icon key="mariadb" as={SiMariadb} />,
              <Icon key="postgres" as={SiPostgresql} />,
            ]}
          >
            <ListItem key={23}>
              <ListIcon as={SiPrisma} />
              Prisma
            </ListItem>
            <ListItem key={24}>
              <ListIcon as={SiMariadb} />
              SQL (MariaDB)
            </ListItem>
            <ListItem key={25}>
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
            iconsWhenCollapsed={[<Icon key="unity" as={SiUnity} />]}
          >
            <ListItem key={26}>
              <ListIcon as={SiUnity} />
              Unity
            </ListItem>
          </ExpandableList>
        </GridItem>
        <GridItem h={"300px"}>
          <ExpandableList
            listName="Art & Design"
            iconsWhenCollapsed={[
              <Icon key="photoshop" as={SiAdobephotoshop} />,
              <Icon key="sketchup" as={SiSketchup} />,
            ]}
          >
            <ListItem key={27}>
              <ListIcon as={SiAdobephotoshop} />
              Photoshop
            </ListItem>
            <ListItem key={28}>Procreate (iOS app)</ListItem>
            <ListItem key={29}>
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
