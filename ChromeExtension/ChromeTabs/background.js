chrome.browserAction.onClicked.addListener(function(){
	chrome.tabs.create({url : 'http://facebook.com'});
});