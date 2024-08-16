const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

// Compile Sass into CSS
function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));
}

// Optimize Images
function images() {
    return gulp.src('./src/images/**/*') // Changed path to src/images if images are in src folder
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

// Minify JavaScript
function scripts() {
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js')); // Changed destination to dist/js
}

// Watch for file changes
function watchFiles() {
    gulp.watch('./src/styles/*.scss', gulp.series(styles));
    gulp.watch('./src/images/**/*', gulp.series(images));
    gulp.watch('./src/scripts/*.js', gulp.series(scripts)); // Added watch for JS files
}

// Define tasks
exports.default = gulp.parallel(styles, images, scripts);
exports.watch = watchFiles;
