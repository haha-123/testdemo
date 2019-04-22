const path = require("path")
const vueLoaderPlugin = require("vue-loader/lib/plugin")
const isDev = process.env.NODE_ENV === "development"
const webpack = require("webpack")
const htmlWebpackPlugin = require("html-webpack-plugin")
const config = {
    entry:path.join(__dirname,"./src/index.js"),
    output:{
        filename:"builder.js",
        path:path.join(__dirname,"dest")
    },
    module:{
        rules:[
            {
                test:/\.vue$/,
                loader:"vue-loader"
            },
            {
                test:/\.jsx$/,
                loader:"babel-loader"
            },
            {
                test:/\.css$/,
                use:[
                    "style-loader",
                    "css-loader",
                ]
            },
            {
                test:/\.styl$/,
                use:[
                    "style-loader",
                    "css-loader",
                    {
                        loader:"postcss-loader",
                        options:{
                            sourceMap:true
                        }
                    },
                    "stylus-loader"
                ]
            },
            {
                test:/\.(jpg|jpeg|gif|png|svg)$/,
                use:[{
                    loader:"url-loader",
                    options:{
                        limit:1024,
                        name:"[name]123.[ext]"
                    }
                }]
            }
        ]
    },
    plugins:[
        new vueLoaderPlugin(),
        new webpack.DefinePlugin({
            "process.env":{
                NODE_ENV : isDev ? '"production"' : '"development"' 
            }
        }),
        new htmlWebpackPlugin()
    ]
}

if(isDev){
    config.devtool = "#cheap-module-eval-source-map"
    config.devServer = {
        port:"2222",
        host:"0.0.0.0",
        overlay:{
            error:true
        }
    },
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    )
}


module.exports = config



