var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sassModuleImporter = require('sass-module-importer');

// Sass task
gulp.task('sass', function() {
    return gulp.src('./src/assets/sass/**/*.scss')
        .pipe(sass({ importer: sassModuleImporter() }))
        .on('error', function(errorInfo) {
            console.log(errorInfo.toString());
            this.emit('end');
        })
        .pipe(gulp.dest('./src/assets/css/'));
});