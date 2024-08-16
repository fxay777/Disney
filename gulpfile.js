const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require ('gulp-uglify');

function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));
}

function images() {
    return gulp.src('./images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

function watchFiles() {
    gulp.watch('./src/styles/*.scss', gulp.series(styles));
    gulp.watch('./images/**/*', gulp.series(images));
}

function scripts(){
    return gulp.src('./src/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('/shows/js'));
}

exports.default = gulp.parallel(styles, images, scripts);
exports.watch = watchFiles;
