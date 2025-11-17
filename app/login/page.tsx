import React from 'react';
import type { NextPage } from 'next';

// Este componente representa a página de login mais simples possível,
// acessível pela rota /login.
const LoginPage: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      {/* Mensagem principal simples */}
      <h1 className="text-5xl font-extrabold text-indigo-600 text-center">
        Hello Login Page
      </h1>
      {/* Texto de apoio */}
      <p className="mt-4 text-xl text-gray-500 text-center">
        Esta é a sua página de login minimalista e pronta para a rota /login.
      </p>
    </div>
  );
};

export default LoginPage;