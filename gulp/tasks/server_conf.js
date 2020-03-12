module.exports = function() {
	$.gulp.task("server_conf", function() {
		return $.gulp.src("./src/.htaccess")
			.pipe($.gulp.dest("./build/"))
			.pipe($.debug({"title": "htaccess"}));
	});
};