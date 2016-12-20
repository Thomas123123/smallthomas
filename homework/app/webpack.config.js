<<<<<<< HEAD
 var path = require('path'),
   	 webpack  = require('webpack'),
   	 CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin'),
   	 uglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin'),
   	 ExtractTextPlugin = require("extract-text-webpack-plugin"),
   	 providePlugin = require('webpack/lib/ProvidePlugin'),
   	 hotModuleReplacementPlugin = require('webpack/lib/HotModuleReplacementPlugin')

module.exports = {
   // entry: __dirname + '/main.js',
   entry : {
             app : [path.join(__dirname)+ '/src/main.js'],
             vendors : ['react','jquery','bootstrap']
	         },
   output: {
    filename: '[name].js',
    path : path.join(__dirname, './build')
   	// path : __dirname + '/build'
	  // publicPath : 'http:/localhost:3000/'      
   },
   module: {
     loaders: [
    	{ test: /\.js$/,
	      exclude: /node_modules/,
	      loader: 'jsx-loader?hamony'
		  },
      {	test: /\.css$/,
       	loader: ExtractTextPlugin.extract("css-loader") 
      },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' 
      }
     ]
   },
   resolve : {
    extensions: ['', '.js', 'jsx', '.json', '.css', '.jpg', '.png']
   },
   plugins : [
   new uglifyJsPlugin({
   	compress : {
   		warnings : false
   	}
   	// mangle : {
   	// 	warnings : false 
   	// }
   	}),
    new ExtractTextPlugin('bundle.css'),
	  new providePlugin({
      $ : "jquery",
      jQuery : "jquery",
      "window.jQuery": "jquery"
    }),
    // ç¬¬ä¸€å€‹åƒæ•¸å°æ‡‰åˆ° entry å…§çš„å±¬æ€§å
    // ç¬¬äºŒå€‹åƒæ•¸æ˜¯è¼¸å‡ºæª”æ¡ˆçš„åç¨±
    new CommonsChunkPlugin('vendors', 'vendors.js'),
    new hotModuleReplacementPlugin()
   // })
   ]
};
=======
module.exports = {
	   entry: './main.js',
	   output: {
	     filename: 'bundle.js'      
	   },
	   module: {
	     loaders: [
	       { test: /\.css$/, loader: "style!css" },
	       { test: /\.js$/, loader: 'jsx-loader?harmony' }
	       // loaders ¥i¥H¹³ querystring ¤@¼Ë±µ¦¬°Ñ¼Æ
	     ]
	   },
	   resolve: {
	     // ³]©w«á¥u»İ­n¼g require('file') ¦Ó¤£¥Î¼g¦¨ require('file.jsx')
	    extensions: ['', '.js', 'jsx', '.json', '.css']
	
	   }
	};
>>>>>>> parent of cc8bd78... 1.webpack V2.0  åŠ å…¥äº†pluginåŠŸèƒ½(HMR,extractText,commonsChunk,provide,uglify)
