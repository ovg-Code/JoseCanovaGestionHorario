const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    entry: './app/index.js',
    output:{
        path:__dirname + '/public',
        filename: 'bundle.js'
    },
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: [
                  '@babel/preset-env',
                  '@babel/preset-react'
                ]
              }
            }
          },
          {
            test: /\.html$/,
            use: [
              {
                loader: "html-loader",
              },
            ],
          },
          {
            test: /\.(s*)css$/,
            use: [
              { loader: MiniCssExtractPlugin.loader },
              "css-loader",
              "sass-loader",
            ],
          },
          {
            test: /\.(png|jpg)$/i,
            type: 'asset/resource',
            generator: {
              filename: 'images/[name]-[hash][ext]'
          }
          },
        ],
      },
      plugins: [
        new MiniCssExtractPlugin({
          filename: "assets/[name].css",
        }),
      ],
};