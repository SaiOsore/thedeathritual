module.exports = function () {
    $.gulp.task("scripts", function () {
        return $.gulp.src(["./src/js/*.js", "!./src/js/vendor/*.js"])
          .pipe($.sourcemaps.init())
          .pipe($.babel({presets: ["@babel/preset-env"]}))
          .pipe($.concat("main.js"))
          .pipe($.sourcemaps.write("./maps/"))
          .pipe($.gulp.dest("./build/js/"))
          .pipe($.debug({"title": "scripts"}))
          .on("end", $.browsersync.reload);
    });
    $.gulp.task("jsVendor", function(){
        return $.gulp.src([
          "./src/js/vendor/*.js"
        ])
        .pipe($.gulp.dest("./build/js/"));
    });
};