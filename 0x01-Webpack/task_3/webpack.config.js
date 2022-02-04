// Webpack uses this to work with directories
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// This is the main configuration object.
// Here, you write different options and tell Webpack what to do
module.exports = {

  // Path to your entry point. From this file Webpack will begin its work
  entry: {
    header: './modules/header/header.js',
    body: './modules/body/body.js',
    footer: './modules/footer/footer.js'
  },

  // Path and filename of your result bundle.
  // Webpack will bundle all JavaScript into this file
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].bundle.js',
    clean: true
  },
  module: {
    rules: [
			{
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
		],
  },
  performance: {
		maxAssetSize: 100000,
	},
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 8564,
  },
  plugins: [
    new HtmlWebpackPlugin({
        title: "Document"
    }),
    new CleanWebpackPlugin(),
  ],
  devtool: 'inline-source-map',
  

  // Default mode for Webpack is production.
  // Depending on mode Webpack will apply different things
  // on the final bundle. For now, we don't need production's JavaScript 
  // minifying and other things, so let's set mode to development
  mode: 'development'
};