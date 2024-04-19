const rewireReactHotLoader = require('react-app-rewire-hot-loader');
const rewireUglifyjs = require('react-app-rewire-uglifyjs');

module.exports = function override(config, env) {
  config = rewireReactHotLoader(config, env);
  config = rewireUglifyjs(config);
  
  return config;
}