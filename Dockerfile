FROM node:latest

# App working directory
WORKDIR /app

# Install app dependencies
COPY . .
RUN npm install

# Start app
CMD [ "npm", "start" ]
