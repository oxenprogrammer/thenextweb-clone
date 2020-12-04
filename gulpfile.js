var gulp = require('gulp');
var less = require('gulp-less');
var browserSync = require('browser-sync').create();


gulp.task('less', function () {
    return gulp.src('./src/less/**/*.less')
      .pipe(less())
      .pipe(gulp.dest('./src/css'))
      .pipe(browserSync.reload({
        stream: true
      }));
});

gulp.task('browserSync', function() {
    browserSync.init({
      server: {
        baseDir: 'src'
      },
    })
})

gulp.task('watch', gulp.series(['browserSync', 'less']), function(){
    gulp.watch('./src/less/**/*.less', gulp.series(['less'])); 
    // Other watchers
})
