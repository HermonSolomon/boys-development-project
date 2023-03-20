import React, { useState } from "react";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { GetStaticPaths, GetStaticProps } from "next";
import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  HStack,
  Image,
  Textarea,
  Link,
  ListItem,
  Text,
  Input,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/react";
import { sanityClient, urlFor } from "../../sanity";
import PortableText from "react-portable-text";
import type { Posts } from "../../types.d";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { type SubmitHandler, useForm } from "react-hook-form";
import { getPosts } from "../api/getPosts";

interface IFormInput {
  _id: string;
  name: string;
  email: string;
  comment: string;
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  const query = `*[_type == "post"]{
    _id,
    slug {
        current
    }
  }`;

  const posts = await sanityClient.fetch(query);

  const paths = posts.map((post: Posts) => ({
    params: {
      slug: post.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    _id,
    _createdAt,
    title,
    author-> {
        name,
        image
    },
    'comments': *[
        _type == "comment" &&
        post._ref == ^._id &&
        approved == true],
        description,
        mainImage,
    mainImage,
    slug,
    body
  }`;

  const post = await sanityClient.fetch(query, {
    slug: params?.slug,
  });

  if (!post) {
    return {
      notFound: true,
    };
  }

  const allPostsQuery = `*[_type == "post"]{
    _id,
    title,
    author-> {
      name,
      image
    },
    description,
    mainImage,
    slug
  }`;

  const posts = await sanityClient.fetch(allPostsQuery);
  return {
    props: {
      post,
      posts,
      revalidate: 60, // after 60 secs the cached version of the content gets updated
    },
  };
};

interface Props {
  post: Posts;
  posts: Posts[];
}

const Post = ({ post, posts }: Props) => {
  console.log("this is posts from slug: ", posts);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({ mode: "onBlur" });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      const response = await fetch("/api/createComment", {
        method: "POST",
        body: JSON.stringify(data),
      });
      if (response.ok) {
        console.log(data);
        setIsSubmitted(true);
      } else {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }
    } catch (error) {
      console.error(error);
      setIsSubmitted(false);
    }
  };

  return (
    <>
      <Header />
      <Box px={{ base: 4, md: "20%" }} my={{ base: 4, md: 16 }}>
        <Flex w="fit-content" flexDir="row" gap="1rem">
          {post.author.image && (
            <Image
              src={urlFor(post.author.image).url()!}
              w="30px"
              h="30px"
              borderRadius="50%"
              bg="grey"
            />
          )}

          <Text>{post.author.name}</Text>
          <Text> Updated on {new Date(post._createdAt).toLocaleString()}</Text>
        </Flex>
        <Text fontSize="32px" fontWeight={600}>
          {" "}
          {post.title}
        </Text>
        <Text mb="2rem">
          Updated on {new Date(post._createdAt).toLocaleString()}
        </Text>
        {post.mainImage && (
          <Image
            src={urlFor(post.mainImage).url()!}
            alt="blog post number one"
            margin="0 auto"
            my={{ base: 4, md: 16 }}
          />
        )}
        <Box mb={20}>
          <Text>{post.description}</Text>

          <PortableText
            className=""
            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
            content={post.body}
            serializers={{
              h1: (props: any) => (
                <Text fontSize="32px" fontWeight={600} {...props} />
              ),
              h2: (props: any) => (
                <Text fontSize="24px" fontWeight={600} {...props} />
              ),
              li: (children: any) => <ListItem>{children}</ListItem>,
              link: ({ href, children }: any) => (
                <Link
                  href={href}
                  _hover={{ textDecoration: "underline", color: "blue" }}
                >
                  {children}
                </Link>
              ),
            }}
          />
        </Box>
        <Divider
          opacity="1"
          border-color="black"
          border-style=" solid"
          border-bottom-width=" 1px"
          width=" 100%"
          margin=" 2rem 0"
        />
        <HStack display="flex" justifyContent="left" flexDir="row" gap={2}>
          <Flex gap="2.5rem">
            <FaFacebook role="img" />
            <FaTwitter role="img" />
            <FaYoutube role="img" />
            <FaInstagram role="img" />
          </Flex>
        </HStack>
        <Divider
          opacity="1"
          border-color="black"
          border-style=" solid"
          border-bottom-width=" 1px"
          width=" 100%"
          margin=" 1.5rem 0"
        />
      </Box>
      {/* Recent Posts */}
      <Box px={{ base: 4, md: "20%" }} mb={20}>
        <Flex flexDirection="row" justifyContent="space-between">
          <Text fontSize="18px" fontWeight={400}>
            Recent Posts
          </Text>
          <Link href="/blog">See All</Link>
        </Flex>
        <Flex flexDirection="row" gap="1rem">
          {posts?.map((post: Posts) => (
            <Box
              w={{ base: "100%", md: "65%" }}
              border="solid 1px lightgrey"
              display="block"
              m="10px auto"
              key={post._id}
            >
              <Link key={post._id} href={`/post/${post.slug.current}`}>
                <Flex flexDirection={{ base: "column", md: "row" }}>
                  <Box maxW="454px">
                    {post.mainImage && (
                      <Image
                        src={urlFor(post.mainImage).url()!}
                        alt="blog post number one"
                      />
                    )}
                  </Box>

                  <Text fontSize="34px" fontWeight={600}>
                    {post.title}
                  </Text>
                </Flex>
              </Link>
            </Box>
          ))}
        </Flex>
      </Box>

      {/* Comments */}
      <Box px={{ base: 4, md: "30%" }} mb={20}>
        <Text fontWeight={600}>Comments</Text>
        <Divider
          opacity="1"
          border-color="black"
          border-style=" solid"
          border-bottom-width=" 1px"
          width=" 100%"
          margin=" 1.5rem 0"
        />

        {isSubmitted ? (
          <Box bg="#653df0" color="white" w="100%" maxW="container.lg">
            <Text fontSize="28px">Comment Submitted!</Text>
            <Text fontSize="18px">
              Once it has been approved - It will appear below
            </Text>
          </Box>
        ) : (
          <form id={post._id} onSubmit={handleSubmit(onSubmit)}>
            <FormControl isInvalid={!!errors.name}>
              <Input
                {...register("_id")}
                type="hidden"
                name="_id"
                value={post._id}
              />
              <FormLabel htmlFor="name">Name:</FormLabel>
              <Input
                type="text"
                id="name"
                bg="transparent"
                border="none"
                borderBottom={errors.name ? "solid 2px red" : "solid 2px grey"}
                borderRadius="0"
                boxShadow="none !important"
                max-width="100%"
                mb={2}
                _focus={{
                  zIndex: "1",
                  borderColor: "#3182ce",
                  boxShadow: "none",
                }}
                {...register("name", { required: "Name is required" })}
              />
              <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.email}>
              <FormLabel htmlFor="email">Email:</FormLabel>
              <Input
                type="email"
                id="email"
                border="none"
                borderBottom={
                  !!errors.email ? "solid 2px red" : "solid 2px grey"
                }
                borderRadius="0"
                boxShadow="none !important"
                max-width="100%"
                mb={2}
                _focus={{
                  zIndex: "1",
                  borderColor: "#3182ce",
                  boxShadow: "none",
                }}
                {...register("email", { required: "Email is required" })}
              />
              <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
            </FormControl>
            <FormControl>
              <Textarea
                {...register("comment")}
                placeholder="Write a comment."
                border="solid 1px grey"
                py="1.5rem"
                _focus={{
                  zIndex: "1",
                  borderColor: "#3182ce",
                  boxShadow: "none",
                }}
              />
              <FormErrorMessage>{errors.comment?.message}</FormErrorMessage>
            </FormControl>
            <Input
              type="submit"
              m="auto"
              variant="outline"
              color="#653cf0"
              border="solid 2px #653cf0"
              borderRadius="20px"
              my={9}
              px="2.5rem"
            />
            <Button
              type="submit"
              m="auto"
              variant="outline"
              color="#653cf0"
              border="solid 2px #653cf0"
              borderRadius="20px"
              my={9}
              px="2.5rem"
            >
              Cancel
            </Button>
          </form>
        )}
      </Box>

      <Footer />
    </>
  );
};

export default Post;
