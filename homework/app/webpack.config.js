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
    // 第一個參數對應到 entry 內的屬性名
    // 第二個參數是輸出檔案的名稱
    new CommonsChunkPlugin('vendors', 'vendors.js'),
    new hotModuleReplacementPlugin()
   // })
   ]
};