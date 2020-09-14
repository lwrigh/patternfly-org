const { build } = require('./build');
const serverConfig = require('../webpack/webpack.server.config');

const options = JSON.parse(process.argv[2]);

async function buildServer() {
  console.log('load server webpack config');

  const webpackArgv = {
    mode: 'production',
    ...options
  };
  const webpackServerConfig = await serverConfig(null, webpackArgv);
  console.log('build server');
  await build(webpackServerConfig);
}

buildServer();
