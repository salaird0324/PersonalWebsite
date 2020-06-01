// 'use strict';
//
// // dependencies
// var gulp = require('gulp');
// var sass = require('gulp-sass');
// var minifyCSS = require('gulp-clean-css');
// var uglify = require('gulp-uglify');
// var rename = require('gulp-rename');
// var changed = require('gulp-changed');
//
//
//
// ///////////////
// // - SCSS/CSS
// ///////////////
//
// var SCSS_SRC = './src/Assets/SCSS/*.scss';
// var SCSS_DEST = './src/Assets/CSS';
//
// // Compile SCSS
// //gulp.task('compile_scss', function(){
// //
// //    gulp.src(SCSS_SRC)
// //    .pipe(sass().on('error', sass.logError))
// //    .pipe(minifyCSS())
// //    .pipe(rename({ suffix: '.min' }))
// //    .pipe(changed(SCSS_DEST))
// //    .pipe(gulp.dest(SCSS_DEST));
// //
// //
// //});
//
// function compile_scss() {
//     return gulp.src(SCSS_SRC)
//         .pipe(sass()).on('error', sass.logError)
//         .pipe(minifyCSS())
//         .pipe(rename({ suffix: '.min' }))
//         .pipe(changed(SCSS_DEST))
//         .pipe(gulp.dest(SCSS_DEST));
// }
//
// // detect changes in SCSS
// //gulp.task('watch_scss', gulp.series('compile_scss', function(){
// //    gulp.watch(SCSS_SRC, ['compile_scss']);
// //}));
//
// function watch_scss() {
//     gulp.watch(SCSS_SRC, gulp.series(compile_scss));
// }
//
//
// // Run tasks
// // gulp.task('default', ['watch_scss']);
// gulp.task('default', gulp.series(watch_scss));
//
// exports.compile_scss = compile_scss;
// exports.watch_scss = watch_scss;



'use strict';

//dependencies
const gulp = require('gulp'),
    sass = require('gulp-sass'),
    minifyCSS = require('gulp-clean-css'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssnano = require('cssnano'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    changed = require('gulp-changed'),
    browserSync = require('browser-sync').create();

// SCSs/CSS

var SCSS_SRC = './src/Assets/SCSS/**/*.scss';
var SCSS_DEST = './src/Assets/CSS';

var paths = {
    styles: {
        src: './src/Assets/SCSS/**/*.scss',

        destination: './src/Assets/CSS'
    }
}


function style() {
    return gulp
        .src(paths.styles.src)
        .pipe(sass())
        .pipe(minifyCSS())
        .pipe(rename({suffix: '.min'}))
        .pipe(changed(paths.styles.destination))
        .pipe(gulp.dest(paths.styles.destination))
}

function reload() {
    browserSync.reload();
}

function watch() {

    // browserSync.init({
    //    server: {
    //        baseDir: "public/",
    //        directory: true
    //    }
    // });
    gulp.watch(paths.styles.src, style);
    // gulp.watch("./**/*.html").on('change', browserSync.reload)
}

exports.watch = watch;
exports.style = style;

var build = gulp.parallel(style, watch);

gulp.task('build', build);
gulp.task('default', build);



// gulp.task('compile_scss', function(){
//
//     return gulp.src(SCSS_SRC).pipe(sass()).pipe(minifyCSS()).pipe(rename({suffix: '.min'})).pipe(changed(SCSS_DEST)).pipe(gulp.dest(SCSS_DEST));
//
// });
//
// //detect changes in SCSS
// gulp.task('watch_scss', function(){
//     gulp.watch(SCSS_SRC, gulp.parallel('compile_scss'));
//
// });
//
// //run tasks
// gulp.task('default', gulp.series('watch_scss'));

