FROM node:10.20.1
# where our app will be located in the image
RUN mkdir -p /app
WORKDIR /app
# move all source code
COPY . .
RUN npm install
RUN npm install react-scroll
EXPOSE 8080
CMD ["npm", "start"]