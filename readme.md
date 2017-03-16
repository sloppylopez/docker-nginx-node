# Docker Nginx NodeJS
Barebones Web Server & Application Server configuration template for Web development purposes

## Prerequisites
  * Docker
  * Docker-Compose

## Installation
You need to add this line to your hosts file:
```
127.0.0.1 docker.nginx.node.com
```

```bash
$ npm install
```

### Available commands
Dockerless NodeJS Server
```bash
$ npm start
```

Docker Nginx + Docker NodeJS Server connected using HTTPS and Custom Domain
```bash
$ npm run serve
```

Stop all Docker processes
```bash
$ npm run stop
```

Docker NodeJS Server Standalone
```bash
$ npm run node:standalone
```
### Usage
```bash
$ npm run serve
```

Then open a browser https://docker.nginx.node.com

Enjoy!
ڪ.


