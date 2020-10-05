const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
	mode: "production",
	module: {
		rules: [
			{
				test: /\.(js|jsx|tsx|ts)$/,
				exclude: "/node_modules/",
				use: [
					{
						loader: "babel-loader",
						// options: {
						// 	presets: ["@babel/preset-env", "@babel/typescript"],
						// 	plugins: [
						// 		"@babel/plugin-transform-runtime",
						// 		"@babel/proposal-class-properties",
						// 		"@babel/plugin-proposal-object-rest-spread",
						// 	],
						// },
					},
				],
			},
		],
	},
	resolve: {
		extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
	},
});
