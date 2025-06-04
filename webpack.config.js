const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: "./src/index.js",
        explore: './src/explore.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: "asset/[hash][ext]",
        clean: true
    },
    plugins:[
        new HtmlPlugin({
            template:'./src/index.html',
            filename:"index.html",
            chunks:['index']
        }),
         new HtmlPlugin({
            template:'./src/explore.html',
            filename:"explore.html",
            chunks:['explore']
        })
    ],
    module: {
        rules: [
            {
                test: /\.(jpg|png|gif|svg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(css)$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(scss)$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(ttf)$/i,
                type: 'asset/resource',
            },
        ],
    },
}