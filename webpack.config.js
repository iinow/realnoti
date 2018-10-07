const config = {
    //시작점
    target: "electron-main",
    entry: {
        // main: './src/electron-starter.js'


        //바꾼거
        'electron-starter': './src/electron-starter.js',
        'renderer/app': './src/renderer/App.jsx'
    },

    //entry를 시작으로 의존되어 있는 모듈을 하나로 묶인다.
    //결과물 output 으로 기록
    output: {
        // filename: 'bundle.js'
        // path: __dirname + 'dist'
        filename: 'dist/js/[name].js'
    },

    //웹팩은 자바스크립트 밖에 모르기 때문에 모듈들을 로드하는 애들이 필요하다
    //test 에 로딩할 파일을 지정한다
    //use 에 적용할 로더를 설정한다. 
    module: {
        rules: [
            //.jsx?$ 는 js 로 포함인가? 
            {
                test: /\.jsx?$/,
                exclude: __dirname + 'node_modules',
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }
            }
        ]
    },

    devtool: 'source-map',
    node: {
        fs: 'empty',
        __dirname: false,
        __filename: false
    },
    resolve: {
        extensions: [".js", ".jsx"]
    }
}

module.exports = config