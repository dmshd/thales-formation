// Quand la page se charge
window.onload = function () {


  // Cacher les différents <object> </object> (correspondent aux balises <object> servant à intégrer les PDF (mogs, ou QF101))
  $("#central-doc-pdfobject").hide();
  $("#central-doc-pdfobject2").hide();
  $("#central-qf101-pdfobject").hide();

  //Cacher le bouton "Revenir à la démonstration"
  $("#revenirbtn").hide();

  //Cacher le <video> de live preview
  $("#livevideofrm").hide();

  //Cacher le <video> de la vidéo enregistrée
  $("#recvideofrm").hide();

  //Cacher le bouton "Start" (ce bouton appelle la fonction startRecording() qui démarre l'enregistrement de la vidéo)
  $("#startbtn").hide();

  //Cacher le bouton "Stop" (ce bouton appelle la fonction stopRecording() qui arrête l'enregistrement de la vidéo)
  $("#stopbtn").hide();

  //Cacher le bouton "Revoir l'enregistrement"
  $("#revoirbtn").hide();
};

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
  $("#recbtn").show(); // Fais apparaitre le boutton "Enregistrer"
  $("#revenirbtn").hide(); // Masque le boutton "revenirbtn à la video"
  $("#startbtn").hide(); // Masque le boutton "Start"
  $("#stopbtn").hide();  // Masque le boutton "Stop"
  $("#revoirbtn").hide();  // Masque le boutton "Revoir"
  $("#livevideofrm").hide();
  $("#recvideofrm").show();
  $("#demovideofrm").hide();
  $("#central-doc-pdfobject").hide();
  $("#central-doc-pdfobject2").hide();
  $("#central-qf101-pdfobject").hide();

});
  
// Bouton Revenir à la démonstration
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
  $("#recbtn").show(); // Fais apparaitre le boutton "Enregistrer"
  $("#revenirbtn").show(); // Masque le boutton "revenirbtn à la video"
  $("#startbtn").hide(); // Masque le boutton "Start"
  $("#stopbtn").hide();  // Masque le boutton "Stop"
  $("#revoirbtn").hide();  // Masquele boutton "Revoir"
  $("#livevideofrm").hide();
  $("#recvideofrm").hide();
  $("#demovideofrm").hide();
  $("#central-doc-pdfobject2").hide();
  $("#central-doc-pdfobject").show();
  $("#central-qf101-pdfobject").hide();
});

$( "#mogbtn2" ).click(function() {
  videoElement.pause();
  $("#recbtn").show(); // Fais apparaitre le boutton "Enregistrer"
  $("#revenirbtn").show(); // Masque le boutton "revenirbtn à la video"
  $("#startbtn").hide(); // Masque le boutton "Start"
  $("#stopbtn").hide();  // Masque le boutton "Stop"
  $("#revoirbtn").hide();  // Masquele boutton "Revoir"
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
  $("#central-doc-pdfobject").hide();
  $("#central-doc-pdfobject2").hide();
  $("#central-qf101-pdfobject").show();
});