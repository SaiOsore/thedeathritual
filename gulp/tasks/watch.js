module.exports = function() {
    $.gulp.task("watch", function() {
        return new Promise((res, rej) => {
            $.watch(["./src/views/**/*.pug", "./src/views/blocks/*.pug"], $.gulp.series("html"));
            $.watch("./src/styles/**/*.scss", $.gulp.series("styles"));
            $.watch(["./src/assets/img/**/*.{jpg,jpeg,png,gif,mp4}", "!./src/assets/img/icons/svg/*.svg", "!./src/assets/img/favicons/*.{jpg,jpeg,png,gif}"], $.gulp.series("images"));
            $.watch("./src/js/**/*.js", $.gulp.series("scripts", "jsVendor"));
            res();
        });
    });
};