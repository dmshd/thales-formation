console.log("script loaded");

// var xobj = new XMLHttpRequest();
// xobj.overrideMimeType("application/json");
// xobj.open("GET", "assets/json/sequence_info.json", true);
// xobj.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//         var actual_JSON = JSON.parse(this.responseText);
//     }
// };
// xobj.send(null);
// let JSON_sequence_info = JSON.parse(xobj.responseText);
// console.log(JSON_sequence_info);

// var request = new XMLHttpRequest();
//    request.open("GET", "../../data/file.json", false);
//    request.send(null)
//    var my_JSON_object = JSON.parse(request.responseText);
//    alert (my_JSON_object.result[0]);

// navigator.mediaDevices.getUserMedia(constraints)
// .then(function(mediaStream) {
//   var video = document.querySelector('video');
//   video.srcObject = mediaStream;
//   video.onloadedmetadata = function(e) {
//     video.play();
//   };
// })
// .catch(function(err) { console.log(err.name + ": " + err.message); }); // always check for errors at the end.


//Duree totale de la video
const getVideoDuration = (video) => {
    return video.duration;
} 
let demoVideo = document.getElementById("demovideofrm");
const demoVideoDuration = getVideoDuration(demoVideo);

//Tous les boutons 
let videoControlButtons = document.querySelectorAll(".videoControlButton");

//Définition des "blocs" de video
let bloc1 = {
    dsc: "1. Mesure de l'entraxe",
    start: 0.0,
    end: 9
};

let bloc2 = {
    dsc: "2. Reporter la valeur sur la réglette de formage",
    start: 9,
    end: 25
};

let bloc3 = {
    dsc: "3. Mise en forme du compasant",
    start: 36,
    end: 52
};

let bloc4 = {
    dsc: "4. Vérification de l'axe et test",
    start: 53,
    end: demoVideoDuration
};


// Menu addEventListeners
let startCursor, endCursor;

let vcbLength = videoControlButtons.length;
for (let i=0; i < vcbLength; i++) {
    videoControlButtons[i].addEventListener("click", function (event){

    event.preventDefault();

    if ($("#demovideofrm").is(":hidden")) {
        if ($("#livevideofrm").is(":visible")) {
            $("#livevideofrm").hide();
        }else if ($("#recvideofrm").is(":visible")) {
            $("#recvideofrm").hide();
        }else if ($("#central-doc-pdfobject").is(":visible")) {
            $("#central-doc-pdfobject").hide();
        }
        $("#demovideofrm").show();
    }

    switch (this.id) {
        case "1":
        startCursor = bloc1.start;
        endCursor = bloc1.end;
        break;
        case "2":
        startCursor = bloc2.start;
        endCursor = bloc2.end;
        break;
        case "3":
        startCursor = bloc3.start;
        endCursor = bloc3.end;
        break;
        case "4":
        startCursor = bloc4.start;
        endCursor = bloc4.end;
        break;
    }

    demoVideo.currentTime = startCursor;
    demoVideo.play();
    });
};