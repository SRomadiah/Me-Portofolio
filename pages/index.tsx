import { useState, useEffect } from "react";
import type { NextPage, GetServerSideProps } from "next";
import dynamic from "next/dynamic";

import { IMiniCard } from "@/@types/prop.types";
import { sanityClient } from "@/next-sanity.config";
import { queryFetchMiniCard } from "@/query";

import { Header, About, Skills, Contact, NowPlaying } from "../components";
const Projects = dynamic(
  () => import("@/components/Sections/Projects.section")
);

const Home: NextPage<{ project: [IMiniCard] }> = ({ project }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }
  }, [isLoading]);

  return (
    <div className="px-2 sm:px-8 md:px-24 lg:px-48 xl:px-72">
      <Header />
      <About />
      <Skills />
      <Projects project={project} />
      <Contact />

      <div className="flex justify-center">
        <NowPlaying />
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  const project = await sanityClient.fetch(queryFetchMiniCard);

  return {
    props: {
      project,
    },
  };
};

export default Home;
