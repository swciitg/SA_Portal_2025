FROM node:20-alpine
WORKDIR /usr/src/app/backend
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3002
RUN npm run build
CMD ["npm", "run", "develop"]