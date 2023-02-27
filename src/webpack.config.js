const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: path.join(__dirname, '_webpack', 'main'),
    output: {
        path: path.resolve(__dirname, 'assets'),
        filename: '[name]-bundle.js',
        clean: true,
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new CopyPlugin({patterns:[
            {from: path.join(__dirname, '_webpack', 'images'), to: path.resolve(__dirname, "assets", "images")}
        ]})
    ],
    performance: {
        hints: false
    }, 
    optimization: {
        minimizer:[new CssMinimizerPlugin(),]
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.s[ac]ss$/i, use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"]},
            { test: /\.(svg|eot|woff|woff2|ttf)$/,  type: 'asset/resource', generator: { filename: 'fonts/[hash][ext][query]'}},
        ],
    },
};