// user to be logged in to site manually for this plugin to work.
// ajax requst to /i/notifications.
// grab the data.
// filter out the data.
// display rich notifications.

var messages = [];
var ids = [];
var latestID;

$(function(){
	engine();
	setInterval(engine, 2000);
});

function engine(){
	var newTweets = [];
	$.get('https://twitter.com/i/notifications',function(data){
		var htmlData = data;
		$data = $(htmlData).find('#stream-items-id').eq(0);
		$data.find('.activity-trucated-tweet').remove();
		$data.find('.activity-supplement').remove();

		for(i=0;i < $data.find('li.stream-item').length;i++){
			ids[i] = $data.find('li.stream-item').eq(i).attr('data-item-id');
			messages[i] = ($($data).find('li.stream-item').eq(i).find('div.ActivityItem-mainBody').text()).replace(/\n/g,'').trim();
		}
		//console.log(ids);
		//console.log(messages);
		if(latestID == undefined){
			var firstRun = {
				type: "basic",
				title:"Twitter Notification",
				message: messages[0],
				contextMessage: "Twitter Notifier",
				buttons : [{
					title : "Open Link"
				}],
				iconUrl: "icon.png",
			};
			chrome.notifications.onButtonClicked.addListener(function(){
					window.open('https://twitter.com/i/notifications');
			});
			chrome.notifications.create(firstRun);

			latestID = ids[0];
		}else if(latestID != ids[0]){
			for(j=0; j < ids.length;j++){
				if(latestID == ids[j]){
					break;
				}else{
					if(messages[j] != ""){
						newTweets[j] = messages[j];
					}
				}
			}
			latestID = ids[0];
		}

		if(newTweets.length != 0){
			for(i=0;i<newTweets.length;i++){
				var myTweet = {
					type: "basic",
					title:"New Twitter Notification",
					message: newTweets[i],
					contextMessage: "Twitter Notifier",
					buttons : [{
						title : "Open Link"
					}],
					iconUrl: "icon.png",
				};
				chrome.notifications.onButtonClicked.addListener(function(){
					window.open('https://twitter.com/i/notifications');
				});
				chrome.notifications.create(myTweet);
			}
		}
		console.log(latestID);
		console.log(newTweets);
		console.log(messages);
	});
}