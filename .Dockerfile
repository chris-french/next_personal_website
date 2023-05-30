# Use an official Node.js image as the base
FROM node:18.16.0

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the entire project directory to the container
COPY . .

# Build the Next.js application and export it as static files
RUN npm run build
