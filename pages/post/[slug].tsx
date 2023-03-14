import React, { useState } from "react";
import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { GetStaticPaths, GetStaticProps } from "next";
import {
  Box,
  Divider,
  Flex,
  FormControl,
  HStack,
  Image,
  Input,
  Link,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { sanityClient, urlFor } from "../../sanity";
import PortableText from "react-portable-text";
import type { Posts } from "../../types.d";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { type SubmitHandler, useForm } from "react-hook-form";

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

  return {
    props: {
      post,
      revalidate: 60, // after 60 secs the cached version of the content gets updated
    },
  };
};

interface Props {
  post: Posts;
}

interface FormValues {
  comment: string;
}

const Post = ({ post }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ mode: "onBlur" });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsSubmitting(true);
    // Perform some action with the form data (e.g. send it to a backend API)
    console.log(data);
    setIsSubmitting(false);
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
          {/* PortableText allows us to maintain the styling that has been provided from within sanity body content */}
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
          <Box w="200px" h="150px" bg="grey"></Box>
          <Box w="200px" h="150px" bg="grey"></Box>
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl>
            <Input
              type="text"
              id="comment"
              placeholder="Write a comment."
              border="solid 1px grey"
              py="1.5rem"
              _focus={{
                zIndex: "1",
                borderColor: "#3182ce",
                boxShadow: "none",
              }}
            />
          </FormControl>
        </form>
      </Box>

      <Footer />
    </>
  );
};

export default Post;
