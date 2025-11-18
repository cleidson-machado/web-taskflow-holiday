# 🏖️ Web TaskFlow Holiday

> **Sistema de Gestão de Férias** desenvolvido com Next.js, implementando padrão **MVVM** e técnicas avançadas de desenvolvimento frontend.

## 📋 Sobre o Projeto

Este projeto é parte de um **desafio técnico para vaga de FullStack Developer** (Java + React/Next.js) e demonstra minhas habilidades em:

- ✅ **Next.js 16** com App Router
- ✅ **React 19** com hooks modernos
- ✅ **TypeScript** para type safety
- ✅ **Tailwind CSS** para estilização
- ✅ **Padrão MVVM** (Model-View-ViewModel)
- ✅ **Docker** para containerização
- ✅ **Arquitetura limpa** com separação de responsabilidades

### 🎯 **Estado Atual do Projeto**

⚠️ **Nota Importante**: Devido a limitações de tempo e complexidades técnicas, este projeto pode não conter todas as funcionalidades de interação com usuário e integração completa com todos os endpoints do backend. Entretanto, representa um **exemplo sólido das minhas competências técnicas** em desenvolvimento frontend moderno.

🚀 **Compromisso**: Continuarei implementando novas funcionalidades ao longo desta semana como demonstração da minha dedicação e capacidades profissionais.

---

## 🏗️ **Arquitetura MVVM**

O projeto implementa o padrão **Model-View-ViewModel** de forma simplificada e eficiente:

```
📁 src/features/vacation_booking/
├── 📄 types.ts              # Model - Definições de tipos
├── 📄 bookingService.ts     # Service - Comunicação API
├── 📄 bookingModel.ts       # Model - Transformações de dados
├── 📄 useBookingViewModel.ts # ViewModel - Lógica de negócio + Estado
├── 📄 BookingListComponent.tsx # View - Componente React
└── 📄 index.ts              # Exports centralizados
```

### ✨ **Benefícios da Arquitetura**:

- **Separação clara** entre lógica de negócio e apresentação
- **Reutilização** de componentes e ViewModels
- **Testabilidade** aprimorada
- **Manutenibilidade** do código

---

## 🚀 **Como Executar o Projeto**

### **Opção 1: Desenvolvimento Local (Sem Docker)**

```bash
# 1. Instalar dependências
npm install

# 2. Executar em modo desenvolvimento
npm run dev

# 3. Acessar a aplicação
# URL: http://localhost:3000
# Home: http://localhost:3000/home
```

### **Opção 2: Docker (Recomendado)**

```bash
# 1. Build e execução com Docker Compose
docker-compose -f docker-compose-dev.yml up -d --build

# 2. Verificar status dos containers
docker-compose -f docker-compose-dev.yml ps

# 3. Ver logs em tempo real
docker-compose -f docker-compose-dev.yml logs -f

# 4. Acessar a aplicação
# URL: http://localhost:3000
# Home: http://localhost:3000/home

# 5. Parar containers
docker-compose -f docker-compose-dev.yml down
```

### **Opção 3: Build de Produção**

```bash
# Build otimizado para produção
npm run build
npm start

# Ou com Docker para produção
docker-compose -f docker-compose-web-app.yml up -d --build
```

---

## 🔧 **Scripts Disponíveis**

```bash
npm run dev       # Servidor de desenvolvimento
npm run build     # Build de produção
npm start         # Executar build de produção
npm run lint      # Verificar código com ESLint
npm run clean     # Limpar cache e node_modules
npm run rebuild   # Clean + Build completo
```

---

## 🛠️ **Stack Tecnológica**

| Tecnologia       | Versão | Descrição                      |
| ---------------- | ------ | ------------------------------ |
| **Next.js**      | 16.0.3 | Framework React com App Router |
| **React**        | 19.2.0 | Biblioteca para interfaces     |
| **TypeScript**   | ^5.0   | Superset tipado do JavaScript  |
| **Tailwind CSS** | ^4.0   | Framework CSS utilitário       |
| **Docker**       | -      | Containerização da aplicação   |
| **Node.js**      | 20 LTS | Runtime JavaScript             |

