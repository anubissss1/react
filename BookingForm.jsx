import React, { useState } from "react";

export default function BookingForm({ movie, onBook, onCancel }) {
  const [name, setName] = useState("");
  const [tickets, setTickets] = useState(1);
  const [showtime, setShowtime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !showtime) return alert("Please fill all fields!");
    onBook({ name, tickets, showtime, movie });
  };

  return (
    <div className="p-4 border rounded">
      <h2 className="text-xl font-semibold mb-2">Book Tickets for {movie.title}</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 w-full"
        />
        <input
          type="number"
          min="1"
          value={tickets}
          onChange={(e) => setTickets(Number(e.target.value))}
          className="border p-2 w-full"
        />
        <select
          value={showtime}
          onChange={(e) => setShowtime(e.target.value)}
          className="border p-2 w-full"
        >
          <option value="">Select Showtime</option>
          <option>12:00 PM</option>
          <option>3:00 PM</option>
          <option>6:00 PM</option>
          <option>9:00 PM</option>
        </select>

        <div className="flex gap-2">
          <button type="submit" className="bg-blue-600 text-white px-3 py-1 rounded">
            Book
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-400 text-white px-3 py-1 rounded"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
