FROM node:19.4.0-alpine

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package.json yarn.lock ./
RUN yarn install

# Copy app source code
COPY . .

# Build app
RUN yarn build

# Expose app port
EXPOSE 3000

# Start app
CMD ["yarn", "start"]
