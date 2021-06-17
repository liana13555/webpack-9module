const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
entry: './src/index.js',
output: {
path: path.resolve(__dirname, 'build'),
filename: 'bundle.js',
    },
    module: {
        rules: [
            {
        test: /\.scss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
            },
             {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      }
        ],
    },
    plugins: [new HtmlWebpackPlugin({template: './src/index.html', inject: 'body'})],
    devServer: {
        port: 5555,
        open: true,
        stats: 'errors-only',
   }
};