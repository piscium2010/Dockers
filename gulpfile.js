const fs = require('fs')
const gulp = require('gulp')
const gulpLoadPlugins = require('gulp-load-plugins')
const ts = require('gulp-typescript');
const less = require('gulp-less');
const tsProject = ts.createProject('../lime/tsconfig.json');

const plugins = gulpLoadPlugins()
const env = process.env.NODE_ENV || 'development'
const isProduction = () => env === 'production'

gulp.task('create:dir', function(){
    if (!fs.existsSync('node_modules/lime')){
        fs.mkdirSync('node_modules/lime');
    }
})

gulp.task('compile:tsx', function () {
    return gulp.src(['../lime/src/**/*.tsx','../lime/src/index.js'])
        .pipe(tsProject())
        .js.pipe(gulp.dest('node_modules/lime'));
});

gulp.task('compile:less', () => {
    return gulp.src(['../lime/src/lime.less'])
      .pipe(less())
      .pipe(gulp.dest('node_modules/lime'))
})

gulp.task('copy:package', () => {
    copyFile('../lime/package.json','node_modules/lime/package.json')
})

gulp.task('default', ['create:dir','compile:less','compile:tsx', 'copy:package'])

function copyFile(source,target) {
    fs.copyFileSync(source, target)
}