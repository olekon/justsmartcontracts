var path = require('path');
 
module.exports = {
    module:{
        rules:[
            {
                test: /\.jsx?$/, // определяем тип файлов
                exclude: /(node_modules)/,  // исключаем из обработки папку node_modules
                loader: "babel-loader",   // определяем загрузчик
                options:{
                    presets:["@babel/preset-env", "@babel/preset-react"],
                    plugins: [
                        ["import",
                        {
                            libraryName: "antd",
                            style: 'css',   // or 'css'
                        }
                    ]]
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.less$/,
                use: [
                  {loader: "style-loader"},
                  {loader: "css-loader"},
                  {loader: "less-loader",
                    options: {
                        modifyVars: {
                            
                            },
                        javascriptEnabled: true,
                    }
                  }
                ]
              }
        ]
    }
}