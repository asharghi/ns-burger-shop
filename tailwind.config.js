const plugin = require('tailwindcss/plugin');

module.exports = {
    content: [
        './src/**/*.{css,xml,html,vue}'
    ],
    darkMode: ['class', '.ns-dark'],
    theme: {
        extend: {},
    },
    plugins: [
        plugin(function ({addVariant}) {
            addVariant('android', '.ns-android &');
            addVariant('ios', '.ns-ios &');
        }),
    ],
    corePlugins: {
        preflight: false // disables browser-specific resets
    }
}