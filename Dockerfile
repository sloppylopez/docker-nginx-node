FROM node:6.10.1

LABEL vendor=SloppyLopez\
      com.dnn.version="2.0.0" \
      com.dnn.release-date="2017-03-25"

RUN useradd -ms /bin/bash sloppylopez

ENV HOME=/home/sloppylopez

COPY package.json npm-shrinkwrap.json $HOME/
RUN chown -R sloppylopez:sloppylopez $HOME/*

USER sloppylopez
WORKDIR $HOME
RUN npm install

CMD ["node", "index.js"]