const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.config.common');
const path = require('path');

const APP_DIR = path.resolve(__dirname, '../src');

module.exports = merge(common, {
	mode: 'development',
	devtool: 'inline-source-map',  // eval-cheap-module-source-map <-- another option

	entry: [
		'webpack-dev-server/client?http://localhost:8080',  // Enables websocket connection (needs url and port)
		'webpack/hot/only-dev-server',  // HMR in the browser
		'react-hot-loader/patch', // RHL patch
		path.resolve(APP_DIR, 'index.js'),  // App's entry point
	],

	devServer: {
		hot: true,  // Enable HMR
		contentBase: APP_DIR,  // Content Base --> APP_DIR
		historyApiFallback: true,
	},

	resolve: {
		alias: {
			'react-dom': '@hot-loader/react-dom'
		}
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin(),  // Generates hot update chunks
	],
});
