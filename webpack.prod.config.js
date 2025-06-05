const path = require('path');
const glob = require('glob');
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const {PurgeCSSPlugin} = require('purgecss-webpack-plugin')

const PATHS = {
    src: path.join(__dirname, 'src')
}

module.exports = {
    mode: "production",
    entry: {
        index: "./src/index.js",
        explore: './src/explore.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: "asset/[hash][ext]",
        clean: true
    },
    optimization: {
        minimizer: [
            `...`,
            new CssMinimizerPlugin()
        ],
        splitChunks:{
            chunks:'all'
        }
    },
    plugins: [
        new PurgeCSSPlugin({
            paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true })
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css"
        }),
        new HtmlPlugin({
            template: './src/index.html',
            filename: "index.[contenthash].html",
            chunks: ['index'],
            inject: 'body',
            minify: true
        }),
        new HtmlPlugin({
            template: './src/explore.html',
            filename: "explore.[contenthash].html",
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