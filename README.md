# The Music Box

### MP3 Sound Visualiser

---

## Overview

This project is a web-based MP3 file sound visualiser that generates a dynamic visual representation of the music being played based on sound frequencies. The visualiser uses the HTML5 `<audio>` element to play an MP3 file, and it generates a real-time visualization using Web Audio API and the `<canvas>` element.

---

## Features

### **Play/Pause Functionality:**

- Toggle between playing and pausing the music using a button.

### **Dynamic Visualisation:**

- The visualiser reacts to the frequency data from the audio, displaying an array of bars representing frequency ranges.

### **Colour Gradient:**

- Each bar has a colour gradient based on its height and position within its frequency range.

### **Responsive Canvas:**

- The canvas dynamically resizes based on the screen width and height.

---

## Technologies Used

- **HTML5**: For the basic structure of the webpage, including the `<audio>` and `<canvas>` elements.
- **JavaScript**: To handle the logic for audio playback, visualisation rendering, and user interaction.
- **Web Audio API**: Processes and analyses the audio file in real time for frequency data.
- **Canvas API**: Renders the visual representation of the audio data.

---

## Visualiser Details

The visualiser works by:

- Using the `AnalyserNode` from the Web Audio API to analyse the frequency data of the audio.
- Each frequency bin's value is used to generate a vertical bar on the canvas, with the bar height proportional to the frequency value.
- The bars are mirrored along the center of the canvas, creating a "mirrored" visual effect.
- The colours of the bars are dynamically generated based on the frequency and position in the array.

---
