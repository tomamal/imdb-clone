import { MovieProps } from "@/app/page";
import Image from "next/image";

export default function MovieCard({ movie }: { movie: MovieProps }) {
  return (
    <div className="flex flex-col gap-2 border border-gray-200 rounded-lg p-2">
      <Image
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        alt={movie.original_title}
        width={400}
        height={200}
        className="object-contain"
      />
      <p className="text-sm font-normal truncate">{movie.overview}</p>
      <h2 className="text-sm font-semibold truncate">{movie.original_title}</h2>
      <div className="flex items-center justify-between">
        <span className="text-xs">{movie.release_date}</span>
        <span className="text-xs">{movie.vote_count}</span>
      </div>
    </div>
  );
}
