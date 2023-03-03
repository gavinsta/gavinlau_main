import { BoxProps, Divider, Heading, textDecoration } from "@chakra-ui/react"
import { useState } from "react"

const CollapsableSection = ({ children, header }: BoxProps & { header: string }) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <>
      <Heading
        width={"100%"}
        _hover={{
          textDecoration: "underline"
        }}
        textAlign={'center'}>{header}</Heading>
      {collapsed ? <Divider /> : { children }}
    </>

  )
}

export default CollapsableSection