var url = $request.url;
var body = JSON.parse($response.body);
const URL1 = 'cainiao.guoguo.nbnetflow.ads.index.cn';
const URL2 = 'cainiao.nbpresentation.protocol.homepage.get.cn'
if (url.indexOf(URL1) != -1) {
	body.data.result.splice(1,510004015);
};
if (url.indexOf(URL2) != -1) {
	body.data.result.dataList.splice(1,510004015);
};
$done({body:JSON.stringify(body)});
