const path = require('path');

module.exports = {
	entry: './src/js/index',
	// entry: {
	// 	index: './src/js/index',
	// 	signup: './src/js/signup',
	// },
	output: {
		// filename: '[name]-pack.js',
    filename: 'pack.js',
		path: __dirname + '/dist/js'
	},
	module:{
		rules: [
		  {
		  	test: /\.css$/,
		  	use: ['style-loader','css-loader']
		  },
		  {
            test:/\.(js|jsx)$/,        //匹配以‘.js、jsx’结尾的文件
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['react','env']
              }
            }
          },
          {
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // 将 JS 字符串生成为 style 节点
            }, {
                loader: "css-loader" //  将 CSS 转化成 CommonJS 模块
            }, {
                loader: "sass-loader" // 将 Sass 编译成 CSS
            }]
          },
          {
            test: /\.(png|jpg|gif)$/,
            use: [{
                loader: 'url-loader',
                options: {
                  limit: 8192
                }
            }]
          }
		   
		]
	}
}