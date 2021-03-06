const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/kiwi.js',
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, './dist'),
		publicPath: '/static/',
	},
	mode: 'development',
	devServer: {
		port: 9002,
		static: {
			directory: path.resolve(__dirname, './dist'),
		},
		devMiddleware: {
			index: 'kiwi.html',
			writeToDisk: true,
		},
		historyApiFallback: {
			index: 'kiwi.html'
		}
	},
	module: {
		rules: [
			{
				test: /\.(png|jpg)$/,
				use: ['file-loader'],
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/env'],
						plugins: ['@babel/plugin-proposal-class-properties'],
					},
				},
			},
			{
				test: /\.hbs$/,
				use: ['handlebars-loader'],
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			filename: 'kiwi.html',
			title: 'Kiwi',
			description: 'Kiwi',
			template: 'src/page-template.hbs',
		}),
	],
};
