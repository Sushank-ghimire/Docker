FROM node:18-alpine

# Creating an app directory
WORKDIR /app

# Installing the dependencies
COPY package*.json ./

# Run npm insta
RUN npm install

# Bundle app source
COPY . .

# Expose server at port 3000
EXPOSE 3000

# Build the application
RUN npm run build

# Executable Commands
CMD [ "npm", "start" ]
