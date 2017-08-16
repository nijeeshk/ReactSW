const webpack = require('webpack');
const path = require('path');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');

const sourceDir = './app/src';
const buildDir = './app/build';

module.exports = {
    target: 'web',

    entry: {
        main: ['react-hot-loader/patch', sourceDir + '/js/main.js'],
        vendor: ['react']
    },

    output: {
        path: path.resolve(__dirname, '..', buildDir),
        filename: 'js/[name]-[hash].js',
        sourceMapFilename: 'js/[name]-[hash].map',
        chunkFilename: "js/[name]-[hash].js",
        publicPath: '/',
    },

    resolve: {
        extensions: ['.js', '.jsx']
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loaders: ['react-hot-loader/webpack', 'babel-loader'],
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(jpg|jpeg|gif|png)$/,
                exclude: /node_modules/,
                loader:'url-loader?limit=1024&name=images/[name].[ext]'
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader?name=fonts/[name].[ext]'
            }
        ]
    },

    plugins: [
        new webpack.EnvironmentPlugin([
            'NODE_ENV',
        ]),

        new ProgressBarPlugin(),

        new webpack.HotModuleReplacementPlugin(),

        new webpack.NamedModulesPlugin(),

        new HtmlWebpackPlugin({
            path: path.resolve(__dirname, '..', buildDir),
            filename: 'index.html',
            template: sourceDir + '/index.html.template',
            title: 'ReactSW'
        }),

        // new ServiceWorkerWebpackPlugin({
        //     entry: path.join(__dirname, 'app/src/js/sw.js'),
        //     filename: 'sw.js',
        //     publicPath: '/',
        // })
    ],

    devServer: {
        hot: true,
        contentBase: path.join(__dirname, '..', "app", "build"),
        compress: true,
        port: 9000,
        publicPath: '/',
    }
}
