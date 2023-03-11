import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { Text, Box, Flex, Input, Button, Image } from "@chakra-ui/react";
import { sanityClient, urlFor } from "../sanity";
import type { Posts } from "../types.d";
import Link from "next/link";

export const getServerSideProps = async () => {
  const query = `*[_type == "post"]{
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

  const posts = await sanityClient.fetch(query);
  return {
    props: {
      posts,
    },
  };
};

interface Props {
  posts: [Posts];
}

const Blog = ({ posts }: Props) => {
  console.log("this is posts: ", posts);
  return (
    <>
      <Box>
        <Header />
        <Text
          as="h1"
          fontSize="2rem"
          fontWeight={600}
          textAlign="center"
          color="#653cf0"
        >
          BDP Blog
        </Text>
        <Box
          bg="#653cf0"
          color="white"
          w={{ base: "100%", md: "65%" }}
          margin=" 0 auto"
          px={{ base: 4, md: 24 }}
          py={16}
        >
          <Text fontSize="2rem">Boys and Education</Text>
          <Text mb={6}>
            Our main interests are Early Years and Primary and what we can do
            about those boys underachieving. However, we may comment on
            developments we see and review anything relevant to boys and
            education.
          </Text>
          <Text mb={6}>
            I will write posts, and while I do my best to keep up with research,
            I have spent most of the last 20 years working in Early Years,
            Primary and Children Centres with boys, their families and teachers
            to ensure that boys get the most from their education.
          </Text>
          <Text mb={6}>
            We want posts read but also responded to. We want your contribution
            to increase the debate and developing practice in this area.
          </Text>
          <Text mb={6}>
            Posts will be once a month, with additions when issues arise. If you
            would like these sent directly to your inbox, email me at
            tlloydbdp@mail.com. Also, of course, if you know others who are
            interested, please forward.
          </Text>
          <Text mb={6}>
            Posts will be once a month, with additions when issues arise. If you
            would like these sent directly to your inbox, email me at
            tlloydbdp@mail.com. Also, of course, if you know others who are
            interested, please forward.
          </Text>
          <Text mb={6}>
            Trefor Lloyd <br /> Boys Development Project
          </Text>
        </Box>
        <Box my={12}>
          <Flex flexDirection="row" justifyContent="space-around">
            <Link href="/posts">All posts</Link>
            <Flex w={{ base: "100%", md: "45%" }} gap="1rem">
              <Input type="text" placeholder="search" />
              <Button>Login/Sign up</Button>
            </Flex>
          </Flex>
        </Box>
        {/* Blog */}

        <Flex justifyContent="center" flexDirection="column">
          {posts.map((post: Posts) => (
            <Box
              w={{ base: "100%", md: "65%" }}
              border="solid 1px lightgrey"
              display="block"
              m="10px auto"
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
                  <Flex flexDir="column" w={{ base: "100%", md: "50%" }} p={4}>
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
                      <Text>Feb 9, 2021 | 8 min</Text>
                    </Flex>

                    <Text fontSize="34px" fontWeight={600}>
                      {post.title}
                    </Text>
                    <Text>
                      Too often boy’s underachievement is described in
                      generalized ways, making it sound as though we have a far
                      bigger problem than we have
                    </Text>
                  </Flex>
                </Flex>
              </Link>
            </Box>
          ))}
        </Flex>

        <Footer />
      </Box>
    </>
  );
};

export default Blog;
