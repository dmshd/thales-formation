// Mediarecorder
// Documentation Mozilla : https://hacks.mozilla.org/2016/04/record-almost-everything-in-the-browser-with-mediarecorder/
// This example uses MediaRecorder to record from an audio and video stream, and uses the
// resulting blob as a source for a video element.
// The relevant functions in use are:
// navigator.mediaDevices.getUserMedia -> to get the video & audio stream from user
// MediaRecorder (constructor) -> create MediaRecorder instance for a stream
// MediaRecorder.ondataavailable -> event to listen to when the recording is ready
// MediaRecorder.start -> start recording
// MediaRecorder.stop -> stop recording (this will generate a blob of data)
// URL.createObjectURL -> to create a URL from a blob, which we use as video src

//Déclaration de variables
var recordButton, stopButton, recorder, liveStream;

// Paramètres vidéos
let videoParameters = { audio: false, video: { width: 1280, height: 720 } };

//Selection de l'élement vidéo
let video = $("#demovideofrm");
let videoElement = video.get(0);

//Booléen pour savoir si l'utilisateur à enregistré une video
let recordedVideo = false;

// Fonctions MediaRecorder
function startRecording() {
  recorder = new MediaRecorder(liveStream);
  recorder.addEventListener('dataavailable', onRecordingReady);

  $("#startbtn").disabled = true;
  $("#stopbtn").disabled = false;
  recordedVideo = true;

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


// Quand on clique sur le bouton "Enregistrer"
$( "#recbtn" ).click(function() {
  $("#recbtn").hide(); // Masque le boutton "Enregistrer"
  $("#revenirbtn").show(); // Fais apparaitre le boutton "revenirbtn à la video"
  $("#startbtn").show(); // Fais apparaitre le boutton "Start"
  $("#stopbtn").show();  // Fais apparaitre le boutton "Stop"
  $("#demovideofrm").hide(); // Masque la video de cours
  $("#recvideofrm").hide(); // Masque la video enregistree
  $("#central-doc-pdfobject").hide();
  $("#central-doc-pdfobject2").hide();
  $("#central-qf101-pdfobject").hide();
  $("#livevideofrm").show(); // Fais appartaitre le live preview (avant l'enregistrement);

  // On va chercher les flux audio et video de la webcam via navigator.mediaDevices.getUserMedia();
  navigator.mediaDevices.getUserMedia(videoParameters)
  .then(function (stream) {
    liveStream = stream;
    var liveVideo = document.getElementById('livevideofrm');
    liveVideo.src = URL.createObjectURL(stream);
    liveVideo.play();
  }).catch(function(err) { console.log(err.name + ": " + err.message); }); // On vérifie si il y a  des erreurs
});

