import { songList } from "./song.js";
import playList from "./playlist.js";

// Playinfo module //IIFE
const playInfo = (() => {
  //cache the DOM
  const musicCoverEl = document.querySelector("#js-music-cover"),
    musicTitleEl = document.querySelector("#js-music-title"),
    musicArtistEl = document.querySelector("#js-music-artist"),
    audioEl = document.querySelector("#js-audio"),
    buttonShuffleEl = document.querySelector("#js-button-shuffle"),
    buttonPrevEl = document.querySelector("#js-button-prev"),
    buttonPlayEl = document.querySelector("#js-button-play"),
    buttonNextEl = document.querySelector("#js-button-next"),
    buttonRepeatEl = document.querySelector("#js-button-repeat"),
    trackBarEl = document.querySelector("#js-track-bar"),
    loadingEl = document.querySelector("#js-music-loading"),
    errorEl = document.querySelector("#js-music-error");

  // state
  const state = {
    isPlaying: false,
    currentlyPlayingIndex: 0,
    isShuffled: false,
    isRepeated: false
  };

  //loads song details to the DOM
  const loadSongDetails = state => {
    loadingEl.style.display = "none";
    trackBarEl.style.width = "0%";
    trackBarEl.style.backgroundColor = `${songList[state.currentlyPlayingIndex]
      .color}`;
    musicCoverEl.src = `${songList[state.currentlyPlayingIndex].cover}.jpg`;
    audioEl.src = `${songList[state.currentlyPlayingIndex].url}.mp3`;
    musicTitleEl.innerText = songList[state.currentlyPlayingIndex].title;
    musicArtistEl.innerText = songList[state.currentlyPlayingIndex].artist;
  };
  // loads music control button
  const loadButton = (state, element) => {
    if (state) {
      element.classList.add("is-active");
    } else {
      element.classList.remove("is-active");
    }
  };
  // switches button and music cover image to play or pause mode based on playing state
  const togglePlayPause = () => {
    if (state.isPlaying) {
      buttonPlayEl.firstElementChild.className = "fa fa-pause";
      musicCoverEl.classList.add("is-active");
    } else {
      buttonPlayEl.firstElementChild.className = "fa fa-play";
      musicCoverEl.classList.remove("is-active");
    }
  };
  // sets state
  const setState = obj => {
    state.isPlaying = obj.isPlaying;
    state.currentlyPlayingIndex = obj.currentlyPlayingIndex;
    render();
  };

  // changes song either forwards or backwards
  const songMove = index => {
    //removes active classname from current active list
    document
      .getElementById(`${state.currentlyPlayingIndex}`)
      .classList.remove("is-active");
    // const currentlyPlayingIndex = currentlyPlayingIndex;
    if (state.isShuffled) {
      setState({ isPlaying: true, currentlyPlayingIndex: getRandomIndex() });
    } else {
      setState({
        isPlaying: true,
        currentlyPlayingIndex: index
      });
    }
    //adds active classname to new current active list
    document
      .getElementById(`${playInfo.state.currentlyPlayingIndex}`)
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
        errorEl.textContent = "Something went wrong, try again";
      });
  };
  // plays or pauses song
  const handlePlay = () => {
    state.isPlaying = !state.isPlaying;
    //displays loading and error elements
    if (state.isPlaying) {
      loadingEl.style.display = "block";
      errorEl.textContent = "";
    }
    togglePlayPause();
    return audioEl.paused
      ? audioEl
          .play()
          .then(() => {
            loadingEl.style.display = "none";
            errorEl.textContent = "";
          })
          .catch(() => {
            errorEl.textContent = "Something went wrong, try again";
          })
      : audioEl.pause();
  };
  // moves song forwards
  const handleNext = () => {
    const currentlyPlayingIndex =
      state.currentlyPlayingIndex === songList.length - 1
        ? 0
        : state.currentlyPlayingIndex + 1;
    songMove(currentlyPlayingIndex);
  };
  // moves song backwards
  const handlePrev = () => {
    const currentlyPlayingIndex =
      state.currentlyPlayingIndex === 0
        ? songList.length - 1
        : state.currentlyPlayingIndex - 1;
    songMove(currentlyPlayingIndex);
  };
  //shuffles song
  const handleShuffle = () => {
    state.isShuffled = !state.isShuffled;
    loadButton(state.isShuffled, buttonShuffleEl);
  };
  //repeats song
  const handleRepeat = () => {
    state.isRepeated = !state.isRepeated;
    loadButton(state.isRepeated, buttonRepeatEl);
  };

  //renders playinfo module to the DOM
  const render = () => {
    loadSongDetails(state);
    togglePlayPause();
    loadButton(state.isShuffled, buttonShuffleEl);
  };

  //sets up even listseners for the play info module
  const listeners = () => {
    buttonPlayEl.addEventListener("click", handlePlay);
    buttonNextEl.addEventListener("click", handleNext);
    buttonPrevEl.addEventListener("click", handlePrev);
    buttonShuffleEl.addEventListener("click", handleShuffle);
    buttonRepeatEl.addEventListener("click", handleRepeat);
  };

  //initialize module
  const init = () => {
    render();
    listeners();
  };

  //Utilities
  const getRandomIndex = () => {
    return Math.floor(Math.random() * songList.length);
  };
  return {
    init,
    handleNext,
    setState,
    state
  };
})();

export default playInfo;
