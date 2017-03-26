FROM node:6.10.1
ENV HOME=/home/whalephant
ENV JSPM_GITHUB_AUTH_TOKEN=c2xvcHB5bG9wZXo6MThOM20zczFz

LABEL vendor=SloppyLopez\
      com.whalephant.version="1.0.0" \
      com.whalephant.release-date="2017-03-25"

RUN useradd -ms /bin/bash whalephant

ADD app $HOME/app
COPY package.json npm-shrinkwrap.json $HOME/
COPY app/package.json npm-shrinkwrap.json $HOME/
RUN chown -R whalephant:whalephant $HOME/*

USER whalephant
WORKDIR $HOME
RUN npm i &&\
    cd app && npm i &&\
    node_modules/.bin/jspm i --lock

CMD ["node", "index.js"]