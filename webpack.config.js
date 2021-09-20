const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:'./src/index.js',
    output: {
        path: path.join(__dirname,'/dist'),
        filename: 'index_bundle.js',
        publicPath: '/'
    },
    resolve: {
        alias: {
          $carousel: path.resolve(__dirname, 'src/components/Product/carousel/'),
          $details: path.resolve(__dirname, 'src/components/Product/details/'),
          $shell: path.resolve(__dirname, 'src/components/Product/shell/'),
          $header: path.resolve(__dirname, 'src/components/Product/header/'),
        },
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader:'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: [
                  'style-loader',
                  {
                    loader: 'css-loader',
                    options: {
                      importLoaders: 1,
                      modules: true
                    }
                  }
                ],
                include: /\.module\.css$/
              },
              {
                test: /\.css$/,
                use: [
                  'style-loader',
                  'css-loader'
                ],
                exclude: /\.module\.css$/
              }
        ]
    },
    devServer: {
        historyApiFallback: true,
      },
    plugins: [
        new HTMLWebpackPlugin({
            template:'./public/index.html'
        })
    ]
}