'use client'; // Necessário para usar hooks como useState

import React, { useState } from 'react';
import { LogIn, Rocket } from 'lucide-react';

// Este é o componente principal da sua Home Page.
export default function HomePage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulação de lógica de login (substitua pela sua chamada API real)
    setTimeout(() => {
      console.log('Tentativa de Login:', { email, password });
      alert('Login simulado. Verifique o console para os dados.');
      setIsLoading(false);
    }, 1500);
  };

  return (
    // Container principal: tela cheia, centralizado e com fundo suave
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-start py-8 sm:py-16 px-4">
      
      {/* 1. Área do Logo (Centralizado Horizontalmente, 25px do topo) */}
      {/* O 'mt-6' (24px) ou 'mt-7' (28px) do Tailwind é o mais próximo de 25px. Usarei mt-6. */}
      <div className="mt-6 sm:mt-8 flex flex-col items-center justify-center mb-8">
        <Rocket className="w-16 h-16 text-indigo-600 animate-bounce-slow" />
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mt-2">
          TaskFlow Holiday
        </h1>
        <p className="text-sm text-indigo-500 font-medium">
            Gerenciamento de Tarefas Inteligente
        </p>
      </div>

      {/* 2. Formulário de Login Padrão (Card Centralizado) */}
      <div className="w-full max-w-sm bg-white p-8 rounded-xl shadow-2xl border border-gray-100">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Acesso ao Sistema
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              E-mail ou Usuário
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="text" // Usando 'text' para suportar tanto e-mail quanto nome de usuário
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150"
                placeholder="seunome@empresa.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Senha
            </label>
            <div className="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150"
                placeholder="Sua senha secreta"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm">
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                Esqueceu sua senha?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-md text-sm font-medium text-white transition duration-200 ${
                isLoading 
                  ? 'bg-indigo-400 cursor-not-allowed' 
                  : 'bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              }`}
            >
              {isLoading ? (
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                <><LogIn className="w-5 h-5 mr-2" /> Entrar</>
              )}
            </button>
          </div>
        </form>
      </div>
      
      {/* Opção de Cadastro */}
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          Não tem uma conta?{' '}
          <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
            Crie uma aqui
          </a>
        </p>
      </div>
    </div>
  );
}

const bounceSlow = `
  @keyframes bounce-slow {
    0%, 100% {
      transform: translateY(-5%);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    50% {
      transform: translateY(0);
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
  }
  .animate-bounce-slow {
    animation: bounce-slow 4s infinite;
  }
`;

// Injeta o CSS customizado para a animação lenta (melhor UX que a nativa do Tailwind)
if (typeof window !== 'undefined' && !document.getElementById('bounce-slow-style')) {
    const style = document.createElement('style');
    style.id = 'bounce-slow-style';
    style.innerHTML = bounceSlow;
    document.head.appendChild(style);
}