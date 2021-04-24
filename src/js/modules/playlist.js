import { songList } from "./song.js";
import { state, setState } from "./playinfo.js";

// caches the DOM
const musicListEl = document.querySelector("#js-music-list"),
  menuBtn = document.querySelector("#js-menu-btn"),
  audioEl = document.querySelector("#js-audio"),
  sideBar = document.querySelector("#js-sidebar"),
  loadingEl = document.querySelector("#js-music-loading"),
  errorEl = document.querySelector("#js-music-error");
// renders to the DOM
export const render = () => {
  let markup = "";
  songList.forEach((song, index) => {
    markup += `
    <li class = "music-list-item ${index === state.currentlyPlayingIndex
      ? " is-active"
      : ""}" id="${index}">
      <img src= "${songList[index]
        .cover}.jpg" alt="" class="music-list-image" id="${index}" />
      <h6 class="music-list-title" id="${index}">${songList[index].title}</h6>
    </li>`;
  });
  musicListEl.innerHTML = markup;
};
//handles the playlist items click event
const handleClick = e => {
  if (
    (e.target && e.target.matches(".music-list-item")) ||
    e.target.matches(".music-list-image") ||
    e.target.matches(".music-list-title")
  ) {
    //removes active classname from current active list
    document
      .getElementById(`${state.currentlyPlayingIndex}`)
      .classList.remove("is-active");
    audioEl.currentTime = 0;
    setState({
      isPlaying: true,
      currentlyPlayingIndex: Number(e.target.id)
    });
    //adds active classname to new current active list
    document
      .getElementById(`${state.currentlyPlayingIndex}`)
      .classList.add("is-active");
    //displays loading and error elements
    loadingEl.style.display = "block";
    errorEl.textContent = "";
    audioEl
      .play()
      .then(() => {
        loadingEl.style.display = "none";
        errorEl.textContent = "";
      })
      .catch(() => {
        errorEl.textContent = "Something went wrong";
      });
  }
};

// sets up event listeners
export const listeners = () => {
  menuBtn.addEventListener("click", e => {
    sideBar.classList.toggle("is-open");
    menuBtn.classList.toggle("is-open");
  });
  musicListEl.addEventListener("click", handleClick);
};

export const playListInit = () => {
  render();
  listeners();
};
