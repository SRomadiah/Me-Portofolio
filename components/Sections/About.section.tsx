import type { NextComponentType } from "next";

import Image from "next/image";
import Link from "next/link";

import { HiOutlineArrowNarrowRight } from "../Misc/Icons.collection";

const About: NextComponentType = () => {
  return (
    <div className="my-8 flex flex-row items-center justify-between px-3 font-sen">
      <div>
        <p className="text-3xl font-bold text-white">Siti Romadiah</p>
        <p className="mt-1 text-lg text-gray-300">
          Frontend Developer, UI Designer and a Student
        </p>

        <p className="mt-4 text-gray-400 max-w-2xl">
          I am a 3rd semester Information Technology student at INSTIKI, I have
          experience with the web from independent projects and from campus
          assignments. I am quite familiar with HTML, CSS, JS, know a little
          about React, and PHP.
        </p>

        <Link href="/" passHref>
          <a
            className="mt-4 flex cursor-pointer flex-row items-center gap-1 font-jost text-xl text-gray-400 duration-100 hover:ml-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read my Blog
            <HiOutlineArrowNarrowRight />
          </a>
        </Link>
      </div>

      <div className="hidden custom:block">
        <Image
          src="/assets/profile.jpeg"
          width="120"
          height="120"
          className="rounded-full"
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default About;
