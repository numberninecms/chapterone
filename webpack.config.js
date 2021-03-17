const Encore = require('@symfony/webpack-encore');
const path = require('path');

if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
    .setOutputPath('src/Resources/public/build/')
    .setPublicPath('/bundles/numberninechapterone/build')
    .setManifestKeyPrefix('build/')

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
            plugins: {
                '@tailwindcss/jit': {},
                autoprefixer: {},
            }
        }
    })
    .configureDevServerOptions(options => {
        options.https = true;
        options.http2 = true;
        options.port = 9005;
    })
;

module.exports = Encore.getWebpackConfig();
