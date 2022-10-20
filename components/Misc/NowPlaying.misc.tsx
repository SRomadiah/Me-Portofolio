import type { NextComponentType } from "next";

const SpotifyCard: NextComponentType = () => {
  return (
    <>
      <div className="mb-8 flex max-w-full flex-row items-center gap-x-2 rounded-md text-center font-sen text-lg text-gray-300">
        &copy; {new Date().getFullYear()} Romadiah
      </div>
    </>
  );
};

export default SpotifyCard;
