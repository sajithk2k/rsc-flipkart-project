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