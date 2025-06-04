const path = require('path')

module.exports = {
    entry: {
        index: {
            import: "./index.js",
            filename: "main-entry.js"
        },
        explore: './explore.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: "asset/[hash][ext]",
        clean: true
    },
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