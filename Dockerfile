# Use official Node.js image
FROM node:18

# Set working directory inside the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json* ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port your app runs on (e.g., 3000)
EXPOSE 3000

# Command to start the app
CMD ["node", "server.js"]