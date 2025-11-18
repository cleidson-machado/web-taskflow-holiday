# 🚀 Deploy Guide - Web TaskFlow Holiday

Este guia explica como fazer o deploy da aplicação Next.js no seu VPS da Hostinger usando Docker.

## 📋 Pré-requisitos

1. **VPS Hostinger configurado** com acesso SSH
2. **Docker** instalado no VPS
3. **Docker Compose** instalado no VPS
4. **Domínio apontado** para o IP do VPS (opcional para HTTPS)

## 🔧 Configuração Inicial no VPS

### 1. Instalação do Docker (se não estiver instalado)

```bash
# Atualizar o sistema
sudo apt update && sudo apt upgrade -y

# Instalar Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER

# Instalar Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Verificar instalação
docker --version
docker-compose --version
```

### 2. Clonagem do Projeto

```bash
# Clonar o repositório no VPS
git clone https://github.com/cleidson-machado/web-taskflow-holiday.git
cd web-taskflow-holiday
```

## ⚙️ Configuração

### 1. Configurar Variáveis de Ambiente

Edite o arquivo `.env.production`:

```bash
nano .env.production
```

Atualize as seguintes variáveis:

```env
# Substitua pela URL do seu backend
NEXT_PUBLIC_API_URL=http://seu-backend-url:8080

# Substitua pelo seu domínio
DOMAIN=seu-dominio.com

# URL do backend
BACKEND_URL=http://seu-backend-url:8080
```

### 2. Configurar Nginx (Opcional - para domínio próprio)

Edite o arquivo de configuração do Nginx:

```bash
nano nginx/sites-available/taskflow-holiday.conf
```

Substitua `your-domain.com` pelo seu domínio real.

### 3. Certificados SSL (para HTTPS)

Se você tem um domínio, coloque os certificados SSL em:

- `nginx/ssl/cert.pem` - Certificado
- `nginx/ssl/key.pem` - Chave privada

## 🚀 Deploy

### Opção 1: Deploy Automático

Execute o script de deploy:

```bash
./deploy.sh
```

### Opção 2: Deploy Manual

```bash
# Parar containers existentes
docker-compose -f docker-compose-web-app.yml down

# Construir e iniciar
docker-compose -f docker-compose-web-app.yml up --build -d

# Verificar status
docker-compose -f docker-compose-web-app.yml ps
```

## 📊 Monitoramento

### Verificar Logs

```bash
# Logs de todos os serviços
docker-compose -f docker-compose-web-app.yml logs -f

# Logs apenas da aplicação
docker-compose -f docker-compose-web-app.yml logs -f web-taskflow-holiday

# Logs apenas do Nginx
docker-compose -f docker-compose-web-app.yml logs -f nginx
```

### Comandos Úteis

```bash
# Reiniciar serviços
docker-compose -f docker-compose-web-app.yml restart

# Parar todos os serviços
docker-compose -f docker-compose-web-app.yml down

# Ver status dos containers
docker-compose -f docker-compose-web-app.yml ps

# Entrar no container da aplicação
docker-compose -f docker-compose-web-app.yml exec web-taskflow-holiday sh
```

## 🔗 Acessos

Após o deploy, a aplicação estará disponível em:

- **Desenvolvimento**: `http://seu-vps-ip:3000`
- **Produção (HTTP)**: `http://seu-vps-ip` ou `http://seu-dominio.com`
- **Produção (HTTPS)**: `https://seu-dominio.com` (se configurado SSL)

## 🔒 Firewall (Recomendado)

Configure o firewall para permitir apenas as portas necessárias:

```bash
# Instalar UFW (se não estiver instalado)
sudo apt install ufw

# Configurar regras básicas
sudo ufw default deny incoming
sudo ufw default allow outgoing

# Permitir SSH
sudo ufw allow ssh

# Permitir HTTP e HTTPS
sudo ufw allow 80
sudo ufw allow 443

# Ativar firewall
sudo ufw enable

# Verificar status
sudo ufw status
```

## 🔄 Atualizações

Para atualizar a aplicação:

```bash
# Baixar últimas mudanças
git pull origin main

# Rebuildar e reiniciar
docker-compose -f docker-compose-web-app.yml up --build -d
```

## 🆘 Troubleshooting

### Problema: Aplicação não carrega

1. Verifique se os containers estão rodando:

   ```bash
   docker-compose -f docker-compose-web-app.yml ps
   ```

2. Verifique os logs:
   ```bash
   docker-compose -f docker-compose-web-app.yml logs web-taskflow-holiday
   ```

### Problema: Erro de conexão com backend

1. Verifique se a URL do backend está correta em `.env.production`
2. Certifique-se de que o backend está rodando e acessível
3. Verifique se não há bloqueios de firewall

### Problema: Certificado SSL

1. Verifique se os arquivos estão no local correto: `nginx/ssl/`
2. Verifique as permissões dos arquivos de certificado
3. Confirme se o domínio está apontando para o IP correto

## 📞 Suporte

Se encontrar problemas, verifique:

1. **Logs dos containers**: `docker-compose logs`
2. **Status dos serviços**: `docker-compose ps`
3. **Conectividade de rede**: `ping seu-backend-url`
4. **Espaço em disco**: `df -h`
5. **Memória disponível**: `free -h`
