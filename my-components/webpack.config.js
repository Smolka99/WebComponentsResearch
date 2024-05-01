const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.ts',  // Entry point for your TypeScript files
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'my-components.bundle.js',
        library: 'MyComponents',
        libraryTarget: 'umd',
        globalObject: 'this'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    }
};