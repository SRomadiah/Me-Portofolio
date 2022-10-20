import React from "react";
import Link from "next/link";

interface Props {
  path?: string;
  title?: string;
}

const MiniCard = ({ path, title }: Props) => {
  return (
    <Link href={path}>
      <a className="rounded-lg bg-white py-3 px-2 transition-all duration-300 hover:bg-gray-800 hover:text-white">
        {title}
      </a>
    </Link>
  );
};

export default MiniCard;
