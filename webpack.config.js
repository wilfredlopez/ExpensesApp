//www.webpack.js.org for more
const path = require('path')

module.exports = {
    mode: 'development',
    entry: './src/app.js', //'./src/app.js'
    output:{
        path: path.join(__dirname,'/public/scripts/'),
        filename:'app.js',
        publicPath:'/public'
    },
    module:{
        rules:[{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },{
            test:/\.s?css$/,
            use:[
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool:'cheap-module-eval-source-map',
    devServer:{
        contentBase: path.join(__dirname,'/public'),
        historyApiFallback: true
    }
}

//UNDER MODULE IS THE SET UP FOR Babel in order to use EJX with React
