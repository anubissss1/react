import React from "react";

export default function CheckoutSummary({ order, onFinish }) {
if (!order) return null;

return (
<div className="p-4 border rounded-lg bg-white">
<h3 className="text-lg font-semibold">Order Summary</h3>
<p className="text-sm text-gray-600">Name: {order.name}</p>
<p className="text-sm">Movie: {order.movieTitle}</p>
<p className="text-sm">Showtime: {order.showtime}</p>
<p className="text-sm">Tickets: {order.tickets}</p>
<p className="text-sm font-medium">Total: ${order.total.toFixed(2)}</p>

<div className="mt-3 flex gap-2">
<button onClick={() => { alert('Payment simulated — Thank you!'); onFinish(); }} className="px-3 py-1 bg-blue-600 text-white rounded">Pay</button>
<button onClick={onFinish} className="px-3 py-1 border rounded">Cancel</button>
</div>
</div>
);
}