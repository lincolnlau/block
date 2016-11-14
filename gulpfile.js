const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('eslint');

gulp.task('default', function () {
	gulp.src(['src/**/*.js'])
		.pipe(eslint())
		.pipe(eslint.format());

	gulp.src('src/**/*.js')
		.pipe(babel());

	// gulp.src('public/es6/**/*.js')
	// 	.pipe(babel())
	// 	.pipe(gulp.dest('public/dist'));
});
