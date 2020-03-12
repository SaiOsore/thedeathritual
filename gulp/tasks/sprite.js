module.exports = function() {
    $.gulp.task("sprite", function() {
        return $.gulp.src("./src/assets/img/icons/svg/*.svg")
            //.pipe($.replace("&gt;", ">"))
            // .pipe($.svgSprite({
            //     preview: false,
            //     cssFile: "../../../src/styles/partials/_sprite.scss",
            //     svg: {
            //         sprite: "../../../build/assets/img/sprites/sprite.svg"
            //     }
            // }))
            .pipe($.gulp.dest("./build/assets/img/sprites/"))
            .pipe($.debug({"title": "sprite"}));
    });
};