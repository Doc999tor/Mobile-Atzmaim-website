
const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
module.exports = {
  entry: {
    app: "./client/index.js"
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js"
  },
  optimization: {
		minimizer: [new OptimizeCssAssetsPlugin(), new TerserPlugin()]
	},
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
				use: 'babel-loader'
      },
      {
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							modules: {
								localIdentName: '[name]_[local]'
							}
						}
					}]
			}
    ]
  },
  plugins: ([
    new MiniCssExtractPlugin({
			filename: 'style.css'
		})
  ])
};