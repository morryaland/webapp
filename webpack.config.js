module.exports = {
  mode: "development",
  entry: "./src/index.jsx",
  output: {
    path: __dirname + "/public",
    publicPath: "/public/",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // определяем тип файлов
        exclude: /(node_modules)/,  // исключаем из обработки папку node_modules
        loader: "babel-loader",   // определяем загрузчик
        options:{
        presets:[ "@babel/preset-react"]    // используемые плагины
        }
      }
    ]
  }
}
