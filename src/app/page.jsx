

export const dynamic = 'force-dynamic'; // Add this at the top

import Results from "@/components/Results";

const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
  // Need to await searchParams before accessing
  const params = await searchParams;
  const genre = params?.genre || "fetchTrending";

  // Validate API_KEY first
  if (!API_KEY) {
    throw new Error("Missing TMDB API Key");
  }

  const apiUrl = `https://api.themoviedb.org/3/${
    genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
  }?api_key=${API_KEY}&language=en-US&page=1`;

  const res = await fetch(apiUrl, { next: { revalidate: 3600 } }); // 1 hour cache

  if (!res.ok) {
    throw new Error(`Failed to fetch data: ${res.statusText}`);
  }

  const data = await res.json();

  return (
    <div className="container mx-auto p-4">
      <Results results={data.results || []} />
    </div>
  );
}