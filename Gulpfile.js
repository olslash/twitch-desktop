var gulp = require('gulp'),
    browserify = require('browserify'),
    del = require('del'),
    reactify = require('reactify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    livereload = require('gulp-livereload'),
    sass = require('gulp-sass'),
    path = require('path'),
    bourbon = require('node-bourbon'),
    babelify = require('babelify'),
    sourcemaps = require('gulp-sourcemaps'),
    neat = require('node-neat');

var paths = {
    scss: {
        main: './src/renderer/scss/site.scss',
        sources: ['./src/renderer/scss/**/*.scss']
    },
    html: ['./src/renderer/index.html'],
    fonts: ['./src/renderer/fonts/*'],
    js: {
        app: './src/renderer/js/TwitchDesktop.js',
        sources: ['./src/renderer/js/**/*.js']
    },
    extensions: ['./src/extensions/**/*']
};

gulp.task('css', function() {
    return gulp.src(paths.scss.main)
        .pipe(sass({
            includePaths: neat.includePaths
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./build/renderer/css'))
        .pipe(livereload());
});

gulp.task('js', function() {
    return browserify({entries: paths.js.app, debug: true})
        .transform(babelify)
        .bundle()
        .pipe(source('TwitchDesktop.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./build/renderer'))
        .pipe(livereload());
});

gulp.task('fonts', function() {
    return gulp.src(paths.fonts)
        .pipe(gulp.dest('./build/renderer/fonts'))
        .pipe(livereload());
});

gulp.task('html', function() {
    return gulp.src(paths.html)
        .pipe(gulp.dest('./build/renderer'))
        .pipe(livereload());
});

gulp.task('browser', function() {
    return gulp.src(['./src/browser/**/*'], {
        base: './src'
    })
        .pipe(gulp.dest('build'));
});

gulp.task('build', ['css', 'js', 'fonts', 'html', 'browser']);

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch(paths.scss.sources, ['css']);
    gulp.watch(paths.js.sources, ['js']);
    gulp.watch(paths.html, ['html']);
    gulp.watch(['./src/browser/**/*'], ['browser']);
});

gulp.task('default', ['build', 'watch']);
