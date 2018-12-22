const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')

module.exports = env => {
    const no_dist = (env && env.dist === 'false')
    return {
        watch: true,

        target: 'electron-renderer',

        entry: [path.join(__dirname, '/app/index.js')],

        output: {
            path: path.join(__dirname, '/app/build'),
            publicPath: 'build/',
            filename: 'bundle.js'
        },

        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-typescript'],
                        plugins : ['@babel/plugin-proposal-class-properties']
                    }
                },
                {
                    // Target the .ts and .tsx files
                    test: /\.tsx?$/,
                    // Exclude the node modules folder
                    exclude: /node_modules/,
                    // Define the compiler to use
                    use: [
                        {
                            // Compile the JSX code to javascript
                            loader: "babel-loader",
                            // Options
                            options: {
                                // Ensure the javascript works in legacy browsers
                                presets: ["@babel/preset-react"]
                            }
                        },
                        {
                            // Compile the typescript code to JSX
                            loader: "ts-loader"
                        }
                    ]
                },
                {
                    test: /\.css$/,
                    loader: ExtractTextPlugin.extract({
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    })
                },
                {
                    test: /\.(png|jpg|gif|svg)$/,
                    loader: 'file-loader',
                    query: {
                        name: '[name].[ext]?[hash]'
                    }
                }
            ]
        },

        plugins: [
            new ExtractTextPlugin({
                filename: 'bundle.css',
                disable: false,
                allChunks: true
            })
        ],

        resolve: {
            extensions: ['.js', '.json', '.jsx', '.ts', '.tsx']
        },
        devtool: 'source-map'
    }
}
