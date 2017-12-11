chrome.app.runtime.onLaunched.addListener(function(){
	//console.log("Link Clicked!");
	chrome.app.window.create('index.html',{
		bounds:{
			width: 800,
			height:500
		}
	});
});