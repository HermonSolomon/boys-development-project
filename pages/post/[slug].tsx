import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { sanityClient, urlFor } from "../../sanity";
import type { Posts } from "../../types.d";

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
  const query = `*[_type == "post" && slug.current == $slug ]{
    _id,
    _createdAt,
    title,
    author-> {
        name,
        image
    },
    'comments': * [
        _type == "comment" &&
        post._ref == ^._id &&
        approved == true],
        description,
        mainImage,
    slug {
        current
    },
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

const Post = ({ post }: Props) => {
  console.log(post);
  return (
    <>
      <Header />
      <Footer />
    </>
  );
};

export default Post;
