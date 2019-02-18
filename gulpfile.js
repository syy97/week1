var gulp = require("gulp");
var concat = require("gulp-concat");
var cssmin = require("gulp-clean-css");
var jsmin = require("gulp-uglify");
var sass = require("gulp-sass");
var webserver = require("gulp-webserver");

//开启服务
gulp.task("webserver", function() {
    return gulp.src("./src")
        .pipe(webserver() {
            open: true,
            port: 8080,
            livereload: true
        })
})

//scss
gulp.task("sass", function() {
    return gulp.src("./src/css/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("./dist"))
})

//合并压缩
gulp.task("sass", function() {
    return gulp.src("./src")
        .pipe(concat("main.css"))
        .pipe(cssmin())
        .pipe(gulp.dest("./dist"))
})

//js
gulp.task("js", function() {
    return gulp.src("./src/js/*.js")
        .pipe(concat("./dulid.js"))
        .pipe(jsmin())
        .pipe(gulp.dest("./dist"))
})

//监听watch
gulp.task("watch", function() {
    return gulp.watch("./src/*.css")

})

//创建default任务
gulp.task("default", function() {
    return gulp.series("sass", "css", "webserver", "watch")
})

//创建build任务
gulp.task("build", function() {
    return gulp.parallel("js", "css")
        .pipe(gulp.dest("./dist"))
})