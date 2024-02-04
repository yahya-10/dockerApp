# Use the official Node.js 18 image with Alpine Linux as the base image
FROM node:18-alpine

# Set the working directory inside the container to /app
WORKDIR /app

# Copy package.json and package-lock.json (if present) from the host into the container's working directory
COPY package*.json ./

# Run npm install to install dependencies based on package.json
RUN npm install

# Copy the rest of the application source code from the host into the container's working directory
COPY . .

# Expose port 5000 to allow external access to the application
EXPOSE 5000

# Define the default command to run the application when the container starts
CMD ["npm","run","dev"]