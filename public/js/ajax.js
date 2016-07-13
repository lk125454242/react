/**
 * Created by lk on 16-4-21.
 */
const HTTP = require('http');
const QS = require('querystring');
function AJAX(option) {
    var callback = function (json) {
        console.log(json);
    };
    var req = HTTP.request(option,function (res) {
        res.setEncoding('utf8');//设置字符编码
        var responseText = '';//返回数据流
        res.on('data', function (data) {
            responseText = JSON.parse(data);
        });//数据
        res.on('end', function(){
            callback(responseText);
        });// 结束回调
        //console.log(res.statusCode);
        //console.log(JSON.stringify(res.headers));
        req.on('error', function(e) {
            console.log('ERROR' + JSON.stringify(e.message));
        });//错误回调
    });
    return {
        send:function (data,fn) {
            callback = fn;
            req.write(QS.stringify(data));
            req.end();
        }
    }
}
module.exports = AJAX;