const webpack = require("webpack");
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  context: path.join(__dirname, "../app"),
  devtool: "inline-source-map",
  entry: {
    app: [
      "react-hot-loader/patch",
      "webpack-dev-server/client?http://localhost:8080",
      "webpack/hot/only-dev-server",
      "./src/main/js/index.js"
    ]
  },
  mode: "development",
  output: {
    path: path.resolve(__dirname, "./app/build"),
    filename: "app.bundle.js",
    publicPath: "http://localhost:8080/"
  },
  devServer: {
    hot: true,
    publicPath: "http://localhost:8080/",
    historyApiFallback: true
  },
  externals: {
    fs: "commonjs fs"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|jpg|gif|woff|woff2|eot|ttf|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {}
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new CopyWebpackPlugin([
      {
        from: "./src/main/app.js"
      },
      {
        from: "./src/main/index.html"
      }
    ])
  ]
};
