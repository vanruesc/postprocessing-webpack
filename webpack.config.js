const path = require("path");
const webpack = require("webpack");

module.exports = {

	entry: "./src/index.js",

	output: {
		filename: "postprocessing-webpack.js",
		path: path.resolve(__dirname, "build")
	},

	externals: {
		three: "THREE"
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				include: /src/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["env"]
					}
				}
			}
		]
	},

	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			compressor: {
				warnings: false
			}
		})
	]

};
