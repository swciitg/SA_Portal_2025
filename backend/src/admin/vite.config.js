// src/admin/vite.config.js
const { mergeConfig } = require('vite');

module.exports = (config) => {
  return mergeConfig(config, {
    server: {
      allowedHosts:  ['swc.iitg.ac.in']
    },
  });
};
