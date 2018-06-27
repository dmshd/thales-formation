// This example uses MediaRecorder to record from an audio and video stream, and uses the
// resulting blob as a source for a video element.
//
// The relevant functions in use are:
//
// navigator.mediaDevices.getUserMedia -> to get the video & audio stream from user
// MediaRecorder (constructor) -> create MediaRecorder instance for a stream
// MediaRecorder.ondataavailable -> event to listen to when the recording is ready
// MediaRecorder.start -> start recording
// MediaRecorder.stop -> stop recording (this will generate a blob of data)
// URL.createObjectURL -> to create a URL from a blob, which we use as video src
let video = $("#recvideofrm");
let videoElement = video.get(0);
var recordButton, stopButton, recorder, liveStream;

window.onload = function () {

  let videoParameters = { audio: false, video: { width: 1280, height: 720 } };

  // doc frame
  $("#central-doc-pdfobject").hide();

  //video live preview frame
  //revenirbtn button
  $("#revenirbtn").hide();
  //live video
  $("#livevideofrm").hide();
  //frame video 
  $("#recvideofrm").hide();
  //Start button
  $("#startbtn").hide();
  //Stop button
  $("#stopbtn").hide();
  //Revoir button
  $("#revoirbtn").hide();
  
    // On va chercher les flux audio et video de la webcam via navigator.mediaDevices.getUserMedia();
    navigator.mediaDevices.getUserMedia(videoParameters)
    .then(function (stream) {
      liveStream = stream;
      var liveVideo = document.getElementById('livevideofrm');
      liveVideo.src = URL.createObjectURL(stream);
      liveVideo.play();
    }).catch(function(err) { console.log(err.name + ": " + err.message); }); // On vérifie si il y a  des erreurs

};


function startRecording() {
  recorder = new MediaRecorder(liveStream);

  recorder.addEventListener('dataavailable', onRecordingReady);

  $("#startbtn").disabled = true;
  $("#stopbtn").disabled = false;

  recorder.start();
}

function stopRecording() {
  $("#startbtn").disabled = false;
  $("#stopbtn").disabled = true;

  // Stopping the recorder will eventually trigger the 'dataavailable' event and we can complete the recording process
  recorder.stop();
}

function onRecordingReady(e) {
  var video = document.getElementById('recvideofrm');
  // e.data contains a blob representing the recording
  video.src = URL.createObjectURL(e.data);
}


// onClick Enregistrer 
$( "#recbtn" ).click(function() {
  $("#recbtn").hide(); // Masque le boutton "Enregistrer"
  $("#revenirbtn").show(); // Fais apparaitre le boutton "revenirbtn à la video"

  $("#startbtn").show(); // Fais apparaitre le boutton "Start"
  $("#stopbtn").show();  // Fais apparaitre le boutton "Stop"
  $("#revoirbtn").show();  // Fais apparaitre le boutton "Revoir"
  $("#demovideofrm").hide(); // Masque la video de cours
  $("#recvideofrm").hide(); // Masque la video enregistree
  $("#livevideofrm").show(); // Fais appartaitre le live preview (avant l'enregistrement);
  $("#central-doc-pdfobject").hide();
});

// onClick Start button 
$( "#startbtn" ).click(function() {
  $("#recvideofrm").hide();
  $("#livevideofrm").show();
  startRecording();
});

//onClick Stop button
$( "#stopbtn" ).click(function() {
  stopRecording();
  $("#livevideofrm").hide();
  $("#recvideofrm").show();
});

// onClick Revoir button 
$( "#revoirbtn" ).click(function() {
  video.play();
});
  
// onClick Revenir à la démonstration button 
$( "#revenirbtn" ).click(function() {
  $("#recbtn").show(); // Fais apparaitre le boutton "Enregistrer"
  $("#revenirbtn").hide(); // Masque le boutton "revenirbtn à la video"
  $("#startbtn").hide(); // Masque le boutton "Start"
  $("#stopbtn").hide();  // Masque le boutton "Stop"
  $("#revoirbtn").hide();  // Masquele boutton "Revoir"
  $("#livevideofrm").hide();
  $("#recvideofrm").hide();
  $("#demovideofrm").show();
  $("#central-doc-pdfobject").hide();
});

//
$( "#mogbtn" ).click(function() {
  $("#recbtn").show(); // Fais apparaitre le boutton "Enregistrer"
  $("#revenirbtn").show(); // Masque le boutton "revenirbtn à la video"
  $("#startbtn").hide(); // Masque le boutton "Start"
  $("#stopbtn").hide();  // Masque le boutton "Stop"
  $("#revoirbtn").hide();  // Masquele boutton "Revoir"
  $("#livevideofrm").hide();
  $("#recvideofrm").hide();
  $("#demovideofrm").hide();
  $("#central-doc-pdfobject").show();

  
  // if (!videoElement.paused) {
  //   console.log("paused");
  // }else {
  //   console.log("running");
  // }

});

$( "#qf101btn" ).click(function() {
  $("#recbtn").show(); 
  $("#revenirbtn").show(); 
  $("#startbtn").hide(); 
  $("#stopbtn").hide();  
  $("#revoirbtn").hide(); 
  $("#livevideofrm").hide();
  $("#recvideofrm").hide();
  $("#demovideofrm").hide();
  $("#central-doc-pdfobject").show();
});