import { Box, Divider, HStack, Spacer, Stack, Text, textDecoration } from "@chakra-ui/react"
import useCheckMobileScreen from "Main/hooks/useCheckMobileScreen"

const EducationItem = ({ degree, location, date }: { degree: string, location: string, date: string }) => {
  const isMobile = useCheckMobileScreen()
  return (
    <Stack> {isMobile ?
      <Stack>
        <Text
          style={{
            textDecoration: 'underline',
            textDecorationColor: "teal"
          }}
          fontSize={20}>{degree}</Text>
        <Text fontStyle={'italic'}>{location}</Text>
        <Text >{date}</Text>
      </Stack>
      :
      <>
        <HStack>
          <Stack>
            <Text fontSize={20}
              style={{
                textDecoration: 'underline',
                textDecorationColor: "teal"
              }}
            >{degree}</Text>
            <Text fontStyle={'italic'}>{location}</Text>

          </Stack>
          <Spacer />
          <Text >{date}</Text>
        </HStack>
      </>


    }
    </Stack>
  )
}

export default EducationItem