---

## 📂 **Estrutura do Projeto**

```
📁 web-taskflow-holiday/
├── 📁 app/                    # App Router (Next.js 13+)
│   ├── 📄 layout.tsx         # Layout global
│   ├── 📄 page.tsx           # Página inicial
│   └── 📁 home/              # Rota /home
│       └── 📄 page.tsx       # Dashboard principal
│
├── 📁 src/
│   ├── 📁 components/        # Componentes reutilizáveis
│   │   └── 📄 Layout.tsx    # Layout com sidebar
│   └── 📁 features/         # Features organizadas por domínio
│       └── 📁 vacation_booking/  # Feature de reserva de férias
│
├── 📁 nginx/                 # Configuração Nginx (produção)
├── 📄 Dockerfile            # Container da aplicação
├── 📄 docker-compose-*.yml  # Orquestração Docker
├── 📄 next.config.ts        # Configuração Next.js
├── 📄 tailwind.config.ts    # Configuração Tailwind
└── 📄 package.json          # Dependências e scripts
```

---

## 🔌 **Integração Backend**

O frontend está preparado para integração com API REST:

```bash
# Variável de ambiente para API
NEXT_PUBLIC_API_URL=http://localhost:8080

# Endpoint principal (exemplo)
GET /bookings - Lista pedidos de férias
```

**Configuração para Docker**:

```yaml
environment:
  - NEXT_PUBLIC_API_URL=http://host.docker.internal:8080
```

---

## 📊 **Funcionalidades Implementadas**

### ✅ **Dashboard de Férias**

- Listagem de pedidos de férias
- Cards responsivos com informações detalhadas
- Estados de loading e erro
- Refresh manual dos dados

### ✅ **Sistema de Design**

- Layout responsivo com Tailwind CSS
- Sidebar navegacional fixa
- Headers de segurança
- Indicadores visuais de status

### ✅ **Arquitetura Robusta**

- Padrão MVVM implementado
- Custom hooks para lógica de negócio
- Separação clara de responsabilidades
- TypeScript em toda aplicação

---

## 🐳 **Deploy e Produção**

### **Deploy VPS/Cloud**

Consulte o arquivo [DEPLOY.md](./DEPLOY.md) para instruções completas de deploy em ambiente de produção.

### **Principais Recursos**:

- ✅ Build multi-stage otimizado
- ✅ Nginx como proxy reverso
- ✅ SSL/HTTPS configurado
- ✅ Health checks
- ✅ Logs centralizados
- ✅ Restart automático

---

## 🎯 **Próximos Passos**

### **Semana Atual** (Implementação Contínua):

- [ ] Formulário de criação de pedidos
- [ ] Sistema de autenticação
- [ ] Dashboard administrativo
- [ ] Filtros e paginação
- [ ] Notificações em tempo real
- [ ] Testes unitários e integração

### **Melhorias Futuras**:

- [ ] PWA (Progressive Web App)
- [ ] Internacionalização (i18n)
- [ ] Dark mode
- [ ] Analytics e métricas

---

## 🤝 **Sobre o Desenvolvimento**

Este projeto demonstra **competências técnicas sólidas** em desenvolvimento frontend moderno, incluindo:

- 🎯 **Arquitetura escalável** com padrões de design
- 🛠️ **Tooling moderno** (TypeScript, Tailwind, Docker)
- 📱 **UI/UX responsiva** e acessível
- 🔄 **DevOps practices** com containerização
- 📝 **Código limpo** e bem documentado

**Desenvolvido como parte do processo seletivo para vaga de FullStack Developer**

---

## 📞 **Contato**

**Cleidson Machado**

- LinkedIn: [cleidson-machado](https://linkedin.com/in/cleidson-machado)
- GitHub: [cleidson-machado](https://github.com/cleidson-machado)
- Email: cleidson.dev@email.com

---

_🚀 "Código limpo não é escrito seguindo um conjunto de regras. Você não se torna um artesão de software lendo um livro. Você se torna através de muito trabalho duro e prática." - Robert C. Martin_
