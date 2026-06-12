// user accessibility: right clicking
document.addEventListener("contextmenu", function(event) {
    event.preventDefault();
});

//user accessibility: drag and dropping
document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll("img");
    images.forEach(img => img.setAttribute("draggable", "false"));
});

//user accessibility: user-select
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll("*").forEach(function(element) {
        element.style.userSelect = "none";
        element.style.webkitUserSelect = "none";
        element.style.mozUserSelect = "none";
        element.style.msUserSelect = "none";
    });
});

//user accessibility: screen sniping
document.addEventListener('keydown', function(event) {
    if (event.key === 'S' && event.shiftKey && (event.ctrlKey || event.metaKey)) {
        document.querySelectorAll("*").forEach(function(element) { 
            element.style.display = "none";
        });
    }
});

//user accessibility: zooming
// user accessibility: zooming: double-tap
    document.addEventListener('touchstart', function (event) {
        if (event.touches.length > 1) {
            event.preventDefault(); // Prevents multi-touch gestures
        }
    }, { passive: false });

// user accessibility: zooming: keyboard or other methods
    document.addEventListener('gesturestart', function (event) {
        event.preventDefault();
    });

    document.addEventListener('gesturechange', function (event) {
        event.preventDefault();
    });

    document.addEventListener('gestureend', function (event) {
        event.preventDefault();
    });

// user accessibility: src attribute update
document.addEventListener("DOMContentLoaded", function() {
    const baseURL = "https://prisma-lumina.github.io/resource-node-server/null_data_log%2Cjs/null_data_l0g%2Cjs/";
  
    // img and audio
    const mediaElements = document.querySelectorAll(".media");
    mediaElements.forEach(element => {
      if (element.tagName === "IMG" || element.tagName === "AUDIO") {
        if (element.getAttribute("src") && !element.src.startsWith(baseURL)) {
          element.src = baseURL + element.getAttribute("src");
        }
      }
    });
  
    // video
    const videoElements = document.querySelectorAll("video.media");
    videoElements.forEach(video => {
      const sources = video.querySelectorAll("source");
      sources.forEach(source => {
        if (source.getAttribute("src") && !source.src.startsWith(baseURL)) {
          source.src = baseURL + source.getAttribute("src");
        }
      });
      
      video.load();
    });
  });

// user accessibility: src update: content-photo
document.addEventListener("DOMContentLoaded", function() {
  const baseURL = "https://prisma-chromelle.github.io/resource-node-server/null_data_log%2Cjs/null_data_log%2Cjs/";

  const mediaElements = document.querySelectorAll(".content-photo");
  mediaElements.forEach(element => {
    if (element.tagName === "IMG") {
      if (element.getAttribute("src") && !element.src.startsWith(baseURL)) {
        element.src = baseURL + element.getAttribute("src");
      }
    }
  });
});

// user accessibility: src update: img decoy
document.addEventListener("DOMContentLoaded", function() {
    const baseURL = "https://prisma-chromelle.github.io/resource-node-server/";

    const mediaElements = document.querySelectorAll(".redundant_data");
    mediaElements.forEach(element => {
      if (element.tagName === "IMG") {
        if (element.getAttribute("src") && !element.src.startsWith(baseURL)) {
          element.src = baseURL + element.getAttribute("src");
        }
      }
    });
});

  
//music player
const musicTxt = document.getElementById("music-txt");
const audio = document.getElementById("audio");
let isPlaying = false;

musicTxt.addEventListener("click", () => {
    if (!isPlaying) {
        musicTxt.innerHTML = "<b>◼ Art Deco - Lana Del Rey</b>";
        audio.play();
    } else {
        musicTxt.innerHTML = "<b>▶ Art Deco - Lana Del Rey</b>";
        audio.pause();
        audio.currentTime = 0;
    }
    isPlaying = !isPlaying;
});
