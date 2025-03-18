import Image from "next/image";
import Link from "next/link";
import { FiThumbsUp } from "react-icons/fi";

export default function Card({ result }) {
  // Check if image path is available
  const imagePath = result.backdrop_path || result.poster_path;

  return (
    <div className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group">
      <Link href={`/movie/${result.id}`}>
        {imagePath ? (
          <Image
            src={`https://image.tmdb.org/t/p/original/${imagePath}`}
            width={500}
            height={300}
            className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
            placeholder="blur"
            blurDataURL="/spinner.svg"
            alt={result.title || result.name || "Movie poster"}
          />
        ) : (
          <div 
            className="flex items-center justify-center bg-gray-200 dark:bg-gray-600 sm:rounded-t-lg"
            style={{ height: "200px", width: "100%" }}
          >
            <p className="text-gray-500 dark:text-gray-400">No image available</p>
          </div>
        )}
        <div className="p-2">
          <p className="line-clamp-2 text-md">{result.overview}</p>
          <h2 className="truncate text-lg font-bold">
            {result.title || result.name || "Untitled"}
          </h2>
          <p className="flex items-center">
            {result.release_date || result.first_air_date || "N/A"}
            <FiThumbsUp className="h-5 mr-1 ml-3" /> {result.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
}