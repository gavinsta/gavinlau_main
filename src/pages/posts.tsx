import { Box, Heading } from "@chakra-ui/react";
import { getAllPosts } from "Main/lib/api";
import Post from "Main/interfaces/post";
import RecentPosts from "Main/components/post-components/RecentPosts";
import PostsScrollDisplay from "Main/components/post-components/PostsScrollDisplay";
type Props = {
  allPosts: Post[];
};
export default function Posts(props: Props) {
  return (
    <Box>
      <Heading>Posts</Heading>
      <PostsScrollDisplay posts={props.allPosts} columns={3} />
    </Box>
  );
}
export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
    "visibility",
  ]);

  return {
    props: { allPosts },
  };
};
