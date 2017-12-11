document.getElementById('startRecording').addEventListener('click',recordClick,false);

function recordClick(){
	chrome.desktopCapture.chooseDesktopMedia(["screen","window"], accessToRecord);
}
function accessToRecord(id){
	var screenID = id;
	navigator.webkitGetUserMedia({
		audio : false,
		video : {
			mandatory: {
				chromeMediaSource: "desktop",
				chromeMediaSourceId: id
			}
		}
	}, startStream, failedStream);
}
function startStream(stream){
	console.log('Receiving Data From User...');
	var video = document.getElementById('screenMain');
	video.src = URL.createObjectURL(stream);
	stream.onended = function(){
		console.log('Video Recording Session Stoped!');
	};
}
function failedStream(){
	console.log('Error !!');
}