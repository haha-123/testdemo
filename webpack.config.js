const path = require("path")
const vueLoaderPlugin = require("vue-loader/lib/plugin")
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
        new vueLoaderPlugin()
    ]
}

module.exports = config



