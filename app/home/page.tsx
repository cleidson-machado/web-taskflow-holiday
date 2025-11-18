import React from 'react';
import type { NextPage } from 'next';
import Layout from '@/src/components/Layout';

/**
 * Página principal do Board, acessível pela rota /board.
 * O conteúdo é envolvido pelo Layout, permitindo que apenas esta área role.
 */
const HomePage = () => {
  // Array para gerar conteúdo suficiente para forçar a rolagem vertical
  const dummyContent = Array.from({ length: 40 }, (_, i) => i + 1);

  return (
    // Envolve o conteúdo com o componente Layout
    <Layout>
      <h1 className="text-4xl font-extrabold text-indigo-700 mb-6 border-b border-indigo-500 pb-2">
        Board Principal de Tarefas
      </h1>
      <p className="text-gray-600 mb-8">
        Esta seção é a única área do layout que permite a rolagem vertical.
      </p>

      {/* Conteúdo rolável para demonstração */}
      <div className="space-y-4">
        {dummyContent.map((item) => (
          <div
            key={item}
            // Alterado de bg-gray-800 para bg-white e texto ajustado para fundo claro
            className="p-4 bg-white rounded-lg shadow-lg hover:shadow-indigo-500/50 transition duration-300 border-l-4 border-indigo-600"
          >
            <h2 className="text-xl font-semibold text-gray-800">Cartão de Tarefa #{item}</h2>
            <p className="mt-1 text-sm text-gray-500">
              Descrição breve da tarefa {item}. O Header e a Sidebar permanecerão fixos enquanto você move esta barra de rolagem.
            </p>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default HomePage;