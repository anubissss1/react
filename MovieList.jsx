import React from "react";
import MovieCard from "./MovieCard";

export default function MovieList({ movies, onSelect }) {
if (!movies || movies.length === 0) return <p>No movies found.</p>;
return (
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
{movies.map((m) => (
<MovieCard key={m.id} movie={m} onSelect={onSelect} />
))}
</div>
);
}