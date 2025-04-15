// PLAY/PAUSE FUNCTION
document.getElementById("button-play").addEventListener("click", () => {
  const audioPlayer = document.getElementById("audio-player");

  // GET THE PLAY BUTTON
  const playButtonImage = document.querySelector("#button-play img");

  // TOGGLE PLAY AND PAUSE
  if (audioPlayer.paused) {
    audioPlayer.play(); // START PLAYING MUSIC
    playButtonImage.src = "resources/icons/pause.png"; // CHANGE TO PAUSE ICON
  } else {
    audioPlayer.pause(); // PAUSE MUSIC
    playButtonImage.src = "resources/icons/play.png"; // CHANGE TO PLAY ICON
  }
});

// INITIALISE WHEN DOM CONTENT LOADED
document.addEventListener("DOMContentLoaded", () => {
  const musicButton = document.getElementById("button-play");
  const audioElement = new Audio("resources/music/inputfile.mp3");
  const canvas = document.getElementById("visualiser");
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
  const ctx = canvas.getContext("2d");

  // SET UP AUDIO CONTEXT AND ANALYSER NODE
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const analyser = audioContext.createAnalyser();
  analyser.fftSize = 1024; // # OF FREQUENCY BINS
  const bufferLength = analyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);

  // CONNECT AUDIO ELEMENT TO ANALYSER NODE
  const source = audioContext.createMediaElementSource(audioElement);
  source.connect(analyser);
  analyser.connect(audioContext.destination);

  // PLAY MUSIC WHEN BUTTON PRESSED (ONLY IF NOT ALREADY PLAYING)
  musicButton.addEventListener("click", () => {
    if (audioContext.state === "suspended") {
      audioContext.resume(); // RESUME AUDIO CONTEXT IF CURRENTLY SUSPENDED
    }
    if (audioElement.paused) {
      audioElement.play(); // PLAY AUDIO
    } else {
      audioElement.pause(); // PAUSE AUDIO
    }
  });

  // VISUALISER FUNCTION
  function drawVisualizer() {
    // REQUEST NEXT FRAME
    requestAnimationFrame(drawVisualizer);

    // GET FREQUENCY DATA
    analyser.getByteFrequencyData(dataArray);

    // CLEAR CANVAS
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // SET VISUALISER BARS
    const barWidth = (canvas.width / bufferLength) * 2.5; // WIDTH OF INDIVIDUAL BAR
    let x = 0;

    // DRAW FREQUENCY DATA AS BARS (UPPER/LOWER)
    for (let i = 0; i < bufferLength; i++) {
      const barHeight = dataArray[i];
      const r = barHeight + 25 * (i / bufferLength); // RED GRADIENT BASED ON BAR HEIGHT
      const g = 250 * (i / bufferLength); // GREEN GRADIENT BASED ON BAR HEIGHT
      const b = 50;

      ctx.fillStyle = `rgb(${r}, ${g}, ${b})`; // SET BAR COLOUR

      // DRAW UPPER SET OF BARS
      ctx.fillRect(x, canvas.height / 2 - barHeight, barWidth, barHeight);

      // DRAW LOWER AND MIRRORED SET OF BARS
      ctx.fillRect(x, canvas.height / 2, barWidth, barHeight);

      // SPACE OUT THE BARS
      x += barWidth + 1;
    }
  }

  // START VISUALISER WHEN MUSIC STARTS PLAYING
  audioElement.onplay = () => {
    drawVisualizer();
  };
});
