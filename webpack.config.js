const path = require("path");
const htmlWebpackTemplate = require("html-webpack-template");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "application_recette",
      meta: { viewport: "width=device-width, initial-scale=1.0" },
      inject: true,
      template: htmlWebpackTemplate,
      link: [
        "https://fonts.googleapis.com/css2?family=Roboto:wght@100;400&display=swap",
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
