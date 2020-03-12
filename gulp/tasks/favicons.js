module.exports = function() {
    $.gulp.task("favicons", function() {
        return $.gulp.src("./src/assets/img/favicons/*.{jpg,jpeg,png,gif}")
            .pipe($.favicons({
                icons: {
                    appleIcon: true,
                    favicons: true,
                    online: false,
                    appleStartup: false,
                    android: false,
                    firefox: false,
                    yandex: false,
                    windows: false,
                    coast: false
                }
            }))
            .pipe($.gulp.dest("./build/assets/img/favicons/"))
            .pipe($.debug({"title": "favicons"}));
    });
    $.gulp.task("manifest", function(){
        return $.gulp.src([
          "./src/assets/img/favicons/*.*", "!./src/assets/img/favicons/*.{jpg,jpeg,png,gif}"
        ])
        .pipe($.gulp.dest("./build/assets/img/favicons/"));
    });
};