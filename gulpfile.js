var gulp = require('gulp'),
	connect = require('gulp-connect'),
	webpack = require('webpack-stream'),
	port = process.env.port || 5000;

// 基于node开启一个本地服务，实现浏览器自动刷新，热加载
gulp.task('connect',function(){
	connect.server({
		// root:'./',
		port: port,
		livereload: true,
	})
})

// js打包
gulp.task("webpack", function () {
  return gulp.src("./src/js/index.js")
	.pipe(webpack( require('./webpack.config.js') ))
    .pipe(gulp.dest("./dist/js")); 
});

// reload Js 
gulp.task('js',function(){
	gulp.src('./dist/**/*.js')
	.pipe( connect.reload() )
})

gulp.task('html',function(){
	gulp.src('./app/**/*.html')
	.pipe( connect.reload() )
});

gulp.task('watch',function(){
	gulp.watch('./dist/**/*.js',['js']);
	gulp.watch('./page/**/*.html',['html']);
	gulp.watch('./src/js/**/*.js',['webpack']);
	gulp.watch('./src/css/**/*.css',['webpack']);
})


gulp.task('server',['webpack','connect','watch']);
