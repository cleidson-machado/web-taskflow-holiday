import React from "react";
import { useBookingViewModel } from "./useBookingViewModel";

export const BookingListComponent: React.FC = () => {
  const { bookings, totalItems, loading, error, refetch } =
    useBookingViewModel();

  if (loading) {
    return <div>Carregando reservas...</div>;
  }

  if (error) {
    return (
      <div>
        <p>Erro: {error}</p>
        <button onClick={refetch}>Tentar novamente</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Reservas de Férias ({totalItems} total)</h2>
      <button onClick={refetch}>Atualizar</button>

      <div>
        {bookings.map((booking) => (
          <div key={booking.id} className="booking-item">
            <h3>{booking.employeeFullName}</h3>
            <p>
              {booking.startDate.toLocaleDateString()} até{" "}
              {booking.endDate.toLocaleDateString()}
            </p>
            <p>
              {booking.daysReserved} dias - Status: {booking.status}
            </p>
            <p>Observações: {booking.requestNotes}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
