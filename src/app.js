import playInfo from "./js/modules/playinfo.js";
import trackBar from "./js/modules/trackbar.js";
import playList from "./js/modules/playlist.js";

window.addEventListener("load", () => {
  playInfo.init();
  trackBar.init();
  playList.init();
});
