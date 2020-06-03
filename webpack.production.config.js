const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WriteFilePlugin = require('write-file-webpack-plugin');
const postcssPresetEnv = require( 'postcss-preset-env' );
const flow = require('./package.json').flow;

module.exports = function(env) {
    const config = {
        entry: "./src/index.tsx",
        output: {
            filename: flow.filenames.js,
            path: path.resolve(__dirname, 'build')
        },
        devtool: '',
        resolve: {
            extensions: [".ts", ".tsx", ".js", ".json"]
        },
        mode: 'production',
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    enforce: 'pre',
                    use: [
                        {
                            loader: 'tslint-loader',
                            options: {
                                fix: true
                            }
                        }
                    ]
                },
                { 
                    test: /\.tsx?$/, 
                    loader: "awesome-typescript-loader" 
                },
                { 
                    test: /\.js$/, 
                    enforce: "pre",
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        { loader: MiniCssExtractPlugin.loader },
                        { loader: 'css-loader' },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: () => [ 
                                    
                                    postcssPresetEnv( { 
                                        stage: 3,
                                        autoprefixer: { grid: true},
                                        browsers: ['last 2 versions', 'ie 6-8', 'Firefox > 20'],
                                    } ) ],
                            },
                        },
                        { loader: 'sass-loader' },
                    ],
                },
                { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
            ]
        },
        externals: {
            "react": "React",
            "react-dom": "ReactDOM"
        },
        plugins: [
            new WriteFilePlugin(),
            new MiniCssExtractPlugin({ filename: flow.filenames.css }),
            require('autoprefixer'),
            require('cssnano'),
            
        ],
    }

    return config;
};
