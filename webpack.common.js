const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: {
    app: './src/index.jsx',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(png|jpe?g|ico|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.js$|jsx/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new Dotenv({ path: `./.env`, systemvars: true }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      publicPath: '/',
      favicon: path.resolve(__dirname, 'public', 'favicon.ico'),
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@mui/styled-engine': '@mui/styled-engine-sc',
      '@assets': path.resolve(__dirname, 'src/assets/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@contexts': path.resolve(__dirname, 'src/contexts/'),
      '@features': path.resolve(__dirname, 'src/features/'),
      '@guards': path.resolve(__dirname, 'src/guards/'),
      '@hooks': path.resolve(__dirname, 'src/hooks/'),
      '@layouts': path.resolve(__dirname, 'src/layouts/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@utils': path.resolve(__dirname, 'src/utils/'),
      '@': path.resolve(__dirname, 'src/'),
    },
  },
  output: {
    filename: '[name].bundle.js',
    assetModuleFilename: 'images/[hash][ext][query]',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};
