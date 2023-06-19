import { SimpleGrid, GridItem, Text } from "@chakra-ui/react";
import Post from "Main/interfaces/post";
import CollapsibleSection from "Main/components/page-layout/CollapsibleSection";
import PostPreview from "./PostPreview";
import PostsGridDisplay from "./PostsGridDisplay";
type Props = { posts: Post[]; columns: number };
const RecentPosts = (props: Props) => {
  const { posts, columns } = props;
  return (
    <CollapsibleSection title="Recent Posts ✍️" id="recent-posts">
      {posts.length > 0 ? (
        <PostsGridDisplay posts={posts} columns={columns} />
      ) : (
        <Text textAlign={"center"}>
          I'll be putting up some of my personal notes, devlogs and guides
          shortly!
        </Text>
      )}
    </CollapsibleSection>
  );
};

export default RecentPosts;
