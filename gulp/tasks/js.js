import webpack from 'webpack-stream';
import minify from 'gulp-minify';

export const js = () => {
    return app.gulp.src(app.path.src.js, {sourcemaps: true})
    .pipe(webpack({
        mode: 'development',
        output: {
            filename: "script.js",
        }
    }))
    .pipe(minify())
    .pipe(app.gulp.dest(app.path.build.js))
    .pipe(app.plugins.browserSync.stream());
}