const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output:{
        path: path.resolve(__dirname, "bundle"),
        filename: "bundle.js"
    },

    module: {
        rules:[
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader"]
            },

            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: "babel-loader"
                }
            },            
        ]
    },

    plugins: [ new HtmlWebPackPlugin({ template: "./src/index.html" })] 
}