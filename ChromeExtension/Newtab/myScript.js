//chrome.runtime.sendMessage(document.getElementsByTagName('title')[0].innerText);
var url = chrome.extension.getURL("tootbar.html");
var height = '35px';
var iframe = "<iframe src='"+url+"' id='myownCustomefirstToolbar1234' style='height:"+height+"'></iframe>";

$('html').append(iframe);

$('body').css({
 '-webkit-transform' : 'translateY('+height+')'
});