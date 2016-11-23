/**
 * Created by caoyi on 2016/11/23.
 */
var fs = require('fs');
//异步读取
fs.readFile('./file.txt', function (err, data) {
    if (err) {
        console.error(err);
    } else {
        console.log('异步读取：' + data.toString());
    }
});
//同步读取
/*
var data = fs.readFileSync('./file.txt');
console.log("同步读取: " + data.toString());
*/

console.log("程序执行完毕。");