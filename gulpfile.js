var gulp = require('gulp');
var webserver = require('gulp-webserver');
var shell = require('gulp-shell');
// built-in tool
var path = require('path');
var join = path.join;

gulp.task('server' , function()
{
    gulp.src('./dist')
        .pipe(webserver({
             livereload: true,
             open: true
        }));
});

gulp.task('rollup' , shell.task([
     'rollup -c'
]));

gulp.task('html', function () {
  return gulp.src('./src/index.html')
    .pipe(gulp.dest('./dist/'))
});

gulp.task('watch' , function() {
  gulp.watch('src/index.html', ['html']);
  gulp.watch(['./src/**/*.tag', './src/main.js'] , ['rollup']);
});

gulp.task('default' , ['html', 'watch' , 'server' , 'rollup']);