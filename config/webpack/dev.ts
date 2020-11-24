import * as path from 'path';
import * as fs from 'fs';

import * as webpack from 'webpack';

const rootDir = fs.realpathSync(process.cwd());
const srcPath = path.resolve(rootDir, 'src');
const buildPath = path.resolve(rootDir, 'build');
const publicPath = path.resolve(rootDir, 'public');

const config: webpack.Configuration = {
  mode: 'development',
  entry: path.resolve(srcPath, 'index.tsx'),
  output: {
    path: buildPath,
    publicPath: '/',
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].chunk.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
      },
    ],
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.ts', '.tsx', '.json'],
    alias: {
      '@': srcPath,
    },
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    runtimeChunk: {
      name: entrypoint => `runtime-${entrypoint.name}`,
    },
  },
};

export default config;
