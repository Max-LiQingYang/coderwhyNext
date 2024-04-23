module.exports = {
  target: "node", // fs path
  mode: "development",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-react", "@babel/preset-env"],
        },
      },
    ],
  },
  resolve: {
    // 添加了这些扩展名之后, 项目中导入如下的扩展名不需要编写文件后缀
    extensions: [".js", ".jsx", ".json", ".wasm"],
  },
};
