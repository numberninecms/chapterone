const Encore = require('@symfony/webpack-encore');
const WatchExternalFilesPlugin = require('webpack-watch-files-plugin').default;

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
                tailwindcss: {},
                autoprefixer: {},
            }
        }
    })
    .addPlugin(new WatchExternalFilesPlugin({
        files: [
            './src/**/*.twig',
            './assets/sass/purge_safelist.txt',
        ],
        verbose: true
    }))
    .configureDevServerOptions(options => {
        options.allowedHosts = 'all';
        delete options.client;
    })
;

module.exports = Encore.getWebpackConfig();
