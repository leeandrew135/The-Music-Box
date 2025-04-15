function toggleTimeline() {
  const containerBottom = document.querySelector(".container-bottom");
  const timeline = document.querySelector(".timeline");
  const collapseButton = document.querySelector(".button-timeline-collapse");
  const arrow = collapseButton.querySelector("img"); // GET ARROW IMAGE

  const timelineHeight = timeline.offsetHeight;

  if (containerBottom.classList.contains("collapsed")) {
    containerBottom.style.transform = ""; // RESET BOTTOM CONTAINER
    arrow.style.transform = "rotate(0deg)"; // ROTATE ARROW DOWNWARDS (EXPANDED)
  } else {
    containerBottom.style.transform = `translateY(${timelineHeight}px)`; // ONLY MOVE BOTTOM CONTAINER
    arrow.style.transform = "rotate(180deg)"; // RESET ARROW TO ORIGINAL POSITION (COLLAPSED)
  }

  containerBottom.classList.toggle("collapsed"); // TOGGLE COLLAPSED STATE
  timeline.classList.toggle("collapsed"); // TOGGLE TIMELINE COLLAPSED STATE
  collapseButton.classList.toggle("collapsed"); // OPTIONAL ADJUST COLLAPSE BUTTON
}
