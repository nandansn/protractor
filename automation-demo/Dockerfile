# Base image
FROM node:14

# Set working directory
WORKDIR /automation-demo

# Install necessary packages
RUN apt-get update && \
    apt-get -y install wget gnupg2 && \
    wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - && \
    echo "deb http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google-chrome.list && \
    apt-get update && \
    apt-get -y install google-chrome-stable && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/* && \
    npm install -g protractor && \
    webdriver-manager update

# Copy project files
COPY . .

RUN cd automation-demo

# Run npm install
RUN npm install

# Set environment variables
ENV CHROME_BIN=/usr/bin/google-chrome

# Expose necessary ports
EXPOSE 3000 4444

# Start the project using npm start
CMD ["npm", "test"]
