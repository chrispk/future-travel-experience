// Example Gulp Setups for Jekyll:
// https://aaronlasseigne.com/2016/02/03/using-gulp-with-jekyll/
// https://gist.github.com/dope/071dc7741f6ab2c77116

const gulp = require('gulp');

// Jekyll Tools
const child = require('child_process'); //?
const gutil = require('gulp-util');

//Source Tools
const less = require('gulp-less');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const clean = require('gulp-clean');
const sourcemaps = require('gulp-sourcemaps');
const	autoprefixer = require('gulp-autoprefixer');
const	plumber = require('gulp-plumber');
const	cssnano = require('gulp-cssnano');
const	jshint = require('gulp-jshint');
const	stylish = require('jshint-stylish');

// Live Reload Tools
const browserSync = require('browser-sync').create();
const siteRoot = '_site';
// const cssFiles = '_css/**/*.?(s)css';

  basepaths = {
          src: './source',
          dest: './assets',
          jekyll: './_site/assets'
      },

    paths = {
        js: {
            src: basepaths.src + '/js',
            dest: basepaths.dest,
            jekyll: basepaths.jekyll,
            node: 'node_modules'
        },
        css: {
            src: basepaths.src + '/less',
            dest: basepaths.dest,
            jekyll: basepaths.jekyll
        },
        templates: {
          includes: './_includes',
          layouts: './_layouts',
          posts: './_posts'
        },
    };

/*
 Styles - Clean
 */
gulp.task('clean-styles', function () {
    return gulp.src(['style.css', 'style.css.map'], {read: false})
        .pipe(clean());
});

/*
 Styles Task
 */
gulp.task('styles', ['clean-styles'], function() {
    gulp.src(paths.css.src + '/style.less')
        .pipe(plumber({
            errorHandler: function(error) {
                console.log('Styles Error: ' + error.message);
                this.emit('end');
            }
        }))

        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(autoprefixer('last 2 version'))
        .pipe(cssnano())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(paths.css.dest))
        .pipe(gulp.dest(paths.css.jekyll))
});



/*
 Scripts - Clean
 */
gulp.task('clean-scripts', function () {
    return gulp.src(paths.js.dest + '/all.min.js', {read: false})
        .pipe(clean());
});

/*
 Scripts - Hint
 */
gulp.task('hint', ['clean-scripts'], function() {
    return gulp.src(paths.js.src + '/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(jshint.reporter('fail'));
});

/*
 * Scripts - copy vendor folder from source to public
 */
gulp.task('vendor', function () {
    return gulp.src(
        [
            paths.js.src + '/vendor/**/*.js',
        ])
        .pipe(plumber({
            errorHandler: function (error) {
                console.log('Scripts Error: ' + error.message);
                this.emit('end');
            }
        }))
        .pipe(gulp.dest(paths.js.dest))
});


/*
 Scripts - Concat and Uglify
 */
gulp.task('scripts', ['hint','vendor'],  function() {
    gulp.src([
            paths.js.node + '/svg4everybody/dist/svg4everybody.min.js',
            paths.js.node + '/picturefill/dist/picturefill.min.js',
            paths.js.src + '/**/*.js',

            // the vendor directory is used for client code (code we shouldn't touch)
            '!' + paths.js.src + '/vendor/**/*.js'
        ])
        .pipe(plumber({
            errorHandler: function(error) {
                console.log('Scripts Error: ' + error.message);
                this.emit('end');
            }
        }))
				.pipe(sourcemaps.init())
        .pipe(uglify({ mangle: false }))
				.pipe(concat('all.min.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.js.dest))
        .pipe(gulp.dest(paths.js.jekyll))
});

/*
 Jekyll - Compile Jekyll
 */

gulp.task('jekyll', () => {
  const jekyll = child.spawn('bundle', ['exec', 'jekyll', 'build',
    //'--watch',
    //'--incremental',
    //'--drafts'
  ]);

  const jekyllLogger = (buffer) => {
    buffer.toString()
      .split(/\n/)
      .forEach((message) => gutil.log('Jekyll: ' + message));
  };

  jekyll.stdout.on('data', jekyllLogger);
  jekyll.stderr.on('data', jekyllLogger);
});

gulp.task('serve', () => {
  browserSync.init({
    /*
    * disable watcing siteRoot
    * issue: https://github.com/BrowserSync/browser-sync/issues/1536#issuecomment-383719320
    * if browsersync refreshes are required set files to watch source files instead
    */
    //files: [siteRoot + '/**'],
    port: 4000,
    server: {
      baseDir: siteRoot
    }
  });
});

gulp.task("default", ['jekyll', 'styles', 'hint', 'scripts', 'serve'], function() {

	gulp.watch(paths.css.src + '/**/*.less', ['styles']);
	gulp.watch(paths.js.src + '/**/*.js', ['hint']);
	gulp.watch(paths.js.src + '/**/*.js', ['scripts',]);
  //gulp.watch(['./*.{html,md}', './{_includes,_layouts,_posts,_pages,_drafts,assets,images}/**'], ['jekyll']);
});
