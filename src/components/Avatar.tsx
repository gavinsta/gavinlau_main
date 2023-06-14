import Image from "next/image"
import { Avatar as ChakraAvatar, Text } from "@chakra-ui/react"
type Props = {
  name: string
  picture: string
}

const Avatar = ({ name, picture }: Props) => {
  return (
    <div>
      <ChakraAvatar src={picture} />
      <Text>{name}</Text>
      {/* <Image src={picture} width='120' height='120' alt={name} /> */}
    </div>
  )
}

export default Avatar
