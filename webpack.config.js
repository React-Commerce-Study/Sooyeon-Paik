const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const mode = 'development';

module.exports = {
   mode,
   entry: './src/index.tsx',
   output: {
      publicPath: '/',
      path: path.join(__dirname, 'dist'),
      filename: 'bundle.js',
      clean: true,
   },
   devServer: {
      historyApiFallback: true,
      port: 3000,
      hot: true,
   },
   devtool: 'source-map',
   resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
   },
   module: {
      rules: [
         {
            test: /\.(ts|tsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
         },
      ],
   },
   plugins: [
      new webpack.ProvidePlugin({
         React: 'react',
      }),
      new HtmlWebpackPlugin({
         template: './public/index.html',
      }),
      new webpack.HotModuleReplacementPlugin(),
   ],
};
