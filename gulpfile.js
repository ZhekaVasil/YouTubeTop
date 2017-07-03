/*global gulp*/
const gulp = require('gulp');
const handlebars = require('gulp-handlebars');
const wrap = require('gulp-wrap');
const declare = require('gulp-declare');
const concat = require('gulp-concat');
const useref = require('gulp-useref');
const sass = require('gulp-sass');
const path = require('path');

gulp.task('default', ['templates', 'partials', 'sass', 'watch']);

gulp.task('sass', function () {
  return gulp.src('./src/css/scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./src/css'));
});

gulp.task('templates', function(){
  gulp.src(['src/templates/**/*.hbs', '!src/templates/partials/**'])
    .pipe(handlebars())
    .pipe(wrap('Handlebars.template(<%= contents %>)'))
    .pipe(declare({
      namespace: 'ytt.templates',
      noRedeclare: true, // Avoid duplicate declarations 
    }))
    .pipe(concat('templates.js'))
    .pipe(gulp.dest('src/js/'));
});

gulp.task('partials', function() {
  gulp.src(['src/templates/partials/_*.hbs'])
    .pipe(handlebars())
    .pipe(wrap('Handlebars.registerPartial(<%= processPartialName(file.relative) %>, Handlebars.template(<%= contents %>));', {}, {
      imports: {
        processPartialName: function(fileName) {
          return JSON.stringify(path.basename(fileName, '.js').substr(1));
        }
      }
    }))
    .pipe(concat('partials_templates.js'))
    .pipe(gulp.dest('src/js/'));
});

gulp.task('watch', function () {
  gulp.watch(['src/templates/**', '!src/templates/partials/**'],['templates']);
  gulp.watch('src/css/scss/**',['sass']);
  gulp.watch('src/templates/partials/**',['partials'])
});

//TODO improve it!
gulp.task('js', function () {
  return gulp.src([
    'src/index.html'
  ])
  .pipe(useref())
  .pipe(gulp.dest('dist'));
});