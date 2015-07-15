
var async = require('async');
/*var request = require('request');
var checkurl = function(host){
	async.retry(5, function(callback) {
		request.get({
			url: 'http://' + host,
		/!*	headers: {
				'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1941.3 Safari/537.36 (compatible; Allmobilize Spider/2.1; +http://www.yunshipei.com/bot.html)'
			},
			followAllRedirects: false,
			followRedirect: false,
			timeout: 5 * 1000,*!/
			timeout: 5 * 1000,
			encoding: false
		}, function(err, response, body) {
			// console.log(response.statusCode);
			// console.log(i++);
			if (err) {
				return callback(new Error('网站无法打开'));
			} else if (response.statusCode === 200) {
				return callback();
			} else if ((response.statusCode === 302) || (response.statusCode === 301)) {
				return callback(null, response.headers.location);
			} else {
				return callback(new Error('网站无法打开'));
			}
		});
	}, function(err, result) {
		if (err){
			console.log('cuode url')
		}else{
			console.log('duide url')
		}

	});
}

checkurl('14.17.105.78:80');
*/


var test = function(){
	var flag=false;
	outloop:for(var i=0;i< 10;i++){
		console.log(i);
		if(!flag){
			break outloop;
		}
	}
	async.times(1,function(){

	},function(err,data){

	});
}

test();