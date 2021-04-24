import { init } from "./js/modules/playinfo.js";
import { trackBarInit } from "./js/modules/trackbar.js";
import { playListInit } from "./js/modules/playlist.js";

window.addEventListener("load", () => {
  init();
  trackBarInit();
  playListInit();
});
