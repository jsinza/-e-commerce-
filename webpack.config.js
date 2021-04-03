const HtmlWebPackPlugin = require('html-webpack-plugin');

const path = require('path');

module.exports = {
	entry: ['babel-polyfill', './src/client/index.js'],
	output: {
		path: path.join(__dirname, 'dist'),
		publicPath: '/',
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
					},
				],
			},
			{
				test: /\.(css|scss)$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.(png|jpg|gif)$/i,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 8192,
						},
					},
				],
			},
		],
	},
	resolve: {
		extensions: ['*', '.js', '.jsx'],
	},
	devServer: {
		historyApiFallback: true,
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: './src/client/index.html',
			favicon: './src/client/assets/Logo_ML.png',
		}),
	],
};
