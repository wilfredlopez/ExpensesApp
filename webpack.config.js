//www.webpack.js.org for more
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')


module.exports = (env) => {
        
        const isProduction = env === 'production'
        const CSSExtract = new ExtractTextPlugin('importStyles.css')
        
        return {
        entry: './src/app.js',
        output:{
            path: path.join(__dirname,'public','dist'),
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
                use:CSSExtract.extract({
                    use:[
                        {
                            loader:'css-loader',
                            options:{
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options:{
                                sourceMap: true
                            }
                        }
                    ]
                })
            }]
        },
        plugins:[
            CSSExtract
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer:{
            contentBase: path.join(__dirname,'public'),
            historyApiFallback: true,
            publicPath:'/dist/'
        }
    }
}

//UNDER MODULE IS THE SET UP FOR Babel in order to use EJX with React
