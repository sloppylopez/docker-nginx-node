FROM node:4.3.2

LABEL vendor=SloppyLopez\
      com.elephantseed.version="0.0.1-beta" \
      com.elephantseed.release-date="2017-03-25"

RUN useradd -ms /bin/bash sloppylopez &&\
  npm install --global npm@3.7.5

ENV HOME=/home/sloppylopez

COPY package.json npm-shrinkwrap.json $HOME/
RUN chown -R sloppylopez:sloppylopez $HOME/*

USER sloppylopez
WORKDIR $HOME
RUN npm install

CMD ["node", "index.js"]