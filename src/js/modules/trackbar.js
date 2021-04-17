import playInfo from "./playinfo.js";

// IIFE for trackbar module
const trackBar = (() => {
  // cache the DOM
  const trackContainerEl = document.querySelector("#js-track-container"),
    audioEl = document.querySelector("#js-audio"),
    trackBarEl = document.querySelector("#js-track-bar");
  //state
  const state = {
    currentTime: 0,
    totalTime: 0,
    fillWidth: 0
  };
  // sets music progress
  function setProgress(e) {
    var clickX = e.offsetX;
    var width = this.clientWidth;
    var duration = audioEl.duration;
    audioEl.currentTime = clickX / width * duration;
  }
  //handles the end of a song
  var handleEnd = () => {
    if (state.isRepeated) {
      setState({
        isPlaying: true,
        currentlyPlayingIndex: state.currentlyPlayingIndex
      });
      audioEl.play();
    } else {
      playInfo.handleNext();
    }
  };
  // renders to the DOM
  const render = () => {
    trackBarEl.style.width = `${state.fillWidth}%`;
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
  var listeners = () => {
    audioEl.addEventListener("timeupdate", e => {
      setState(e.srcElement);
    });
    audioEl.addEventListener("ended", handleEnd);
    trackContainerEl.addEventListener("click", setProgress);
  };
  // initialize module
  const init = () => {
    render();
    listeners();
  };

  return {
    init
  };
})();

export default trackBar;
