const path = require("path");
const webpack = require("webpack");

module.exports = {

	entry: {
		"bundle": "./src/index.js",
		"bundle.min": "./src/index.js"
	},

	output: {
		filename: "[name].js",
		path: path.resolve(__dirname, "build")
	},

	externals: {
		three: "THREE"
	},

	devtool: "source-map",

	module: {
		rules: [
			{
				test: /\.js$/,
				include: /src/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["es2015"]
					}
				}
			}
		]
	},

	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			include: /\.min\.js$/,
			sourceMap: true,
			compressor: {
				warnings: false
			}
		})
	]

};
