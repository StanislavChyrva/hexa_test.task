const gulp = require('gulp');
const del = require('del');
const { series, parallel } = require('gulp');
const autoPrefixer = require('gulp-autoprefixer');
const clean = require('gulp-clean');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();
const terser = require('gulp-terser');
var sass = require('gulp-sass');
sass.compiler = require('node-sass');


function html() {
    return gulp.src('src/*.html')
        .pipe(gulp.dest('dist/'))
        .pipe(browserSync.stream());
}

function style() {
    return gulp.src('src/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('styles-min.css'))
        .pipe(autoPrefixer({
            overrideBrowserslist: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cleanCSS({level: 2}))
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream());
}

function fonts() {
    return gulp.src('src/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'))
        .pipe(browserSync.stream());
}


function script() {
    return gulp.src('src/js/**/*.js')
        .pipe(concat('script-min.js'))
        .pipe(terser())
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.stream());
}

function image() {
    return gulp.src('src/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'))
        .pipe(browserSync.stream());
}

function cleanHtml() {
    return del('dist/*.html')
}

function cleanCss() {
    return gulp.src('dist/css', {read: false})
        .pipe(clean());
}

function cleanJs() {
    return gulp.src('dist/js', {read: false})
        .pipe(clean());
}

function cleanImg() {
    return gulp.src('dist/img', {read: false})
        .pipe(clean());
}

function cleanFonts() {
    return gulp.src('dist/fonts', {read: false})
        .pipe(clean());
}


function watch() {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });
    gulp.watch('src/sass/**/*.scss', style);
    gulp.watch('src/js/**/*.js', script);
    gulp.watch('src/img/*', image);
    gulp.watch('src/fonts/*', fonts);
    gulp.watch("dist/*.html").on('change', browserSync.reload);
}


exports.build = series(parallel(cleanHtml, cleanCss, cleanJs, cleanImg, cleanFonts), parallel(html, style, script, image, fonts));
exports.dev = series(exports.build, watch);

