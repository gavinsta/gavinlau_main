import { Badge, Box, Image, Heading, HStack, Spacer, Text, Divider, SimpleGrid, GridItem, Stack } from "@chakra-ui/react"
import { motion } from "framer-motion"
import useCheckMobileScreen from "Main/hooks/useCheckMobileScreen"
import { useState } from "react"
import EducationItem from "../EducationItem"
import SlideInSection from "../SlideInSection"

const EducationSection = () => {
  const isMobile = useCheckMobileScreen()
  const [collapsed, setCollapsed] = useState(false)
  return (
    <Box
      padding={isMobile ? 5 : 10}
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Box onClick={() => {
        setCollapsed(!collapsed)
      }}>
        <Heading
          id='education'
          textAlign={'center'}>Education 🎓</Heading>
        <HStack>
          <Spacer /><Badge>{collapsed ? "Expand" : "Collapse"}</Badge><Spacer />
        </HStack>
      </Box>
      <SlideInSection direction="right">
        {collapsed ? <Divider /> :
          <Box>
            <SimpleGrid
              spacingY={5}
              pt={5}>
              <GridItem>
                <EducationItem degree="Master of Data Science and Analytics" location="University of Calgary, Calgary, AB" date="September 2022 – Current" />
              </GridItem>
              <GridItem>
                <EducationItem degree="Bachelor of Medicine, Bachelor of Surgery (MBBS)" location="Li Ka Shing Faculty of Medicine, Hong Kong University, Hong Kong	" date="September 2019 – 2022" />
              </GridItem>
              <GridItem>
                <EducationItem degree="Bachelor of Science, Neuroscience, Honors with Distinction" location="Hotchkiss Brain Institute, University of Calgary, Calgary, AB" date="Graduated: 	June 2018" />
              </GridItem>

            </SimpleGrid>
          </Box>
        }</SlideInSection>
    </Box>
  )
}

export default EducationSection