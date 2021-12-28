import requests from "../utils/requests";
import { useRouter } from "next/router";
export default function Navbar() {
  const router = useRouter();
  return (
    <div className="flex bg-zinc-500 text-gray-200 justify-center p-8 text-xl  sm:text-2xl">
      {Object.entries(requests).map(([key, { title, url }]) => (
        <p
          key={key}
          onClick={() => router.push(`?genre=${key}`)}
          className="mx-8 select-none cursor-pointer hover:text-white active:text-red-400"
        >
          {title}
        </p>
      ))}
    </div>
  );
}
