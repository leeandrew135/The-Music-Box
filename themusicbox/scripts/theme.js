document.addEventListener("DOMContentLoaded", () => {
  const timelineButtons = document.querySelectorAll(".button-timeline");

  const backgrounds = [
    "resources/backgrounds/background1.png",
    "resources/backgrounds/background2.png",
    "resources/backgrounds/background3.png",
    "resources/backgrounds/background4.png",
    "resources/backgrounds/background5.png",
  ];

  const playerImages = [
    "resources/players/player1.png",
    "resources/players/player2.png",
    "resources/players/player3.png",
    "resources/players/player4.png",
    "resources/players/player5.png",
  ];

  // Create overlay element
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");
  document.body.appendChild(overlay);

  // Set default background and player image
  document.body.style.backgroundImage = `url(${backgrounds[4]})`;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
  document.body.style.backgroundRepeat = "no-repeat";

  const imagePlayer = document.getElementById("image-player");
  imagePlayer.src = playerImages[4];

  timelineButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      // Add the overlay class to darken the screen
      overlay.classList.add("active");

      // Change the background and player image after overlay is fully visible
      setTimeout(() => {
        document.body.style.backgroundImage = `url(${backgrounds[index]})`;
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundRepeat = "no-repeat";

        const imagePlayer = document.getElementById("image-player");
        imagePlayer.src = playerImages[index];

        // Immediately remove the overlay after the theme change
        overlay.classList.remove("active");
      }, 500); // Wait for overlay fade-in to complete (500ms)
    });
  });
});
