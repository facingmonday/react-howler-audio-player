const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const DirectoryNamedWebpackPlugin = require("directory-named-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const base = require('./webpack.config');

const obj = Object.assign(
    base, 
    {
        entry: './src/umd.js',
        output: {
            filename: './dist/bundle.js',
            library: "ReactAudio",
            libraryTarget: "umd",
        }
    }
);
module.exports = obj;