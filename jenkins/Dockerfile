FROM jenkins/jenkins:lts

USER root

ENV NODE_VERSION 10.15.3

RUN cd home \
    && curl -SLO "https://nodejs.org/dist/v$NODE_VERSION/node-v$NODE_VERSION-linux-x64.tar.xz"  \
    && xz -d "node-v$NODE_VERSION-linux-x64.tar.xz" \
    && tar xvf "node-v$NODE_VERSION-linux-x64.tar" \
    && ln -s /home/node-v$NODE_VERSION-linux-x64/bin/node /usr/local/bin/node \
    && ln -s /home/node-v$NODE_VERSION-linux-x64/bin/npm /usr/local/bin/npm \
    && rm -rf "node-v$NODE_VERSION-linux-x64.tar"

USER jenkins
