import Avatar from './Avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'
import type Author from '../interfaces/author'

import { Box, BoxProps, Heading, Text } from "@chakra-ui/react";
import NextImage from 'next/image';
import Card from './Card'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Author
  slug: string
}
export function Image({ width, height, src, alt }: BoxProps & { src: string, alt: string }) {
  return (
    <Box width={width} height={height} position='relative' overflow="hidden">
      <NextImage fill object-fit="cover" src={src} alt={alt}
      />
    </Box>
  )
}
const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  return (
    <Card>
      <div className="mb-5">
        <Image
          width={"40px"}
          alt={title} src={coverImage} />
      </div>
      <Heading _hover={{
        textDecoration: "underline"
      }}>
        <Link
          as={`/posts/${slug}`}
          href="/posts/[slug]"
        >
          {title}
        </Link>
      </Heading>
      <Text className="text-lg mb-4">
        <DateFormatter dateString={date} />
      </Text>
      <Text className="text-lg leading-relaxed mb-4">{excerpt}</Text>
      <Avatar name={author.name} picture={author.picture} />
    </Card>


  )
}

export default PostPreview
