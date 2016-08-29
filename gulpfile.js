var gulp   = require('gulp');
var concat = require('gulp-concat');
var source = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');

gulp.task('default', function () {
	return gulp.src([
		'lib/fitie.js'
	]).pipe(
		source.init()
	).pipe(
		concat('fitie.js')
	).pipe(
		uglify({
			preserveComments: 'license'
		})
	).pipe(
		source.write('.')
	).pipe(
		gulp.dest('dist')
	);
});
