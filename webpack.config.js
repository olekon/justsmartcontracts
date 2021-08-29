var path = require('path');
const fs = require('fs');
const webpack = require('webpack');

const lessToJs = require('less-vars-to-js');
const themeVariables = lessToJs(
    fs.readFileSync(path.join(__dirname, './ant-override.less'), 'utf8')
);

module.exports = {
    resolve: {
        fallback: {
            assert: require.resolve('assert'),
            buffer: require.resolve('buffer'),
            console: require.resolve('console-browserify'),
            constants: require.resolve('constants-browserify'),
            crypto: require.resolve('crypto-browserify'),
            domain: require.resolve('domain-browser'),
            events: require.resolve('events'),
            http: require.resolve('stream-http'),
            https: require.resolve('https-browserify'),
            os: require.resolve('os-browserify/browser'),
            path: require.resolve('path-browserify'),
            punycode: require.resolve('punycode'),
            process: require.resolve('process/browser'),
            querystring: require.resolve('querystring-es3'),
            stream: require.resolve('stream-browserify'),
            string_decoder: require.resolve('string_decoder'),
            sys: require.resolve('util'),
            timers: require.resolve('timers-browserify'),
            tty: require.resolve('tty-browserify'),
            url: require.resolve('url'),
            util: require.resolve('util'),
            vm: require.resolve('vm-browserify'),
            zlib: require.resolve('browserify-zlib'),
            'crypto-browserify': false,
        },
    },
    
    plugins: [
        // Work around for Buffer is undefined:
        // https://github.com/webpack/changelog-v5/issues/10
        new webpack.ProvidePlugin({
            Buffer: ['buffer', 'Buffer'],
        }),
        new webpack.ProvidePlugin({
            process: 'process/browser',
        }),
    ],
    
    mode: 'development',
    entry: './src/app.jsx', // входная точка - исходный файл
    output: {
        path: path.resolve(__dirname, './public'), // путь к каталогу выходных файлов - папка public
        publicPath: '/public/',
        filename: 'bundle.js', // название создаваемого файла
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/, // определяем тип файлов
                exclude: /(node_modules)/, // исключаем из обработки папку node_modules
                loader: 'babel-loader', // определяем загрузчик
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                    plugins: [
                        [
                            'import',
                            {
                                libraryName: 'antd',
                                style: true, // or 'css'
                            },
                        ],
                    ],
                },
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName:
                                '[name]__[local]__[contenthash:base64:5]',
                        },
                    },
                ],
            },
            {
                test: /\.less$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    {
                        loader: 'less-loader',
                        options: {
                            modifyVars: themeVariables,
                            javascriptEnabled: true,
                        },
                    },
                ],
            },
        ],
    },
};
