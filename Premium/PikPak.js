/*

[rewrite_local]

^https:\/\/api-drive\.mypikpak\.com\/(vip\/v\d\/vip\/info|drive\/v\d\/about\?space) url script-response-body https://raw.githubusercontent.com/510004015/Quantumult_X/Remote/Premium/PikPak.js

[mitm] 

hostname = api-drive.mypikpak.com

*/

var url = $request.url;
var modified = JSON.parse($response.body);
const URL1 = '/vip/info';
const URL2 = '/about';
if (url.indexOf(URL1) != -1) {
  modified.data.expire = "2099-01-01T00:00:00+08:00";
  modified.data.status = "ok";
  modified.data.type = "platinum";
  modified.data.vipItem = [
      {
        "status" : "ok",
        "expire" : "2099-01-01T00:00:00+08:00",
        "type" : "regional",
        "description" : "区域会员",
        "surplus_day" : 510004015
      }
    ];
};
if (url.indexOf(URL2) != -1) {
  modified.quota.limit = "10995116277760";
};
$done({body:JSON.stringify(modified)});
