import { SimpleGrid, GridItem } from "@chakra-ui/react";
import Post from "Main/interfaces/post";
import CollapsibleSection from "Main/components/page-layout/CollapsibleSection";
import PostPreview from "./PostPreview";
import PostsGridDisplay from "./PostsGridDisplay";
type Props = { posts: Post[]; columns: number };
const RecentPosts = (props: Props) => {
  const { posts, columns } = props;
  return (
    <CollapsibleSection title="Recent Posts ✍️" id="recent-posts">
      <PostsGridDisplay posts={posts} columns={columns} />
    </CollapsibleSection>
  );
};

export default RecentPosts;
