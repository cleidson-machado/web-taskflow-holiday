import React from 'react';
import type { NextPage } from 'next';

const RegisterPage: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      {/* Mensagem principal simples */}
      <h1 className="text-5xl font-extrabold text-indigo-600 text-center">
        Hello Register Page
      </h1>
      {/* Texto de apoio */}
      <p className="mt-4 text-xl text-gray-500 text-center">
        Esta é a sua página de registro minimalista e pronta para a rota /register.
      </p>
    </div>
  );
};

export default RegisterPage;