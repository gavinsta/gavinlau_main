import { Container, List, ListItem, ListIcon, BoxProps, ButtonProps, Button, Heading, HStack, Icon, Stack } from "@chakra-ui/react"
import { useState } from "react"
import { FaArrowUp, FaCheckSquare } from 'react-icons/fa'
const ExpandableList = ({ listName, children }: ButtonProps & { listName: string }) => {
  const [collapsed, setCollapsed] = useState(false)
  return (<Stack>
    <Button
      h={collapsed ? '200px' : 'fit-content'}
      onClick={() => { setCollapsed(!collapsed) }}>
      <HStack>
        <Icon as={FaArrowUp}
          style={{
            rotate: collapsed ? '-180deg' : "0deg",
            transition: 'rotate 0.5s'
          }} />
        <Heading
          textTransform={'none'}
          fontSize={24} fontWeight={"bold"} >
          {listName}
        </Heading>
      </HStack>
    </Button>
    {collapsed ? <></> :
      <Container pl={10}>
        <List listStyleType={'disc'}>
          {children}
        </List>
      </Container>

    }</Stack>)
}

export default ExpandableList