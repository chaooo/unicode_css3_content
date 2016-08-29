var gulp = require('gulp');

//jade->html
var jade = require('gulp-jade');
gulp.task('testJade', function() {
    gulp.src('src-dev/*.jade')
    .pipe(jade({pretty:true}))
    .pipe(gulp.dest('./'));
});

//stylus->css
var stylus = require('gulp-stylus'),
    nib = require('nib'),
    autoprefixer = require('gulp-autoprefixer'),
    cssmin = require('gulp-clean-css');
gulp.task('testStylus', function(){
    var options1 = {
        browsers: ['last 4 versions', 'Android >= 4.0'],
        cascade: true, //是否美化属性值 默认：true 像这样：
        //-webkit-transform: rotate(45deg);
        //        transform: rotate(45deg);
        remove:true //是否去掉不必要的前缀 默认：true 
    }; 
    var options2 = {
        advanced: false,//类型：Boolean 默认：true [是否开启高级优化（合并选择器等）]
        compatibility: 'ie8',//保留ie7及以下兼容写法 类型：String 默认：''or'*' [启用兼容模式； 'ie7'：IE7兼容模式，'ie8'：IE8兼容模式，'*'：IE9+兼容模式]
        keepBreaks: true//类型：Boolean 默认：false [是否保留换行]
    };
    gulp.src('src-dev/css/*.styl')
        .pipe(stylus({error: true, use: [nib()]}))
        .pipe(autoprefixer(options1))
        .pipe(cssmin(options2))
        .pipe(gulp.dest('css/'));
});

gulp.task('watch', function() {
    gulp.watch('**/*.jade', ['testJade']);
    gulp.watch('src-dev/css/*.styl', ['testStylus']);
});
gulp.task('default', ['watch']);
