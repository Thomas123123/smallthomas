module.exports = {
	   entry: './app/main.js',
	   output: {
	     filename: 'bundle.js'      
	   }
	  /* module: {
	     loaders: [
	       { test: /\.css$/, loader: "style!css" },
	       { test: /\.js$/, loader: 'jsx-loader?harmony' }
	       // loaders �i�H�� querystring �@�˱����Ѽ�
	     ]
	   },
	   resolve: {
	     // �]�w��u�ݭn�g require('file') �Ӥ��μg�� require('file.jsx')
	     extensions: ['', '.js', 'jsx', '.json']
	   }*/
	};