export interface EmployeeDto {
  id: string;
  name: string;
  surname: string;
  fiscalNumber: string;
}

export interface BookingDto {
  id: string;
  employee: EmployeeDto;
  vacationId: string | null;
  startDate: string; // YYYY-MM-DD
  endDate: string; // YYYY-MM-DD
  daysReserved: number;
  bookingStatus: "RESERVED" | "APPROVED" | "CANCELLED";
  isActive: boolean;
  requestNotes: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  deletedBy: string | null;
}

export interface PaginatedBookingsResponseDto {
  content: BookingDto[];
  totalItems: number;
  totalPages: number;
  currentPage: number;
}

export interface Booking {
  id: string;
  employeeFullName: string; // Campo mapeado para facilitar a exibição
  startDate: Date; // Convertido para objeto Date para fácil formatação
  endDate: Date; // Convertido para objeto Date para fácil formatação
  daysReserved: number;
  status: "RESERVED" | "APPROVED" | "CANCELLED";
  requestNotes: string;
}
