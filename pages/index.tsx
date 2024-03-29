import Head from "next/head";
import { Inter } from "@next/font/google";
import { Header } from "@/components/Header/Header";
import { Hero } from "@/components/Hero/Hero";
import Body from "@/components/Main/Body";
import { Footer } from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Boys development Project</title>
        <meta
          name="description"
          content="Generated by Boys development Project"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <Body />
      <Footer />
    </>
  );
}
