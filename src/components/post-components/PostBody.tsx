import ReactMarkdown from 'react-markdown'
import { Text } from '@chakra-ui/react'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import remarkSlug from 'remark-slug'
import remarkImages from 'remark-images'
type Props = {
  content: string
}

const PostBody = ({ content }: Props) => {
  return (

    <ReactMarkdown className='md'
      rehypePlugins={[rehypeHighlight]}
      remarkPlugins={[remarkGfm, remarkSlug,remarkImages]}
    >
      {content}
    </ReactMarkdown>
  )
}

export default PostBody
