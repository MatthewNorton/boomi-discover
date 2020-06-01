const path = require('path');
const fs = require('fs');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WriteFilePlugin = require('write-file-webpack-plugin');
const flow = require('./package.json').flow;

module.exports = function() {
    const config = {
        entry: "./src/index.tsx",
        output: {
            filename: flow.filenames.js,
            path: path.resolve(__dirname, 'build')
        },
        devtool: 'source-map',
        resolve: {
            extensions: [".ts", ".tsx", ".js", ".json"],
        },
        devServer: {
            contentBase: './build'
        },
        mode: 'development',
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
                // {
                //     test: /\.scss$/,
                //     loaders: [

                //     ]
                // },
                { 
                    test: /\.js$/, 
                    enforce: "pre", 
                    loader: "source-map-loader" 
                },
                {
                    test: /\.(s*)css$/,
                    // use: [
                    //   MiniCssExtractPlugin.loader, "css-loader", "sass-loader"
                    // ],
                    test: /\.s?css$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                // publicPath: '/dist/',
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true,
                                outputStyle: 'compressed'
                            }
                        }
                    ]
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
            // new ExtractTextPlugin(({ filename: flow.filenames.css })),
            new MiniCssExtractPlugin({ filename: flow.filenames.css })
        ],
    }

    if (!fs.existsSync('./build'))
        fs.mkdirSync('./build');

    let template = fs.readFileSync('./template.html').toString();
    template = template
        .replace('{{tenantId}}', flow.tenantId)
        .replace('{{flowId}}', flow.id)
        .replace('{{flowVersionId}}', flow.versionId)
        .replace('{{templateScripts}}', flow.templateScripts)
        .replace('{{filename-js}}', flow.filenames.js)
        .replace('{{filename-css}}', flow.filenames.css)
    fs.writeFileSync('./build/index.html', template);

    return config;
};
