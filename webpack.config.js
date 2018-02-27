const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')


module.exports = {
  entry: {
	app: './src/js/index.js',
	about: './src/js/about.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  // watch: true,
  devServer: {
	contentBase: path.join(__dirname, "dist"),
	port: 8080
  },
   module: {
	rules: [
	  {
	   test: /\.css$/,
	  	use: [
	  	  'style-loader',
	  	  'css-loader'
	  	]
	  },
	  {
	   test: /\.scss$/,
	   use: [
	  	 {loader: "style-loader"},
	  	 {loader: "css-loader"},
	  	 {loader: "sass-loader"}
	   ]
	  },
	  {
       test: /\.(png|svg|jpe?g|gif)$/,
		 use: [
		    'file-loader',
			{
			  loader: 'image-webpack-loader',
			  options: {
			    // bypassOnDebug: true,
			    mozjpeg: {
			      progressive: true,
			      quality: 65
			    },
			    // optipng.enabled: false will disable optipng
			    optipng: {
			      enabled: false,
			    },
			    pngquant: {
			      quality: '65-90',
			      speed: 4
			    },
			    gifsicle: {
			      interlaced: false,
			    },
			    // the webp option will enable WEBP
			    webp: {
			      quality: 75
			    }
			  } //options
			} 
		  ]
	  	}, //file-loader
		{
		 test: /\.(woff|woff2|eot|ttf|otf)$/,
           use: [
			'file-loader'
		   ]
        }
	] //rules
   }, //modules
   plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack Starter',
      template: './src/index.html'
    }),
    new CopyWebpackPlugin([{
      from: './src/vendor/*.css',
      to: './vendor/*.css'
    }])
   ] //plugins
};