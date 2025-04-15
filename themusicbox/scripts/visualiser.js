// PLAY/PAUSE FUNCTION
document.getElementById("button-play").addEventListener("click", () => {
  const audioPlayer = document.getElementById("audio-player");

  // GET THE PLAY BUTTON
  const playButtonImage = document.querySelector("#button-play img");

  // Toggle play and pause
  if (audioPlayer.paused) {
    audioPlayer.play(); // Start playing the music
    playButtonImage.src = "resources/icons/pause.png"; // Change to pause icon
  } else {
    audioPlayer.pause(); // Pause the music
    playButtonImage.src = "resources/icons/play.png"; // Change back to play icon
  }
});

// INITIALISE WHEN DOM CONTENT LOADED
document.addEventListener("DOMContentLoaded", () => {
  const musicButton = document.getElementById("button-play");
  const audioElement = new Audio("resources/music/DPR IAN - SKINS.mp3");
  const canvas = document.getElementById("visualiser");
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
  const ctx = canvas.getContext("2d");

  // Set up the audio context and analyser node
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const analyser = audioContext.createAnalyser();
  analyser.fftSize = 1024; // Number of frequency bins
  const bufferLength = analyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);

  // Connect the audio element to the analyser node
  const source = audioContext.createMediaElementSource(audioElement);
  source.connect(analyser);
  analyser.connect(audioContext.destination);

  // PLAY MUSIC WHEN BUTTON PRESSED (only if not already playing)
  musicButton.addEventListener("click", () => {
    if (audioContext.state === "suspended") {
      audioContext.resume(); // Resume the audio context if it's suspended (e.g., for autoplay policies)
    }
    if (audioElement.paused) {
      audioElement.play(); // Play the audio
    } else {
      audioElement.pause(); // Pause the audio
    }
  });

  // VISUALISER FUNCTION
  function drawVisualizer() {
    // Request the next frame
    requestAnimationFrame(drawVisualizer);

    // Get the frequency data
    analyser.getByteFrequencyData(dataArray);

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Set up the visualizer bars
    const barWidth = (canvas.width / bufferLength) * 2.5; // Width of each bar
    let x = 0;

    // Draw the frequency data as bars (upper and lower)
    for (let i = 0; i < bufferLength; i++) {
      const barHeight = dataArray[i];
      const r = barHeight + 25 * (i / bufferLength); // Red color gradient based on bar height
      const g = 250 * (i / bufferLength); // Green color gradient based on index
      const b = 50;

      ctx.fillStyle = `rgb(${r}, ${g}, ${b})`; // Set the bar color

      // Draw upper bars
      ctx.fillRect(x, canvas.height / 2 - barHeight, barWidth, barHeight);

      // Draw mirrored (lower) bars
      ctx.fillRect(x, canvas.height / 2, barWidth, barHeight);

      x += barWidth + 1; // Space out the bars
    }
  }

  // Start the visualizer once music starts playing
  audioElement.onplay = () => {
    drawVisualizer();
  };
});
