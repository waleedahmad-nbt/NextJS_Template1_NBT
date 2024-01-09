// next.config.js
const { parsed: localEnv } = require('dotenv').config({
  path: '.env.local',
});

module.exports = {
 
  images: {
    domains: ['minimog-4437.kxcdn.com'],
  },
};
