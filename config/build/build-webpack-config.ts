import path from "path";
import {buildResolvers} from "./build-resolvers";
import {buildLoaders} from "./build-loaders";
import {buildPlugins} from "./build-plugins";
import webpack from "webpack";
import {BuildOptions} from "./types/config";

export const buildWebpackConfig = (opts: BuildOptions): webpack.Configuration => {
    const {mode, paths} = opts

    return {
        mode: mode,
        entry: paths.entry,
        output: {
            filename: 'main.js',
            path: paths.build,
            clean: true
        },
        resolve: buildResolvers(),
        module: {
            rules: buildLoaders() ,
        },
        plugins: buildPlugins(opts)
    }
}