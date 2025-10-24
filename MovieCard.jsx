import React from "react";

export default function MovieCard({ movie, onSelect }) {
return (
<div className="p-4 border rounded-lg shadow-sm bg-white">
<h3 className="text-lg font-semibold mb-1">{movie.title}</h3>
<p className="text-sm text-gray-600 mb-2">{movie.original_title} ({movie.release_date})</p>
<p className="text-sm mb-3 line-clamp-3">{movie.description}</p>
<div className="flex items-center justify-between">
<span className="text-xs text-gray-500">RT: {movie.rt_score}</span>
<button
onClick={() => onSelect(movie)}
className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
>
Book
</button>
</div>
</div>
);
}