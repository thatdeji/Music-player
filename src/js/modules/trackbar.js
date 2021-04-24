import { handleNext } from "./playinfo.js";

// cache the DOM
const trackContainerEl = document.querySelector("#js-track-container"),
  audioEl = document.querySelector("#js-audio"),
  trackBarEl = document.querySelector("#js-track-bar"),
  currentTimeEl = document.querySelector("#js-current-time"),
  loadingEl = document.querySelector("#js-music-loading"),
  errorEl = document.querySelector("#js-music-error");
//state
const state = {
  currentTime: 0,
  totalTime: 0,
  fillWidth: 0
};
//handles progress on song time update
const handleProgress = e => {
  setState(e.srcElement);
};
// sets music progress
function setProgress(e) {
  const clickX = e.offsetX;
  const width = this.clientWidth;
  const duration = audioEl.duration;
  audioEl.currentTime = clickX / width * duration;
}
//handles the end of a song
const handleEnd = () => {
  handleNext();
};
// renders to the DOM
const render = () => {
  trackBarEl.style.width = `${state.fillWidth}%`;
  const seconds = parseInt(state.currentTime % 60);
  currentTimeEl.textContent = `${parseInt(
    (state.currentTime / 60) % 60
  )}:${seconds < 10 ? "0" + seconds : seconds}`;
};
// sets state and renders to the DOM
const setState = obj => {
  const { duration, currentTime } = obj;
  state.currentTime = currentTime;
  state.totalTime = duration;
  state.fillWidth = state.currentTime / state.totalTime * 100;
  render();
};
//sets up event listeners
const listeners = () => {
  audioEl.addEventListener("timeupdate", e => {
    handleProgress(e);
  });
  audioEl.addEventListener("ended", handleEnd);
  trackContainerEl.addEventListener("click", setProgress);
};
// initialize module
export const trackBarInit = () => {
  render();
  listeners();
};
