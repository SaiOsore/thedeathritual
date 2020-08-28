module.exports = function() {
  $.gulp.task("videos", function(){
    return $.gulp.src(["./src/assets/video/**/*.mp4"])
      .pipe($.gulp.dest("./build/assets/video"));
  });
};