import { ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image";

export default function Thumbnail({ result }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original";
  return (
    <div className="p-3 cursor-pointer hover:text-white active:text-red-400 select-none xl:hover:scale-105 transition-transform duration-200">
      <Image
        src={`${BASE_URL}${result.backdrop_path}`}
        width="200"
        height="100"
        layout="responsive"
      />
      <div className="p-2">
        <p className="truncate">{result.overview}</p>
        <h2 className="text-xl font-bold">
          {result.title || result.original_name}
        </h2>
        <p className="flex items-center">
          {result.release_date || result.first_air_date}{" "}
          <ThumbUpIcon className="h-5 mx-2" />
          {result.vote_count}
        </p>
      </div>
    </div>
  );
}
