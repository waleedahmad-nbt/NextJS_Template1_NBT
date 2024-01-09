// next.config.js
const { parsed: localEnv } = require('dotenv').config({
  path: '.env.local',
});

module.exports = {
  env: {
    TOKEN_SECRET: localEnv.TOKEN_SECRET,
  },
  images: {
    domains: ['minimog-4437.kxcdn.com'],
  },
};
