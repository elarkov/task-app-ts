const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin")

module.exports = {
	entry: './src/index.tsx',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/'
	},
  module: {
    rules: [
      {
        test: /\.(ts|js|jsx)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
					options: {
						presets: [
							"@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
						],
					},
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
			{
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
    ]
  },
	resolve: {
		extensions: [".tsx", ".ts", ".js", ".css"],
	},
	devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
		new ForkTsCheckerWebpackPlugin({
      async: false,
      eslint: {
        files: "./src/**/*",
      },
    }),
  ]
};
