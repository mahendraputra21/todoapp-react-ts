FROM node:19.4.0

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
EXPOSE 80

# ENV HOST=todoapp-ldr6wtdkbq-uc.a.run.app

# Start app
CMD ["yarn", "start"]
