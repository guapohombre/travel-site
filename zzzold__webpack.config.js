const currentTask = process.env.npm_lifecycle_event;
const path = require('path');


const postCSSPlugins = [
  require('postcss-import'),
  require('postcss-mixins'),
  require('postcss-simple-vars'),
  require('postcss-nested'),
  require('autoprefixer'),
  require('postcss-hexrgba')
]

let config = {
  entry: './app/assets/scripts/App.js',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader?url=false',
          {loader: 'postcss-loader', options: {
            // plugins: postCSSPlugins
            //begin insert
            plugins: [
              new webpack.LoaderOptionsPlugin({
                // test: /\.xxx$/, // may apply this only for some modules
                options: {
                  devSever: …
                }
                })
                ]
//end insert
          } }
        ]
      }
    ]
  }
}

if (currentTask == 'dev') {
  config.output = {
    filename: 'bundled.js',
    path: path.resolve(__dirname, 'app')
  },
  config.devSever = {
    before: function(app,server){
      server._watch('./app/**/*.html')
    },
    contentBase: path.join(__dirname, 'app'),
    hot: true,
    port: 3000,
    host: '0.0.0.0'
  },
  config.mode = 'development'
}

if (currentTask == 'build') {
 config.output = {
     filename: 'bundled.js',
     path: path.resolve(__dirname, 'dist')
   },
   config.mode = 'production'
}



// let deleteMeLater = {
  // entry: './app/assets/scripts/App.js',
  // output: {
  //   filename: 'bundled.js',
  //   path: path.resolve(__dirname, 'app')
  // },
  // devServer: {
  //   before: function(app,server){
  //     server._watch('./app/**/*.html')
  //   },
  //   contentBase: path.join(__dirname, 'app'),
  //   hot: true,
  //   port: 3000,
  //   host: '0.0.0.0'
  // },
  // mode: 'development',
  // module: {
  //   rules: [
  //     {
  //       test: /\.css$/i,
  //       use: [
  //         'style-loader',
  //         'css-loader?url=false',
  //         {loader: 'postcss-loader', options: {
  //           plugins: postCSSPlugins
  //         } }
  //       ]
  //     }
  //   ]
  // }
// }


module.exports = config
