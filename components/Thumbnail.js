import { ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image";

export default function Thumbnail({ result }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original";
  return (
    <div>
      <Image
        src={`${BASE_URL}${result.backdrop_path}`}
        width="200"
        height="100"
        layout="responsive"
      />
      <div className="">
        <p>{result.overview}</p>
        <h2>{result.title || result.original_name}</h2>
        <p>
          {result.release_date || result.first_air_date} - <ThumbUpIcon />
          {result.vote_count}
        </p>
      </div>
    </div>
  );
}
