var path = require('path');
const fs = require('fs');

const lessToJs = require('less-vars-to-js');
const themeVariables = lessToJs(fs.readFileSync(path.join(__dirname, './ant-override.less'), 'utf8'));

module.exports = {
    mode: "development",
    entry: "./src/app.jsx", // входная точка - исходный файл
    output: {
        path: path.resolve(__dirname, './public'),     // путь к каталогу выходных файлов - папка public
        publicPath: '/public/',
        filename: "bundle.js"       // название создаваемого файла
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/, // определяем тип файлов
                exclude: /(node_modules)/,  // исключаем из обработки папку node_modules
                loader: "babel-loader",   // определяем загрузчик
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"],
                    plugins: [
                        ["import",
                            {
                                libraryName: "antd",
                                style: true,   // or 'css'
                            }
                        ]]
                }
            },
            {
                test: /\.css$/,
                use: [
                    {loader:'style-loader'}, 
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[name]__[local]__[hash:base64:5]'
                        }
                    }
                ],
            },
            {
                test: /\.less$/,
                use: [
                    {loader: "style-loader"},
                    {loader: "css-loader"},
                    {
                        loader: "less-loader",
                        options: {
                            modifyVars: themeVariables,
                            javascriptEnabled: true
                        }
                    }
                ]
            }
        ]
    }
}