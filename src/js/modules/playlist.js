import songList from "./song.js";
import playInfo from "./playinfo.js";

const playList = (() => {
  // caches the DOM
  const musicListEl = document.querySelector("#js-music-list"),
    menuBtn = document.querySelector("#js-menu-btn"),
    sideBar = document.querySelector("#js-sidebar");
  // renders to the DOM
  const render = () => {
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
      audioEl.duration = 0;
      playInfo.setState({
        isPlaying: true,
        currentlyPlayingIndex: Number(e.target.id)
      });
      audioEl.play();
      render();
    }
  };

  // sets up event listeners
  const listeners = () => {
    menuBtn.addEventListener("click", e => {
      sideBar.classList.toggle("is-open");
      menuBtn.classList.toggle("is-open");
    });
    musicListEl.addEventListener("click", handleClick);
  };

  const init = () => {
    render();
    listeners();
  };

  return {
    init,
    render,
    listeners
  };
})();

export default playList;
