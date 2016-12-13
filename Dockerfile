FROM node:0.12.9

WORKDIR /app
EXPOSE 8000

CMD ["npm", "start"]