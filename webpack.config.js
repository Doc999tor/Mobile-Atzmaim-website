
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const ENV = process.env.NODE_ENV || 'development'
module.exports = {
  entry:  "./client/index.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js"
	},
	resolve: {
		extensions: ['.jsx', '.js', '.json', '.less'],
		alias: {
			home_website: path.resolve(__dirname, './components-lib/Home_website'),
			project_components: path.resolve('./components-lib')
		}
	},
  optimization: {
		minimizer: [new OptimizeCssAssetsPlugin(), new TerserPlugin()]
	},
  module: {
    rules: [
      {
        test:  /\.(js|jsx?)$/,
        exclude: /node_modules/,
				use: 'babel-loader'
      },
      {
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							modules: false
						}
					}]
      },
      {
				test: /\.less$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							hmr: ENV === 'development',
							reloadAll: true
						}
					},
					{
						loader: 'css-loader',
						options: {
							modules: false
						}
					},
					'less-loader']
			},
			{
				test: /\.styl$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							hmr: ENV === 'development',
							reloadAll: true
						}
					},
					'css-loader', 'stylus-loader']
			},
    ]
  },
  plugins: ([
    new MiniCssExtractPlugin({
			filename: 'style.css'
		}),
		new CopyWebpackPlugin([
			{ from: './components-lib/Home_website', to: './components-lib/Home_website' },
			{ from: './assets', to: './assets' }
		]),
		new HtmlWebpackPlugin({
			template: './index.html'
		})
	]),
	devServer: {
		port: 3000,
		host: 'localhost',
		historyApiFallback: true,
		open: true,
		openPage: ''
	}
};