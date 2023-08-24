const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        bundle: path.resolve(__dirname, 'src/js/app.js')
    },
    output: {
        path: path.resolve(__dirname, 'public/assets/js'),
        filename: '[name].js',
        clean: true
    }
}