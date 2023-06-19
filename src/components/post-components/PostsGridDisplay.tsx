import { GridItem, SimpleGrid } from "@chakra-ui/react";
import PostPreview from "./PostPreview";
import Post from "Main/interfaces/post";
type Props = { posts: Post[]; columns: number };

const PostsGridDisplay = (props: Props) => {
  return (
    <SimpleGrid columns={props.columns} spacing={5}>
      {props.posts.map((post) =>
        post.visibility === "public" ? (
          <GridItem key={post.slug}>
            <PostPreview
              key={post.slug}
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
              slug={post.slug}
              excerpt={post.excerpt}
            />
          </GridItem>
        ) : (
          <> </>
        )
      )}
    </SimpleGrid>
  );
};

export default PostsGridDisplay;
