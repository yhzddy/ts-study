const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.ts",
  output: { filename: "main.js" },
  resolve: {
    extensions: [".js", ".tsx", ".ts"], //import文件 解析文件格式
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, //对应什么文件格式
        use: "ts-loader", //用什么解析
        exclude: /node_modules/, //排除该文件
      },
    ],
  },
  devtool: process.env.NODE_ENV === "production" ? false : "inline-source-map", //在开发环境下使用调试工具
  devServer: {
    contentBase: "./dist", //基于哪个根目录运行
    stats: "errors-only", //仅打印错误信息
    compress: false, //不启动压缩
    host: "localhost",
    port: 8000,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/template/index.html",
    }),
  ],
};
