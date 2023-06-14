import { Heading, Link, Stack } from "@chakra-ui/react";
import { remark } from "remark";
import { unified } from "unified";
import slug from "remark-slug";
import { Node } from "unist";
import parse from 'remark-parse'
import autoLinkHeadings from "remark-autolink-headings";

interface PostTableOfContentsProps {
  content: string,
  direction: 'row' | 'column'
}
export default function PostTableOfContents(props: PostTableOfContentsProps) {
  interface HeadingNode extends Node {
    depth: number;
    children: Array<{ type: string; value: string }>;
    data: { id: string };
  }
  function generateTableOfContents() {
    const processor = remark().use(slug).use(autoLinkHeadings);//.use(parse);
    const result = processor.parse(props.content) as Node;

    const headings: { text: string; level: number; link: string }[] = [];
    function generateSlug(text: string) {
      return text
        .toLowerCase()
        .replace(/[^\w]+/g, '-')
        .replace(/(^-|-$)/g, '');
    }
    function processNode(node: Node) {
      if (node.type === 'heading') {
        console.log(node as HeadingNode)
        const text = (node as HeadingNode).children[0].value;
        const heading = {
          text: text,
          level: (node as HeadingNode).depth,
          link: `#${generateSlug(text)}`,
        };

        headings.push(heading);
      }

      if ('children' in node) {
        (node as HeadingNode).children.forEach((child: Node) => processNode(child));
      }
    }
    processNode(result);
    // const jsonObject = JSON.stringify(headings, null, 2);
    // return (jsonObject);
    return headings.map((heading) => (
      // <Heading
      //   //@ts-ignore
      //   as={`h${heading.level}`}
      //   key={heading.text}
      //   id={generateSlug(heading.text)}
      // >
      //   {heading.text}
      // </Heading>
      <Link href={heading.link} key={heading.text}
        p={0}
        pl={heading.level * 5} >
        {heading.text}
      </Link>
    ));
  }
  return (
    <Stack direction={props.direction} spacing={0}>
      {generateTableOfContents()}

    </Stack>

  )
}