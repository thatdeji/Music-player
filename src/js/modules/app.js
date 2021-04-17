import playInfo from "./playinfo.js";
import trackBar from "./trackbar.js";
import playList from "./playlist.js";

document.addEventListener("onload", () => {
  playInfo.init();
  trackBar.init();
  playList.init();
});
