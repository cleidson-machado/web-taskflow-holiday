import { BookingDto, Booking } from "./types";

export class BookingModel {
  static fromDto(dto: BookingDto): Booking {
    return {
      id: dto.id,
      employeeFullName: `${dto.employee.name} ${dto.employee.surname}`,
      startDate: new Date(dto.startDate),
      endDate: new Date(dto.endDate),
      daysReserved: dto.daysReserved,
      status: dto.bookingStatus,
      requestNotes: dto.requestNotes,
    };
  }

  static fromDtoArray(dtos: BookingDto[]): Booking[] {
    return dtos.map((dto) => this.fromDto(dto));
  }
}
