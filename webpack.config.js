const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const webpack = require('webpack');

const config = {
	context: path.resolve(__dirname, './src'),
	entry: './index.js',
	output: {
		path: path.resolve(__dirname, './build'),
		filename: '[name].min.js'
	},
	module: {
		rules: [{			
			test: /\.js$/,
			include: path.resolve(__dirname, './src'),
			use: [{
				loader: 'babel-loader',
				options: {
					presets: [
						['@babel/preset-env', {modules: false}]
					]
				}
			}]
		},
		{
	        test: /\.scss$/,
			use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
		}]
	},
	plugins: [
		new MiniCssExtractPlugin()
	]
};

if (process.env.NODE_ENV !== 'production') {
	config.devtool = 'inline-source-map'
}

module.exports = config;