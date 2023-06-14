import { useRouter } from "next/router";
import ErrorPage from "next/error";
//import Container from '../../components/container'
//import PostBody from '../../components/post-body'
import BlogHeader from "Main/components/post-components/PostHeader";
//import PostHeader from '../../components/post-header'
//import Layout from '../../components/layout'
import { getPostBySlug, getAllPosts } from "../../lib/api";
//import PostTitle from '../../components/post-title'
import Head from "next/head";
import { CMS_NAME } from "../../lib/constants";
import markdownToHtml from "../../lib/markdownToHtml";
import type PostType from "../../interfaces/post";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  Input,
  Tag,
  TagLabel,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import PostBody from "Main/components/post-components/PostBody";
import PostTableOfContents from "Main/components/post-components/PostTableOfContents";
import React from "react";

type Props = {
  post: PostType;
  morePosts: PostType[];
  preview?: boolean;
  otherLinks?: string[];
};

function MenuDrawer(props: {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  btnRef: React.MutableRefObject<any>;
}) {
  const { isOpen, onClose, btnRef, children } = props;
  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Contents</DrawerHeader>

        <DrawerBody>{children}</DrawerBody>

        <DrawerFooter justifyContent={"space-between"}>
          <Button variant="outline" mr={3} onClick={onClose}>
            Share
          </Button>
          <Button colorScheme="blue">Save</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export default function Post({ post, morePosts, preview, otherLinks }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef(null);
  const router = useRouter();
  const title = `${post.title} | Next.js Blog Example with ${CMS_NAME}`;
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  function createTags() {
    return post.tags.map((tag) => {
      return tag ? (
        <Tag>
          <TagLabel>{tag}</TagLabel>
        </Tag>
      ) : (
        <></>
      );
    });
  }
  return (
    <Box>
      <BlogHeader />
      <PostTableOfContents content={post.content} direction="column" />
      <Heading>{title}</Heading>

      {JSON.stringify(otherLinks)}
      <PostBody content={post.content} />
      <Button
        ref={btnRef}
        onClick={() => {
          onOpen();
        }}
      >
        Table of Contents
      </Button>
      <MenuDrawer isOpen={isOpen} onClose={onClose} btnRef={btnRef}>
        <PostTableOfContents content={post.content} direction="column" />
      </MenuDrawer>
    </Box>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
    "tags",
    "show",
  ]);
  const otherLinks = await getStaticPaths();
  return { props: { post, otherLinks } };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
