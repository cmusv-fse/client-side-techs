const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const path = require('path');
const port = 3000;
const config = require('./webpack.config.js');
config.mode = "development";
config.output.publicPath = `http://0.0.0.0:${port}/`;
config.devtool = 'source-map';
config.plugins = (config.plugins || []).concat([
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedChunksPlugin()
]);

config.devServer = {
    contentBase: path.resolve(__dirname, './dist'),
    publicPath: '/',
    historyApiFallback: false,
    disableHostCheck: true,
    hot: true,
    inline: true,
    host: '0.0.0.0',
    stats: {
        colors: true
    },
    port: port,
    noInfo: false,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
        'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
    }
};

new webpackDevServer(webpack(config), config.devServer).listen(port, '0.0.0.0', err => {
    if (err) {
        console.log(err);
    }
    console.log('Listening at localhost:' + port);
    console.log('Opening your system browser...');
});
