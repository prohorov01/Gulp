import minifyCSS from 'gulp-minify-css';
import concatCss from 'gulp-concat-css';


export const css = () => {
    return app.gulp.src(app.path.src.css, {sourcemaps: true})
    .pipe(concatCss("style.css"))
    .pipe(minifyCSS())
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.browserSync.stream());
}