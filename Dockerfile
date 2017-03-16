FROM node:0.12.9

WORKDIR /app
EXPOSE 3000

CMD ["npm", "start"]