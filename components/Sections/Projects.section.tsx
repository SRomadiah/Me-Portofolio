import React from "react";
import MiniCard from "../Card/MiniCard";

import { IMiniCard } from "@/@types/prop.types";

const Projects: React.FC<{ project: [IMiniCard] }> = ({ project }) => {
  return (
    <div className="my-16 px-3 font-sen" id="projects">
      <p className="text-3xl font-bold text-white">Featured Projects</p>
      <div className="my-8 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {project?.map(({ _id, title, demoUrl }) => (
          <MiniCard key={_id} path={demoUrl} title={title} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
