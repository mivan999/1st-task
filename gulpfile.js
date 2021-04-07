const gulp = require('gulp'),
    concat = require('gulp-concat');

gulp.task('js',()=>{
    return gulp.src('./common.blocks/**/*.js')
        .pipe(concat('index.js'))
        .pipe(gulp.dest('./'));
});


gulp.task('css',()=>{
    return gulp.src('./common.blocks/**/*.css')
        .pipe(concat('style.css'))
        .pipe(gulp.dest('./'));
});