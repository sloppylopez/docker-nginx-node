# Docker Nginx NodeJS
Barebones Web Server & Application Server configuration template for Web development purposes

## Prerequisites
    * Docker
    * Docker-Compose
  
##Features:
    * Express Server
    * Socket.io
    * Correct use of Docker caches, fast builds
    * Install inside Docker without root user

## Installation
You need to add this line to your hosts file:
```
127.0.0.1 docker.nginx.node.com
```

then

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

Build Docker image
```bash
$ npm run build
```

Stop all Docker processes
```bash
$ npm run stop
```

Docker NodeJS Server Standalone
```bash
$ npm run node:standalone
```

Testing through Docker container from host
```bash
$ docker-compose run --rm node-server /bin/bash -c 'npm test'
```

### Pitfalls
In case you see this message:

         Updating registry cache...
         Looking up github:twbs/bootstrap
         Downloading github:twbs/bootstrap@3.3.1
    
    err  Error downloading github:twbs/bootstrap
    
         GitHub rate limit reached. To increase the limit use GitHub authentication.
         Run jspm endpoint config github to set this up.
    
    warn Installation changes not saved.

You will need to pass your JSPM_GITHUB_AUTH_TOKEN to the seed, to do so just type:

```bash
$ jspm registry export github
```

And copy the value of registries.github.auth in Dockerfile <JSPM_GITHUB_AUTH_TOKEN>  

Open a browser https://docker.nginx.node.com

ڪ.


