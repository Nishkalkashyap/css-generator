import gulp from 'gulp';
import concat from "gulp-concat";

gulp.task('css', () => {
    gulp.src([
        './elementor/wp-content/themes/blank-theme/style.css',
        './elementor/wp-content/plugins/elementor/assets/lib/**/*.min.css',
        './elementor/wp-content/plugins/elementor/assets/css/frontend.min.css',
        './elementor/wp-content/plugins/elementor-pro/assets/css/frontend.min.css',
        './elementor/wp-content/uploads/elementor/css/*.css',
        './elementor/wp-content/plugins/essential-addons-elementor-lite/assets/**/*.css', 
    ])
        .pipe(concat('elementor-css.css'))
        .pipe(gulp.dest('../Project/quark/src/assets/elementor'))
});

gulp.task('addons-js', () => {
    gulp.src([
        './elementor/wp-content/plugins/essential-addons-elementor-lite/assets/**/*.js'
    ])
        .pipe(concat('addons-js.js'))
        .pipe(gulp.dest('../Project/quark/src/assets/elementor'))
});

gulp.task('head-js', () => {
    gulp.src([
        './elementor/wp-includes/js/jquery/jquery.js',
        './elementor/wp-includes/js/jquery/jquery-migrate.min.js',
    ])
        .pipe(concat('elementor-head-js.js'))
        .pipe(gulp.dest('../Project/quark/src/assets/elementor'))
});

// gulp.task('js',['addons-js','head-js']);

gulp.task('codemirror', () => {
    gulp.src([
        './elementor/codemirror-themes/*.css'
    ])
        .pipe(concat('codemirror-themes.css'))
        .pipe(gulp.dest('../Project/quark/src/assets/codemirror'))
});