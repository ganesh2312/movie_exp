import Image from "next/image";

async function getMovie(movieId) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
  );
  return await res.json();
}

export default async function MoviePage({ params }) {
  // Await params before accessing id
  const movieParams = await params;
  const movieId = movieParams.id;
  
  const movie = await getMovie(movieId);
  
  // Add handling for missing image paths
  const imagePath = movie.backdrop_path || movie.poster_path;
  
  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
        {imagePath ? (
          <Image
            src={`https://image.tmdb.org/t/p/original/${imagePath}`}
            width={500}
            height={300}
            className="rounded-lg"
            style={{
              maxWidth: "100%",
              height: "100%",
            }}
            placeholder="blur"
            blurDataURL="/spinner.svg"
            alt="Movie poster"
          />
        ) : (
          <div 
            className="flex items-center justify-center bg-gray-200 dark:bg-gray-600 rounded-lg"
            style={{ height: "300px", width: "500px", maxWidth: "100%" }}
          >
            <p className="text-gray-500 dark:text-gray-400">No image available</p>
          </div>
        )}
        <div className="p-2">
          <h2 className="text-lg mb-3 font-bold">
            {movie.title || movie.name}
          </h2>
          <p className="text-lg mb-3">
            <span className="font-semibold mr-1">Overview:</span>
            {movie.overview}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Date Released:</span>
            {movie.release_date || movie.first_air_date}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Rating:</span>
            {movie.vote_count}
          </p>
        </div>
      </div>
    </div>
  );
}