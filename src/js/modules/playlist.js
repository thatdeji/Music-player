import songList from "./song.js";

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
})();

export default playList;
