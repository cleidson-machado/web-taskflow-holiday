import { PaginatedBookingsResponseDto } from "./types";

export class BookingService {
  private baseUrl = "http://localhost:8080/bookings";

  async getBookings(): Promise<PaginatedBookingsResponseDto> {
    try {
      const response = await fetch(this.baseUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error("Error fetching bookings:", error);
      throw error;
    }
  }
}
