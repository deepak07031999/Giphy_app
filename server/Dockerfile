FROM node:14.15.4-alpine 
RUN mkdir /app
WORKDIR /app
COPY ../package.json /app
RUN npm install
COPY . /app
# RUN npm run build
# RUN npm run server
# RUN npm run start
CMD ["npm","server"]
