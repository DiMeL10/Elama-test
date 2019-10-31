const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const PATH = {
    src: path.join(__dirname, './src'),
    build: './build',
}

module.exports = {
    externals: {
        path: PATH
    },

    entry: { // точка входа
        main: `${PATH.src}/main.js`
    },
    output: { // точка выхода
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'build'),  // указание абсолютного пути, __dirname - путь к текущей директории,
        publicPath: "/" // нужен для того, чтобы система в режиме development понимала где лежит js файл
    },

    devtool: 'source-map', // карты js
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    { loader: 'css-loader', options: { sourceMap: true } },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true, config: { path: './postcss.config.js'}
                        }
                    },
                    { loader: 'sass-loader', options: { sourceMap: true } }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    { loader: 'css-loader', options: { sourceMap: true } },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true, config: { path: './postcss.config.js'}
                        }
                    },
                    { loader: 'sass-loader', options: { sourceMap: true } }
                ]
            },
            {
                test: /\.m?js$/, // фильтрует файлы для обработки
                exclude: /node_modules/, // исключаем переработку данной папки
                use: {
                    loader: 'babel-loader', // какой загрузчик необходимо использовать
                    options: {
                        presets: ['@babel/preset-env'], //указываем, какой презет использовать
                        plugins: [
                            "@babel/plugin-transform-react-jsx",
                            ["@babel/plugin-proposal-decorators", { "legacy": true }],
                            ["@babel/plugin-proposal-class-properties", { "loose": true }]
                        ]
                    }
                }
            },
            {
                test: /\.svg$/,
                use: [
                  "babel-loader",
                  {
                    loader: 'react-svg-loader', // 'react-svg'
                    query: {
                      svgo: {
                        pretty: true,
                        plugins: [{ removeStyleElement: true }]
                      }
                    }
                  }
                ]
            }
        ]
    },

    plugins: [ // настройка плагинов
        new CleanWebpackPlugin(),

        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        }),

        new CopyWebpackPlugin([
            { from: `${PATH.src}/static/img`, to: `img` },
            { from: `${PATH.src}/static/fonts`, to: `fonts` }
        ]),
    ],

    resolve: {
        alias: {
            '~': path.resolve(__dirname, 'src'),
            '~c': path.resolve(__dirname, 'src/components'),
            '~p': path.resolve(__dirname, 'src/pages'),
        }
    }
};