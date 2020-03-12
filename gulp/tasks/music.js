module.exports = function() {
    $.gulp.task("music", function(){
        return $.gulp.src(["./src/assets/music/**/*.{mp3,wav,rar}"])
            .pipe($.gulp.dest("./build/assets/music"));
    });
};