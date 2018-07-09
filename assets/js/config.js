// Quand la page se charge
// window.onload = function () {
    //plus besoin de ça pour le moment
// };

// Bouton "start" démarre lenregistrement
$( "#startbtn" ).click(function() {
  $(".blinking").css('visibility', 'visible');
  $("#recvideofrm").hide();
  $("#livevideofrm").show();
  startRecording();
});

// Bouton Stop arrête l'enregistrement click
$( "#stopbtn" ).click(function() {
  stopRecording();
  $(".blinking").css('visibility', 'hidden');
  $("#livevideofrm").hide();
  $("#recvideofrm").show();
});

// Bouton Revoir
$( "#revoirbtn" ).click(function() {
  $("#recbtn").show();
  $("#revenirbtn").hide();
  $("#startbtn").hide();
  $("#stopbtn").hide();
  $("#revoirbtn").hide();
  $("#livevideofrm").hide();
  $("#recvideofrm").show();
  $("#demovideofrm").hide();
  $("#central-doc-pdfobject").hide();
  $("#central-doc-pdfobject2").hide();
  $("#central-qf101-pdfobject").hide();

});
  
// Bouton Revenir à la démonstration
$( "#revenirbtn" ).click(function() {
  $("#recbtn").show();
  $("#revenirbtn").hide(); 
  $("#startbtn").hide();
  $("#stopbtn").hide();
  $("#revoirbtn").hide();
  $("#livevideofrm").hide();
  $("#recvideofrm").hide();
  $("#demovideofrm").show();
  $("#central-doc-pdfobject").hide();
  $("#central-doc-pdfobject2").hide();
  $("#central-qf101-pdfobject").hide();

  if (recordedVideo) {
    $("#revoirbtn").show();
  }
  videoElement.play();
});


// Bouton MOG 
$( "#mogbtn" ).click(function() {
  videoElement.pause();
  $("#recbtn").show();
  $("#revenirbtn").show();  
  $("#startbtn").hide();
  $("#stopbtn").hide();
  $("#revoirbtn").hide();
  $("#livevideofrm").hide();
  $("#recvideofrm").hide();
  $("#demovideofrm").hide();
  $("#central-doc-pdfobject2").hide();
  $("#central-doc-pdfobject").show();
  $("#central-qf101-pdfobject").hide();
});

$( "#mogbtn2" ).click(function() {
  videoElement.pause();
  $("#recbtn").show();
  $("#revenirbtn").show();
  $("#startbtn").hide();
  $("#stopbtn").hide();
  $("#revoirbtn").hide();
  $("#livevideofrm").hide();
  $("#recvideofrm").hide();
  $("#demovideofrm").hide();
  $("#central-doc-pdfobject").hide();
  $("#central-doc-pdfobject2").show();
  $("#central-qf101-pdfobject").hide();
});

$( "#qf101btn" ).click(function() {
  videoElement.pause();
  $("#recbtn").show();
  $("#revenirbtn").hide();
  $("#startbtn").hide(); 
  $("#stopbtn").hide();
  $("#revoirbtn").hide();
  $("#livevideofrm").hide();
  $("#recvideofrm").hide();
  $("#demovideofrm").hide();
  $("#central-doc-pdfobject").hide();
  $("#central-doc-pdfobject2").hide();
  $("#central-qf101-pdfobject").show();
});