import React, { useState, useEffect } from "react";
import MovieList from "./components/MovieList";
import BookingForm from "./components/BookingForm";
import CheckoutSummary from "./components/CheckoutSummary";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [bookingData, setBookingData] = useState(null);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const res = await fetch("https://ghibliapi.vercel.app/films");
        if (!res.ok) throw new Error("Failed to fetch movies");
        const data = await res.json();
        setMovies(data.slice(0, 8)); // limit to 8 for layout
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchMovies();
  }, []);

  const handleBookClick = (movie) => setSelectedMovie(movie);
  const handleBookingSubmit = (data) => {
    setBookingData(data);
    setSelectedMovie(null);
  };
  const handleCancel = () => setSelectedMovie(null);
  const handlePay = () => {
    alert("Payment successful! Enjoy your movie 🎬");
    setBookingData(null);
  };

  if (loading) return <p className="p-4">Loading movies...</p>;
  if (error) return <p className="p-4 text-red-500">Error: {error}</p>;

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">🎟 Movie Ticket Booking</h1>

      {!selectedMovie && !bookingData && (
        <MovieList movies={movies} onBook={handleBookClick} />
      )}

      {selectedMovie && !bookingData && (
        <BookingForm
          movie={selectedMovie}
          onBook={handleBookingSubmit}
          onCancel={handleCancel}
        />
      )}

      {bookingData && <CheckoutSummary bookingData={bookingData} onPay={handlePay} />}
    </div>
  );
}
