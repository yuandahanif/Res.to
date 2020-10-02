const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
	mode: "production",
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: "/node_modules/",
				use: [
					{
						loader: "babel-loader",
						options: {
							presets: ["@babel/typescript", "@babel/preset-env"],
						},
					},
				],
			},
		],
	},
});
