chrome.browserAction.onClicked.addListener(function(){
	//chrome.tabs.create({url : 'http://facebook.com'});
	/*chrome.tabs.executeScript(null,{
		code : "document.body.style.background = 'green';"
	});*/
	var information = '232423';
	chrome.tabs.executeScript(null,{
		code: 'var information = "'+information+'";'
	},function(){
		chrome.tabs.executeScript(null,{file : 'script.js'});
	});
});