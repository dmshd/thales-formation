console.log("script loaded");

//Duree totale de la video
const getVideoDuration = (video) => {
    return video.duration;
} 
let demoVideo = document.getElementById("demovideo");
const demoVideoDuration = getVideoDuration(demoVideo);

//Tous les boutons 
let videoControlButtons = document.querySelectorAll(".videoControlButton");

//Définition des "blocs" de video
let bloc1 = {
    start: 0.0,
    end: 12.0
};

let bloc2 = {
    start: 12,
    end: 27
};

let bloc3 = {
  start: 27,
  end: demoVideoDuration
};


// Menu addEventListeners
let startCursor, endCursor;

let vcbLength = videoControlButtons.length;
for (let i=0; i < vcbLength; i++) {
    videoControlButtons[i].addEventListener("click", function (event){

    //checking if it works
    event.preventDefault();
    console.log("button " + this.id + " active");
    // let buttonId = this.id;
    console.log(this.id);
    switch (this.id) {
        case "1":
        console.log(this.id);
        startCursor = bloc1.start;
        endCursor = bloc1.end;
        break;
        case "2":
        console.log(this.id);
        startCursor = bloc2.start;
        endCursor = bloc2.end;
        break;
        case "3":
        startCursor = bloc3.start;
        endCursor = bloc3.end;
        break;
    }
    console.log(startCursor);

    demovideo.currentTime = startCursor;
    demovideo.play();
    });

};