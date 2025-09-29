module.exports = {
    mode: "production",
    entry: ["./src/index.js"],
    output: {
        library: "VueSocketIO",
        libraryTarget: "umd",
        libraryExport: "default",
        filename: "vue-socketio.js",
        globalObject: "typeof self !== 'undefined' ? self : this"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        plugins: [
                            "@babel/plugin-transform-class-properties",
                            "@babel/plugin-transform-classes"
                        ]
                    }
                }
            }
        ]
    }
};