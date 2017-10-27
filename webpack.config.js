const LiveReloadPlugin = require('webpack-livereload-plugin')
const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  entry: './client/index.js',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.svg$|\.ttf?|\.woff$|\.woff2|\.eof|\.eot/,
        loader: 'file-loader'
      }
    ]
  },
  // When we're in development, we can use this handy live-reload plugin
  // to refresh the page for us every time we make a change to our client-side
  // files. It's like `nodemon` for the front end!
  plugins: isDev ? [new LiveReloadPlugin({appendScriptTag: true})] : []
}

// module.exports = {
//   entry: './client/index.js', // assumes your entry point is the index.js in the root of your project folder
//   output: {
//     path: __dirname,
//     filename: './public/bundle.js' // assumes your bundle.js will also be in the root of your project folder
//   },
//   devtool: 'source-map',
//   module: {
//     rules: [
//       {
//         test: /\.jsx?$/,
//         exclude: /(node_modules|bower_components)/,
//         loader: 'babel-loader',
//         options: {
//           presets: ['react'] // if you aren't using 'babel-preset-es2015', then omit the 'es2015'
//         }
//       },
//       // use the style-loader/css-loader/sass-loader combos for anything matching the .scss extension
//       {
//         test: /\.scss$/,
//         use: [
//           'style-loader',
//           'css-loader',
//           'sass-loader'
//         ]
//       }
//     ]
//   }
// };
