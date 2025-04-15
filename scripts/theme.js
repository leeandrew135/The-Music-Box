document.addEventListener("DOMContentLoaded", () => {
  const timelineButtons = document.querySelectorAll(".button-timeline");

  // BACKGROUNDS AND PLAYERS
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

  // CREATE OVERLAY ELEMENT
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");
  document.body.appendChild(overlay);

  // SET DEFAULT BACKGROUND AND PLAYER
  document.body.style.backgroundImage = `url(${backgrounds[4]})`;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
  document.body.style.backgroundRepeat = "no-repeat";

  const imagePlayer = document.getElementById("image-player");
  imagePlayer.src = playerImages[4];

  timelineButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      // ADD OVERLAY ELEMENT TO DARKEN SCREEN
      overlay.classList.add("active");

      // CHANGE BACKGROUND AND PLAYER AFTER OVERLAY IS FULLY VISIBLE
      setTimeout(() => {
        document.body.style.backgroundImage = `url(${backgrounds[index]})`;
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundRepeat = "no-repeat";

        const imagePlayer = document.getElementById("image-player");
        imagePlayer.src = playerImages[index];

        // REMOVE OVERLAY AFTER THEME CHANGE
        overlay.classList.remove("active");
      }, 500); // WAIT FOR FADE TRANSITION (500 ms)
    });
  });
});
