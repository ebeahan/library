#!/bin/sh

# Install Node.js
apt-get install --yes curl
curl --silent --location https://deb.nodesource.com/setup_10.x | bash -
apt-get install --yes nodejs
apt-get install --yes build-essential

# NPM deps
npm install

# Run tests
mocha
