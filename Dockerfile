FROM node:6.10.1
ENV HOME=/home/sloppylopez
ENV JSPM_GITHUB_AUTH_TOKEN=

LABEL vendor=SloppyLopez\
      com.whalephantseed.version="2.0.0" \
      com.whalephantseed.release-date="2017-03-25"

RUN useradd -ms /bin/bash sloppylopez

ADD app $HOME/app
COPY package.json npm-shrinkwrap.json $HOME/
RUN chown -R sloppylopez:sloppylopez $HOME/*

USER sloppylopez
WORKDIR $HOME
RUN npm i &&\
    cd app && npm i &&\
    node_modules/.bin/jspm i --lock

CMD ["node", "index.js"]