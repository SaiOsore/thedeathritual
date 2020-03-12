module.exports = function() {
    $.gulp.task("images", function() {
        return $.gulp.src(["./src/assets/img/**/*.{jpg,jpeg,png,gif,mp4,mov,avi}", "!./src/assets/img/svg/icons/*", "./src/assets/img/favicons/*.{jpg,jpeg,png,gif}"])
            .pipe($.newer("./build/assets/img/"))
            /*.pipe($.imagemin([
                $.imagemin.gifsicle({interlaced: true}),
                $.imagemin.jpegtran({progressive: true}),
                $.imageminJpegRecompress({loops: 1, quality: "low"}),
                $.imagemin.svgo(),
                $.imagemin.optipng({optimizationLevel: 5}),
                $.pngquant({quality: "65-70", speed: 5})
            ]))*/
            .pipe($.gulp.dest("./build/assets/img/"))
            .pipe($.debug({"title": "images"}))
            .on("end", $.browsersync.reload);
    });
};