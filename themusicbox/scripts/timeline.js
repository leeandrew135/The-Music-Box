function toggleTimeline() {
  const containerBottom = document.querySelector(".container-bottom");
  const timeline = document.querySelector(".timeline");
  const collapseButton = document.querySelector(".button-timeline-collapse");
  const arrow = collapseButton.querySelector("img"); // Get the arrow image

  const timelineHeight = timeline.offsetHeight;

  if (containerBottom.classList.contains("collapsed")) {
    containerBottom.style.transform = ""; // Reset bottom container
    arrow.style.transform = "rotate(0deg)"; // Rotate arrow down (expanded)
  } else {
    containerBottom.style.transform = `translateY(${timelineHeight}px)`; // Move only bottom container
    arrow.style.transform = "rotate(180deg)"; // Reset arrow to original position (collapsed)
  }

  containerBottom.classList.toggle("collapsed"); // Toggle the collapsed state
  timeline.classList.toggle("collapsed"); // Toggle timeline collapse state
  collapseButton.classList.toggle("collapsed"); // Optionally adjust collapse button
}
