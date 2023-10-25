FROM node:16

WORKDIR ./app

COPY package*.json ./

RUN npm install


EXPOSE 3001

COPY . ./

RUN npm run tsc
CMD [ "node", "build/index.js" ]