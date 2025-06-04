const path = require('path')

module.exports = {
    entry: './index.js',
    output:{
        filename:'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename:"asset/[hash][ext]",
        clean:true
    },
     module: {
        rules: [
        {
            test: /\.(jpg|png|gif|svg)$/i,
            type: 'asset/resource',
        },
        {
            test: /\.(css)$/,
            use:["style-loader", "css-loader"]
        },
        {
            test: /\.(scss)$/,
            use:["style-loader", "css-loader", "sass-loader"]
        }
        ],
    },
}