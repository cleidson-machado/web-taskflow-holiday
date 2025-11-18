"use client";

import React from "react";
import { useBookingViewModel } from "./useBookingViewModel";

export const BookingListComponent: React.FC = () => {
  const { bookings, totalItems, loading, error, refetch } =
    useBookingViewModel();

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
        <span className="ml-3 text-gray-600">
          Carregando pedidos de férias...
        </span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
          <h3 className="text-lg font-semibold text-red-800 mb-2">
            Erro ao carregar dados
          </h3>
          <p className="text-red-600 mb-4">{error}</p>
          <button
            onClick={refetch}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-200"
          >
            Tentar novamente
          </button>
        </div>
      </div>
    );
  }

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      RESERVED: {
        color: "bg-yellow-100 text-yellow-800 border-yellow-200",
        label: "Reservado",
      },
      APPROVED: {
        color: "bg-green-100 text-green-800 border-green-200",
        label: "Aprovado",
      },
      CANCELLED: {
        color: "bg-red-100 text-red-800 border-red-200",
        label: "Cancelado",
      },
    };

    const config =
      statusConfig[status as keyof typeof statusConfig] ||
      statusConfig.RESERVED;

    return (
      <span
        className={`px-3 py-1 rounded-full text-sm font-medium border ${config.color}`}
      >
        {config.label}
      </span>
    );
  };

  const formatDateRange = (startDate: Date, endDate: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    };

    return `${startDate.toLocaleDateString(
      "pt-BR",
      options
    )} até ${endDate.toLocaleDateString("pt-BR", options)}`;
  };

  return (
    <div>
      {/* Header com total de itens e botão de atualizar */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">
            Pedidos de Férias
          </h2>
          <p className="text-gray-600 mt-1">
            {totalItems}{" "}
            {totalItems === 1 ? "pedido encontrado" : "pedidos encontrados"}
          </p>
        </div>
        <button
          onClick={refetch}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-200 flex items-center gap-2"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
          Atualizar
        </button>
      </div>

      {/* Lista de cards */}
      <div className="space-y-4">
        {bookings.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <svg
                className="w-16 h-16 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Nenhum pedido encontrado
            </h3>
            <p className="text-gray-500">
              Não há pedidos de férias cadastrados no momento.
            </p>
          </div>
        ) : (
          bookings.map((booking) => (
            <div
              key={booking.id}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-indigo-500/50 transition duration-300 border-l-4 border-indigo-600"
            >
              {/* Header do card com nome e status */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {booking.employeeFullName}
                  </h3>
                  {/* <p className="text-sm text-gray-500 mt-1">ID: {booking.id}</p> */}
                </div>
                {getStatusBadge(booking.status)}
              </div>

              {/* Informações do período */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="flex items-center text-gray-600">
                  <svg
                    className="w-5 h-5 mr-2 text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-sm">
                    {formatDateRange(booking.startDate, booking.endDate)}
                  </span>
                </div>

                <div className="flex items-center text-gray-600">
                  <svg
                    className="w-5 h-5 mr-2 text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-sm font-medium">
                    {booking.daysReserved}{" "}
                    {booking.daysReserved === 1 ? "dia" : "dias"}
                  </span>
                </div>
              </div>

              {/* Observações */}
              {booking.requestNotes && (
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">
                    Observações:
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {booking.requestNotes}
                  </p>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};
