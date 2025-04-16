# The Music Box

### MP3 Sound Visualiser

---

## Overview

This project is a web-based MP3 file sound visualizer that generates a dynamic visual representation of the music being played based on sound frequencies. The visualizer uses the HTML5 `<audio>` element to play an MP3 file, and it generates a real-time visualization using Web Audio API and the `<canvas>` element.

---

## Features

### **Play/Pause Functionality:**

- Toggle between playing and pausing the music using a button.

### **Dynamic Visualisation:**

- The visualizer reacts to the frequency data from the audio, displaying an array of bars representing frequency ranges.

### **Color Gradient:**

- Each bar has a color gradient based on its height and position within its frequency range.

### **Responsive Canvas:**

- The canvas dynamically resizes based on the screen width and height.

---

## Technologies Used

- **HTML5**: For the basic structure of the webpage, including the `<audio>` and `<canvas>` elements.
- **JavaScript**: To handle the logic for audio playback, visualization rendering, and interactivity.
- **Web Audio API**: To process and analyze the audio file in real-time for frequency data.
- **Canvas API**: To render the visual representation of the audio data.

---

## Code Breakdown

### **HTML Structure:**

- `#button-play`: A button that toggles between play and pause states. It includes an image that changes based on the music playback state.
- `#audio-player`: The audio player that plays the MP3 file.
- `#visualiser`: A canvas element that displays the sound visualization.

### **JavaScript Functionality:**

- **Play/Pause Toggle**: The play button toggles between playing and pausing the audio file. The button's image also switches between play and pause icons accordingly.
- **Audio Context and Analyzer**: The Web Audio API is used to analyze the frequency data of the MP3 file, and this data is used to generate the visual representation of the sound.
- **Visualizer**: Bars are drawn on the canvas based on the frequency data, with each bar representing a specific frequency range in the audio.

---

## Visualizer Details

The visualizer works by:

- Using the `AnalyserNode` from the Web Audio API to analyze the frequency data of the audio.
- Each frequency bin's value is used to generate a vertical bar on the canvas, with the bar height proportional to the frequency value.
- The bars are mirrored along the center of the canvas, creating a "double" visual effect.
- The colors of the bars are dynamically generated based on the frequency and position in the array.

---
