var options = {
	type: "basic",
	title:"Pop-up Notification",
	message:"Show the sms",
	iconUrl: "icon.png",
	//imageUrl: "icon.png"
	//items : [{ title: "Item1", message: "This is item 1."},
    //      { title: "Item2", message: "This is item 2."},
    //      { title: "Item3", message: "This is item 3."}]
    //progress : 43
};

chrome.notifications.create(options);
function callback(){
	console.log('Pop-up done!');
}
chrome.notifications.onClicked.addListener(redirectWindow);
function redirectWindow(){
	alert("Ha Ha Ha////");
}