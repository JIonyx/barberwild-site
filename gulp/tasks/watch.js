var gulp = require('gulp'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync');

// CSSInject task
gulp.task('cssInject', ['sass'], function() {
    return gulp.src('./src/assets/css/styles.css')
        .pipe(browserSync.stream());
});

gulp.task('watch', function() {
    browserSync.init({
        server: {
            baseDir: "src"
        }
    });

    watch('./src/*.html', function() {
        browserSync.reload();
    });

    watch('./src/assets/sass/**/*.scss', function() {
        gulp.start('sass');
    })

    watch('./src/assets/css/**/*.css', function() {
        // console.log('sass works');
        // gulp.start('cssInject');
        browserSync.reload();
    });

    watch('./src/js/**/*.js', function() {
        browserSync.reload();
    })
});