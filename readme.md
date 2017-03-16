# Docker Nginx NodeJS
Barebones Web Server & Application Server configuration template for Web development purposes

## Prerequisites
  * Docker
  * Docker-Compose

### Usage
start -> node index.js (Dockerless NodeJS Server)

serve -> docker-compose up (Docker Nginx + Docker NodeJS Server connected using HTTPS and Custom Domain)

stop -> docker stop $(docker ps -a -q) (Stop all Docker processes)

node:standalone -> docker-compose up -d portal (Docker NodeJS Server Standalone)





