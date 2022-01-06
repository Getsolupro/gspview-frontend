const path = require('path');
const MiniCssExtractPlugin=require('mini-css-extract-plugin');

module.exports= {
  entry: "./src/index.jsx",
  output: {
    path: path.join(__dirname,'/dist'),
    filename: "index.bundle.js"
  },
  devServer:{
    port: 3010,
    compress: true
  },

  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts'],
    modules: ['node_modules']

  },
  module: {
    rules: [
      {
        test: /\.(ts|js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.(css|scss)$/,
        use: [
            "style-loader",
            "css-loader",
            "sass-loader"]
      },
      {
        test: /\.(jpg|jpeg|png|svg)$/,
        use: {
            loader: 'url-loader',
            options: {
                limit: 25000
            }
        }
    }
    ]
  },
  plugins: [new MiniCssExtractPlugin()],

};
