import { SimpleGrid, GridItem } from "@chakra-ui/react";
import EducationItem from "../EducationItem";
import CollapsibleSection from "../page-layout/CollapsibleSection";

const EducationSection = () => {
  return (
    <CollapsibleSection title="Education 🎓" id="education">
      <SimpleGrid spacingY={5} pt={5}>
        <GridItem>
          <EducationItem
            degree="Master of Data Science and Analytics"
            location="University of Calgary, Calgary, AB"
            date="September 2022 – Current"
          />
        </GridItem>
        <GridItem>
          <EducationItem
            degree="Bachelor of Medicine, Bachelor of Surgery (MBBS)"
            location="Li Ka Shing Faculty of Medicine, Hong Kong University, Hong Kong	"
            date="September 2019 – 2022"
          />
        </GridItem>
        <GridItem>
          <EducationItem
            degree="Bachelor of Science, Neuroscience, Honors with Distinction"
            location="Hotchkiss Brain Institute, University of Calgary, Calgary, AB"
            date="Graduated: 	June 2018"
          />
        </GridItem>
      </SimpleGrid>
    </CollapsibleSection>
  );
};

export default EducationSection;
