"use strict";

// Playing one research demonstration pauses the other without changing time.
const videos = [...document.querySelectorAll("video")];
for (const video of videos) {
  video.addEventListener("play", () => {
    for (const other of videos) if (other !== video) other.pause();
  });
}
