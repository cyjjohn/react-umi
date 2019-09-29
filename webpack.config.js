const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',
  /*入口*/
  entry: {
    app:[
      "@babel/polyfill",
      path.join(__dirname, '../src/index.js')
    ],
    vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux']
  },
  mode:'development',
  /*输出到dist文件夹，输出文件名字为bundle.js*/
  output: {
    publicPath:'/',
    path: path.join(__dirname, '../dist'),
    filename: '[name].[hash].js',
    chunkFilename: '[name].[chunkhash].js'
  },
  // webpack-dev-server
  devServer: {
    // contentBase: path.join(__dirname, '../dist'),
    compress: true,  // gzip压缩
    host: '127.0.0.1', // 允许ip访问
    hot:true, // 热更新
    historyApiFallback:true, // 解决启动后刷新404
    port: 8000 // 端口
  },
  // 代理
  "proxy": {
    "/api": {
      "target": "http://my-json-server.typicode.com/",
      "changeOrigin": true,
      "pathRewrite": { "^/api" : "" }
    }
  },
  /*src文件夹下面的以.js结尾的文件，要使用babel解析*/
  /*cacheDirectory是用来缓存编译结果，下次编译加速*/
  module: {
    rules: [{
      test: /\.js$/,
      use: ['babel-loader?cacheDirectory=true'],
      include: path.join(__dirname, '../src'),
    },{
      test: /\.(css)$/,
      include: /node_modules/,
      use: ["style-loader", "css-loader"],
    },{
      test: /\.(css)$/,
      exclude: /node_modules/,
      use: ["style-loader",
        {loader: 'css-loader', // translates CSS into CommonJS
          options: {
            modules: true,
            localIdentName: '[path][name]__[local]--[hash:base64:5]',
          }},'postcss-loader'
      ],
    },{
      test: /\.(png|jpg|gif)$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 8192
        }
      }]
    }]
  },
  //别名控制
  resolve: {
    alias: {
      pages: path.join(__dirname, '../src/pages'),
      components: path.join(__dirname, '../src/components'),
      router: path.join(__dirname, '../src/router'),
      images: path.join(__dirname, '../src/images'),
      actions: path.join(__dirname, '../src/redux/actions'),
      reducers: path.join(__dirname, '../src/redux/reducers')
    },
  },
  // 插件配置
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, '../public/index.html')
    })
  ]
};
