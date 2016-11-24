module.exports = {
	   entry: './app/main.js',
	   output: {
	     filename: 'bundle.js'      
	   }
	  /* module: {
	     loaders: [
	       { test: /\.css$/, loader: "style!css" },
	       { test: /\.js$/, loader: 'jsx-loader?harmony' }
	       // loaders 可以像 querystring 一樣接收參數
	     ]
	   },
	   resolve: {
	     // 設定後只需要寫 require('file') 而不用寫成 require('file.jsx')
	     extensions: ['', '.js', 'jsx', '.json']
	   }*/
	};