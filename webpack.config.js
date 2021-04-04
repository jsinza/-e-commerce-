const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const TerserPlugin = require('terser-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const path = require('path');

require('dotenv').config();

const isDev = (process.env.ENV === 'development');
const entry =['babel-polyfill', './src/client/index.js'];


if (isDev) {
	entry.push('webpack-hot-middleware/client?path=/__webpack_hmr&timeout=2000&reload=true');
  }
  

module.exports = {
	entry ,
	output: {
		path: path.join(__dirname, 'dist'),
		publicPath: '/',
		filename: isDev ? 'bundle.js' : 'bundle-[hash].js',
	},
	optimization: {
		minimize: true,
		minimizer: [new TerserPlugin()],
		splitChunks: {
			chunks: 'async',
			name: true,
			cacheGroups: {
				vendors: {
					name: 'vendors',
					chunks: 'all',
					reuseExistingChunk: true,
					priority: 1,
					filename: isDev ? 'vendor.js' : 'vendor-[hash].js',
					enforce: true,
					test(module, chunks) {
						const name = module.nameForCondition && module.nameForCondition();
						return chunks.some(chunk => chunk.name !== 'vendors' && /[\\/]node_modules[\\/]/.test(name));
					},
				},
			},
		},
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
		new CleanWebpackPlugin(),
		isDev ? new webpack.HotModuleReplacementPlugin() :
			() => { },
		isDev ? () => { } :
			new CompressionWebpackPlugin({
				test: /\.js$|\.css$/,
				filename: '[path].gz',
			}),
		new HtmlWebPackPlugin({
			template: './src/client/index.html',
			favicon: './src/client/assets/Logo_ML.png',
		}),
	],
};
