const Encore = require('@symfony/webpack-encore');
const WebpackShellPlugin = require('webpack-shell-plugin');

if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
    .setOutputPath('src/Resources/public/build/')
    .setPublicPath('/bundles/numberninechapterone/build')
    .setManifestKeyPrefix('/bundles/numberninechapterone/build/')

    .addEntry('main', './assets/ts/index.ts')
    .addEntry('product', './assets/ts/product.ts')
    .addEntry('shop', './assets/ts/shop.ts')

    .splitEntryChunks()
    .enableSingleRuntimeChunk()
    .cleanupOutputBeforeBuild()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())
    .configureBabelPresetEnv((config) => {
        config.useBuiltIns = 'usage';
        config.corejs = 3;
    })
    .enableSassLoader()
    .enableTypeScriptLoader()
    .addRule({
        enforce: 'pre',
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
    })
    .enablePostCssLoader((options) => {
        options.postcssOptions = {
            plugins: [
                require('tailwindcss'),
                require('autoprefixer'),
            ]
        }
    })
    .autoProvidejQuery()
// .addPlugin(new WebpackShellPlugin({
//     onBuildStart: [
//         'yarn rimraf ./src/Resources/public/build/ --preserve-root',
//     ],
//     onBuildEnd: [
//         "yarn replace-in-file /build/g bundles/numberninechapterone/build ./build/manifest.json,./build/entrypoints.json --isRegex",
//         'yarn cpy ./build ./src/Resources/public/ --parents',
//     ]
// }))
;

module.exports = Encore.getWebpackConfig();
