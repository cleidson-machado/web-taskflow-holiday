import React, { ReactNode } from "react";
import { Home, ListChecks, User, LogOut, LayoutDashboard } from "lucide-react";

// Define a interface para as propriedades do componente
interface LayoutProps {
  children: ReactNode;
}

/**
 * Componente principal de Layout para a aplicação Next.js.
 * Implementa um design fixo de Header e Sidebar com Conteúdo Principal rolável.
 */
const Layout: React.FC<LayoutProps> = ({ children }) => {
  // Dados de mock para o menu da Sidebar
  const navItems = [
    { name: "Home", icon: LayoutDashboard, href: "/home" },
    { name: "FÉRIAS - Reservas", icon: ListChecks, href: "/bookings" },
    { name: "FÉRIAS - Registradas", icon: ListChecks, href: "/vacations" },
    { name: "ADMIN - Empregados", icon: ListChecks, href: "/employees" },
    { name: "MEU Perfil", icon: User, href: "/profile" },
  ];

  return (
    // Removido o background escuro global para que o corpo da página possa ser claro.
    <div className="min-h-screen">
      {/* 1. Header (Topo Fixo - h-16, bg-gray-800) */}
      <header className="fixed top-0 left-0 w-full h-16 bg-gray-800 z-50 shadow-xl flex items-center px-6 text-white">
        <div className="text-xl font-bold text-indigo-400">TaskFlow</div>
        <div className="ml-auto flex items-center space-x-4">
          <span className="text-sm text-gray-400 hidden sm:inline">
            Usuário: Admin
          </span>
          <LogOut className="w-5 h-5 cursor-pointer text-gray-400 hover:text-red-400 transition" />
        </div>
      </header>

      {/* Container que gerencia a Sidebar e o Conteúdo */}
      <div className="flex pt-16 h-screen">
        {/* 2. Sidebar (Menu Lateral Fixo - w-64, bg-gray-700) */}
        <aside className="fixed left-0 top-16 w-64 h-[calc(100vh-4rem)] bg-gray-700 z-40 p-4 shadow-2xl text-white">
          <nav className="space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-3 p-3 text-sm font-medium rounded-lg text-gray-200 hover:bg-indigo-600 hover:text-white transition duration-200"
              >
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
              </a>
            ))}
          </nav>
        </aside>

        {/* 3. Main Content (Conteúdo Principal com Rolagem) */}
        {/* Adicionado bg-gray-100 e text-gray-900 para tema claro na área de conteúdo. */}
        <main className="ml-64 flex-1 p-8 overflow-y-auto bg-gray-100 text-gray-900">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
