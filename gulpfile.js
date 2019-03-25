const gulp = require('gulp');
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    minifyCSS = require('gulp-minify-css'),
     imagemin = require('gulp-imagemin'),
        htmlmin = require('gulp-htmlmin');

gulp.task('scripts',function(){
    gulp.src('src/Plugins/*.js')
        .pipe(uglify())
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('src/PluginsMinify'))
});
gulp.task('styles',function(){
    gulp.src('src/assets/css/*.css')
        .pipe(minifyCSS({keepBreaks : true}))
        .pipe(gulp.dest('src/assets/css'))
});
gulp.task('watch',function(){
    gulp.watch('src/Plugins/*.js',['scripts']);
    gulp.watch('src/assets/css/*.css',['styles']);
});
gulp.task('image', () =>
    gulp.src('src/assets/icons/*')
        .pipe(imagemin())
        .pipe(gulp.dest('src/assets/icons'))
);
gulp.task('html', () => {
    return gulp.src('src/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('src/'));
});

