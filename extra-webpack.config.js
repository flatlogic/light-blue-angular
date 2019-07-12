const TerserPlugin = require('terser-webpack-plugin');

module.exports = (config, options) => {
  config.optimization.minimizer.some(plugin => {
    if (plugin instanceof TerserPlugin) {
      // Warning: This config is using for stable Rickshaw lib working
      plugin.options.terserOptions.mangle = {
        reserved: ['$super']
      };
      return true;
    }
    return false;
  });
  return config;
};
