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
          $multimedia: path.resolve(__dirname, 'src/components/Product/multimedia/'),
          $product_page_summary: path.resolve(__dirname, 'src/components/Product/product_page_summary/'),
          $product_details: path.resolve(__dirname, 'src/components/Product/product_details/'),
          $banner: path.resolve(__dirname, 'src/components/Product/banner/'),
          $rating: path.resolve(__dirname, 'src/components/Product/rating/'),
          $shell: path.resolve(__dirname, 'src/components/shell/'),
          $header: path.resolve(__dirname, 'src/components/header/'),
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