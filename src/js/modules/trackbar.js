// IIFE for trackbar module
const trackBar = (() => {
  // cache the DOM
  const trackContainerEl = document.querySelector("#js-track-container"),
    trackBarEl = document.querySelector("#js-track-bar");
  //state
  const state = {
    currentTime: 0,
    totalTime: 0,
    fillWidth: 0
  };
  // renders to the DOM
  const render = () => {
    trackBarEl.style.width = `${trackbarState.fillWidth}%`;
  };
  // sets state and renders to the DOM
  const setState = obj => {
    const { duration, currentTime } = obj;
    trackbarState.currentTime = currentTime;
    trackbarState.totalTime = duration;
    trackbarState.fillWidth =
      trackbarState.currentTime / trackbarState.totalTime * 100;
    render();
  };
  // initialize module
  const init = () => {
    render();
  };
})();

export default trackBar;
