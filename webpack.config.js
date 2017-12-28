const TSLintPlugin = require('tslint-webpack-plugin');

module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { 
                test: /\.tsx?$/, 
                loader: ['awesome-typescript-loader'],
            },
            { 
                test: /\.json?$/,
                loader: ['json-loader'],
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { 
                enforce: 'pre', test: /\.js$/, 
                loader: ['source-map-loader'],
            },
        ]
    },
    plugins: [
        new TSLintPlugin({
            files: ['./src/**/*.ts', './src/**/*.tsx', './src/**/*.d.ts'],
            project: './tsconfig.json'
        })
    ]
};