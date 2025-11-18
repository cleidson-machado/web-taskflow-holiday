#!/bin/bash

# Deploy script for Hostinger VPS
# Usage: ./deploy.sh

set -e

echo "🚀 Starting deployment of Web TaskFlow Holiday..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    print_error "Docker is not installed. Please install Docker first."
    exit 1
fi

# Check if Docker Compose is installed
if ! command -v docker-compose &> /dev/null; then
    print_error "Docker Compose is not installed. Please install Docker Compose first."
    exit 1
fi

# Stop existing containers
print_status "Stopping existing containers..."
docker-compose -f docker-compose-web-app.yml down || true

# Remove old images
print_status "Cleaning up old Docker images..."
docker system prune -f

# Build and start containers
print_status "Building and starting containers..."
docker-compose -f docker-compose-web-app.yml up --build -d

# Wait for services to be ready
print_status "Waiting for services to be ready..."
sleep 30

# Check if services are running
if docker-compose -f docker-compose-web-app.yml ps | grep -q "Up"; then
    print_status "✅ Services are running successfully!"
    
    print_status "📊 Container Status:"
    docker-compose -f docker-compose-web-app.yml ps
    
    print_status "📋 Service URLs:"
    echo "   • Application: http://localhost:3000"
    echo "   • Nginx (HTTP): http://localhost:80"
    echo "   • Nginx (HTTPS): https://localhost:443"
    
    print_status "📝 Logs command: docker-compose -f docker-compose-web-app.yml logs -f"
    print_status "🔄 Restart command: docker-compose -f docker-compose-web-app.yml restart"
    print_status "🛑 Stop command: docker-compose -f docker-compose-web-app.yml down"
    
else
    print_error "❌ Some services failed to start. Check logs:"
    docker-compose -f docker-compose-web-app.yml logs
    exit 1
fi

print_status "🎉 Deployment completed successfully!"