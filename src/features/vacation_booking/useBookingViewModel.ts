"use client";

import { useState, useEffect } from "react";
import { BookingService } from "./bookingService";
import { BookingModel } from "./bookingModel";
import { Booking } from "./types";

// Hook personalizado que implementa o ViewModel MVVM
export function useBookingViewModel() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const bookingService = new BookingService();

  const loadBookings = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await bookingService.getBookings();
      const bookingsData = BookingModel.fromDtoArray(response.content);

      setBookings(bookingsData);
      setTotalItems(response.totalItems);
      setTotalPages(response.totalPages);
      setCurrentPage(response.currentPage);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Erro ao carregar reservas"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadBookings();
  }, []);

  return {
    bookings,
    totalItems,
    totalPages,
    currentPage,
    loading,
    error,
    refetch: loadBookings,
  };
}
