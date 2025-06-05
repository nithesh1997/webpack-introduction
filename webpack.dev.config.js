const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer")

module.exports = {
    mode: "development",
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
    devServer: {
        port: 3000
    },
    plugins: [
        new BundleAnalyzerPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css"
        }),
        new HtmlPlugin({
            template: './src/index.html',
            filename: "index.html",
            chunks: ['index'],
            inject: 'body',
            minify: true
        }),
        new HtmlPlugin({
            template: './src/explore.html',
            filename: "explore.html",
            chunks: ['explore'],
            inject: 'body',
            minify: true
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "src/assets/images"),
                    to: path.resolve(__dirname, "dist", "assets/images")
                },
                {
                    from: path.resolve(__dirname, "src/assets/fonts"),
                    to: path.resolve(__dirname, "dist", "assets/fonts")
                }
            ]
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
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.(scss)$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            },
            {
                test: /\.(ttf)$/i,
                type: 'asset/resource',
            },
        ],
    },
}