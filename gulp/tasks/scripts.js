const webpack = require("webpack-stream");

module.exports = function () {
  $.gulp.task("scripts", function () {
    return $.gulp.src(["./src/js/main.js", "!./src/js/vendor/*.js"])
      .pipe(webpack({
        entry: {
          app: './src/js/main.js',
        },
        mode: 'production',
        output: {
          filename: 'main.js',
        },
        module: {
          rules: [
            {
              test: /\.m?js$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: [['@babel/preset-env', {
                    debug: true,
                    corejs: 3,
                    useBuiltIns: "usage"
                  }]]
                }
              }
            }
          ]
        }
      }))
      .pipe($.gulp.dest("./build/js/"))
      .on("end", $.browsersync.reload);
  });
  $.gulp.task("jsVendor", function(){
    return $.gulp.src([
      "./src/js/vendor/*.js"
    ])
    .pipe($.gulp.dest("./build/js/"));
  });
};