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
                        presets: ['@babel/preset-react'],
                        plugins : ['@babel/plugin-proposal-class-properties']
                    }
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
            extensions: ['.js', '.json', '.jsx']
        },
        devtool: 'source-map'
    }
}
