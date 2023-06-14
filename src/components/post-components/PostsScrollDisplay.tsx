import { Box, BoxProps, GridItem, HStack, SimpleGrid } from "@chakra-ui/react";
import PostPreview from "./PostPreview";
import Post from "Main/interfaces/post";
import { PointerEvent, MouseEvent, useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  MotionValue,
  useDragControls,
  useScroll,
} from "framer-motion";
import { useMeasure } from "react-use";
interface Props extends BoxProps {
  posts: Post[];
  columns: number;
}

const PostsScrollDisplay = (props: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [ref, { width, height, x: posX, y: posY }] =
    useMeasure<HTMLDivElement>();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [0, height], [15, -15]);
  const rotateY = useTransform(x, [0, width], [-15, 15]);

  const controls = useDragControls();

  const { scrollYProgress } = useScroll({ container: containerRef });
  function handleMouse(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();

    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  }
  return (
    <>
      <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          style={{
            stroke: "#fafafa",
            opacity: 0.3,
            strokeDashoffset: 0,
            strokeWidth: "15%",
            fill: "none",
          }}
        />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          pathLength="0"
          style={{
            pathLength: scrollYProgress,
            stroke: "#ff0066",
            opacity: 0.3,
            strokeDashoffset: 0,
            strokeWidth: "15%",
            fill: "none",
          }}
        />
      </svg>
      <Box ref={containerRef} h={props.h} w={props.w} overflow={"scroll"}>
        <motion.div
          ref={ref}
          onMouseMove={handleMouse}
          onMouseLeave={() => {
            x.set(width / 2);
            y.set(height / 2);
          }}
          // animate={{ x: x.get(), y: 0 }}
          drag="y"
          // dragControls={controls}
          // dragElastic={0.2}
          dragConstraints={containerRef}
          // whileTap={{ cursor: "grabbing" }}
        >
          <SimpleGrid columns={props.columns} spacing={5}>
            {props.posts.map((post) =>
              post.visibility === "public" ? (
                <GridItem>
                  <PostCard post={post} rotateX={rotateX} rotateY={rotateY} />
                </GridItem>
              ) : (
                <> </>
              )
            )}
          </SimpleGrid>
        </motion.div>
      </Box>
    </>
  );
};

function PostCard(props: {
  post: Post;
  rotateX: MotionValue<number>;
  rotateY: MotionValue<number>;
}) {
  const { post, rotateX, rotateY } = props;

  return (
    <motion.div>
      <motion.div style={{ rotateX, rotateY, z: 100 }}>
        {/* <p>
          `${width}:${height} @ ${posX}:${posY}`
        </p> */}
        <PostPreview
          key={post.slug}
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
          author={post.author}
          slug={post.slug}
          excerpt={post.excerpt}
        />
      </motion.div>
    </motion.div>
  );
}

export default PostsScrollDisplay;
