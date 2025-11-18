import React from "react";
import type { NextPage } from "next";
import Layout from "@/src/components/Layout";
import { BookingListComponent } from "@/src/features/vacation_booking";

/**
 * Página principal do Board, acessível pela rota /home.
 * Exibe a lista real dos pedidos de férias utilizando o endpoint http://localhost:8080/bookings
 */
const HomePage: NextPage = () => {
  return (
    <Layout>
      <h1 className="text-4xl font-extrabold text-indigo-700 mb-6 border-b border-indigo-500 pb-2">
        Board Principal dos Pedidos de Férias
      </h1>
      <p className="text-gray-600 mb-8">
        Esta é a principal área do Board onde os usuários podem visualizar e
        gerenciar seus pedidos de férias.
      </p>

      {/* Componente que lista os pedidos de férias reais */}
      <BookingListComponent />
    </Layout>
  );
};

export default HomePage;
