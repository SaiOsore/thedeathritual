module.exports = function() {
    $.gulp.task("html", function() {
        return $.gulp.src(["./src/views/*.pug", "!./src/views/blocks/*.pug"])
            .pipe($.pug({
              pretty:true
            }))
            .pipe($.gulp.dest("./build/"))
            .pipe($.debug({"title": "html"}))
            .on("end", $.browsersync.reload);
            });
};