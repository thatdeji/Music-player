// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/modules/song.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.songList = void 0;
var songList = [{
  title: "Element",
  artist: "Kendrick Lamar",
  url: "https://res.cloudinary.com/dexg5uy3d/video/upload/v1618702079/Kendrick/ELEMENT_tp4lep",
  cover: "https://res.cloudinary.com/dexg5uy3d/image/upload/v1618701813/Kendrick/cover_c2qcla",
  color: "#191917"
}, {
  title: "Shea Butter Baby",
  artist: "Ari Lennox ft. J.cole",
  url: "https://res.cloudinary.com/dexg5uy3d/video/upload/v1618702349/J.cole/Shea_Butter_Baby_mvex0l",
  cover: "https://res.cloudinary.com/dexg5uy3d/image/upload/v1618702286/J.cole/Cover_a78jwc",
  color: "#bd9660"
}, {
  title: "Wishing Well",
  artist: "Juice Wrld",
  url: "https://res.cloudinary.com/dexg5uy3d/video/upload/v1618702055/Juice%20Wrld/Wishing_Well_qh2mjn",
  cover: "https://res.cloudinary.com/dexg5uy3d/image/upload/v1618701822/Juice%20Wrld/Cover_yxufju",
  color: "#fd6a8e"
}, {
  title: "Topanga",
  artist: "Trippie Redd",
  url: "https://res.cloudinary.com/dexg5uy3d/video/upload/v1618702251/Trippie%20redd/Topanga_fmognq",
  cover: "https://res.cloudinary.com/dexg5uy3d/image/upload/v1618702064/Trippie%20redd/cover_pagarg",
  color: "#f47f68"
}, {
  title: "NO BYSTANDERS",
  artist: "Travis Scott",
  url: "https://res.cloudinary.com/dexg5uy3d/video/upload/v1618702220/Travis%20Scott/NO_BYSTANDERS_se391g",
  cover: "https://res.cloudinary.com/dexg5uy3d/image/upload/v1618701902/Travis%20Scott/cover_ieakc9",
  color: "#f7c64f"
}, {
  title: "Moonlight",
  artist: "XXXtentacion",
  url: "https://res.cloudinary.com/dexg5uy3d/video/upload/v1618702341/XXXtentacion/Moonlight_t9ubbt",
  cover: "https://res.cloudinary.com/dexg5uy3d/image/upload/v1618702088/XXXtentacion/Cover_xa9nvp",
  color: "#787878"
}, {
  title: "Gunna",
  artist: "Gunna ft. Young thug & Wheezy",
  url: "https://res.cloudinary.com/dexg5uy3d/video/upload/v1618702366/Gunna/3_Headed_Snake_uz5erx",
  cover: "https://res.cloudinary.com/dexg5uy3d/image/upload/v1618702280/Gunna/Cover_bbeepx",
  color: "#439eb3"
}, {
  title: " Praise the Lord (Da Shine)",
  artist: "A$AP Rocky ft. Skepta",
  url: "https://res.cloudinary.com/dexg5uy3d/video/upload/v1618702341/A%24AP/Praise_the_Lord_Da_Shine_i55j3v",
  cover: "https://res.cloudinary.com/dexg5uy3d/image/upload/v1618702142/A%24AP/Cover_dbolhv",
  color: "#9e9617"
}, {
  title: "Facts",
  artist: "Kanye West",
  url: "https://res.cloudinary.com/dexg5uy3d/video/upload/v1618701896/Kanye%20West/Facts_Charlie_Heat_Version_cbo1ct",
  cover: "https://res.cloudinary.com/dexg5uy3d/image/upload/v1618702142/A%24AP/Cover_dbolhv",
  color: "#e28a5c"
}, {
  title: "Onyeka",
  artist: "Burna boy",
  url: "https://res.cloudinary.com/dexg5uy3d/video/upload/v1618702365/Burna%20boy/Onyeka_bozc1s",
  cover: "https://res.cloudinary.com/dexg5uy3d/image/upload/v1618702237/Burna%20boy/cover_fbtvbw",
  color: "#e7bc6a"
}, {
  title: "No More Parties",
  artist: "Coi Leray",
  url: "https://res.cloudinary.com/dexg5uy3d/video/upload/v1618702324/Coi%20Leray/No_More_Parties_ilb9po",
  cover: "https://res.cloudinary.com/dexg5uy3d/image/upload/v1618702242/Coi%20Leray/cover_ldx0ww",
  color: "#f64555"
}, {
  title: "10 Freaky Girls",
  artist: "Metro Boomin",
  url: "https://res.cloudinary.com/dexg5uy3d/video/upload/v1618701938/Metro%20Boomin/10_Freaky_Girls_yhbfkb",
  cover: "https://res.cloudinary.com/dexg5uy3d/image/upload/v1618701818/Metro%20Boomin/Cover_fetatg",
  color: "#f1b746"
}, {
  title: "Y.M.C.A.",
  artist: "Village People",
  url: "https://res.cloudinary.com/dexg5uy3d/video/upload/v1618702381/Village%20People/Y.M.C.A._uz9w4e",
  cover: "https://res.cloudinary.com/dexg5uy3d/image/upload/v1618702070/Village%20People/cover_hfmu90",
  color: "#5369ce"
}, {
  title: "Nuketown",
  artist: "Skimask the Slump God",
  url: "https://res.cloudinary.com/dexg5uy3d/video/upload/v1618702089/Skimask/Nuketown_ibufch",
  cover: "https://res.cloudinary.com/dexg5uy3d/image/upload/v1618701854/Skimask/Cover_kwscqp",
  color: "#765443"
}, {
  title: "Circle of bosses",
  artist: "Young thug ft. Quavo",
  url: "https://res.cloudinary.com/dexg5uy3d/video/upload/v1618702276/Young%20Thug/Circle_of_bosses_sppgxv",
  cover: "https://res.cloudinary.com/dexg5uy3d/image/upload/v1618702094/Young%20Thug/Cover_itz2cg",
  color: "#9bb229"
}, {
  title: "No Permission",
  artist: "Nasty C ft. Runtown",
  url: "https://res.cloudinary.com/dexg5uy3d/video/upload/v1618702232/Nasty%20C/No_Permission_aw4cvt",
  cover: "https://res.cloudinary.com/dexg5uy3d/image/upload/v1618701821/Nasty%20C/cover_ppgmu3",
  color: "#e1495d"
}];
exports.songList = songList;
},{}],"js/modules/playlist.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _song = require("./song.js");

var _playinfo = _interopRequireDefault(require("./playinfo.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var playList = function () {
  // caches the DOM
  var musicListEl = document.querySelector("#js-music-list"),
      menuBtn = document.querySelector("#js-menu-btn"),
      audioEl = document.querySelector("#js-audio"),
      sideBar = document.querySelector("#js-sidebar"),
      loadingEl = document.querySelector("#js-music-loading"),
      errorEl = document.querySelector("#js-music-error"); // renders to the DOM

  var render = function render() {
    var markup = "";

    _song.songList.forEach(function (song, index) {
      markup += "\n    <li class = \"music-list-item ".concat(index === _playinfo.default.state.currentlyPlayingIndex ? " is-active" : "", "\" id=\"").concat(index, "\">\n      <img src= \"").concat(_song.songList[index].cover, ".jpg\" alt=\"\" class=\"music-list-image\" id=\"").concat(index, "\" />\n      <h6 class=\"music-list-title\" id=\"").concat(index, "\">").concat(_song.songList[index].title, "</h6>\n    </li>");
    });

    musicListEl.innerHTML = markup;
  }; //handles the playlist items click event


  var handleClick = function handleClick(e) {
    if (e.target && e.target.matches(".music-list-item") || e.target.matches(".music-list-image") || e.target.matches(".music-list-title")) {
      //removes active classname from current active list
      document.getElementById("".concat(_playinfo.default.state.currentlyPlayingIndex)).classList.remove("is-active");
      audioEl.currentTime = 0;

      _playinfo.default.setState({
        isPlaying: true,
        currentlyPlayingIndex: Number(e.target.id)
      }); //adds active classname to new current active list


      document.getElementById("".concat(_playinfo.default.state.currentlyPlayingIndex)).classList.add("is-active"); //displays loading and error elements

      loadingEl.style.display = "block";
      errorEl.textContent = "";
      audioEl.play().then(function () {
        loadingEl.style.display = "none";
        errorEl.textContent = "";
      }).catch(function () {
        errorEl.textContent = "Something went wrong";
      });
    }
  }; // sets up event listeners


  var listeners = function listeners() {
    menuBtn.addEventListener("click", function (e) {
      sideBar.classList.toggle("is-open");
      menuBtn.classList.toggle("is-open");
    });
    musicListEl.addEventListener("click", handleClick);
  };

  var init = function init() {
    render();
    listeners();
  };

  return {
    init: init,
    render: render,
    listeners: listeners
  };
}();

var _default = playList;
exports.default = _default;
},{"./song.js":"js/modules/song.js","./playinfo.js":"js/modules/playinfo.js"}],"js/modules/playinfo.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _song = require("./song.js");

var _playlist = _interopRequireDefault(require("./playlist.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Playinfo module //IIFE
var playInfo = function () {
  //cache the DOM
  var musicCoverEl = document.querySelector("#js-music-cover"),
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
      errorEl = document.querySelector("#js-music-error"); // state

  var state = {
    isPlaying: false,
    currentlyPlayingIndex: 0,
    isShuffled: false,
    isRepeated: false
  }; //loads song details to the DOM

  var loadSongDetails = function loadSongDetails(state) {
    loadingEl.style.display = "none";
    trackBarEl.style.width = "0%";
    trackBarEl.style.backgroundColor = "".concat(_song.songList[state.currentlyPlayingIndex].color);
    musicCoverEl.src = "".concat(_song.songList[state.currentlyPlayingIndex].cover, ".jpg");
    audioEl.src = "".concat(_song.songList[state.currentlyPlayingIndex].url, ".mp3");
    musicTitleEl.innerText = _song.songList[state.currentlyPlayingIndex].title;
    musicArtistEl.innerText = _song.songList[state.currentlyPlayingIndex].artist;
  }; // loads music control button


  var loadButton = function loadButton(state, element) {
    if (state) {
      element.classList.add("is-active");
    } else {
      element.classList.remove("is-active");
    }
  }; // switches button and music cover image to play or pause mode based on playing state


  var togglePlayPause = function togglePlayPause() {
    if (state.isPlaying) {
      buttonPlayEl.firstElementChild.className = "fa fa-pause";
      musicCoverEl.classList.add("is-active");
    } else {
      buttonPlayEl.firstElementChild.className = "fa fa-play";
      musicCoverEl.classList.remove("is-active");
    }
  }; // sets state


  var setState = function setState(obj) {
    state.isPlaying = obj.isPlaying;
    state.currentlyPlayingIndex = obj.currentlyPlayingIndex;
    render();
  }; // changes song either forwards or backwards


  var songMove = function songMove(index) {
    //removes active classname from current active list
    document.getElementById("".concat(state.currentlyPlayingIndex)).classList.remove("is-active"); // const currentlyPlayingIndex = currentlyPlayingIndex;

    if (state.isShuffled) {
      setState({
        isPlaying: true,
        currentlyPlayingIndex: getRandomIndex()
      });
    } else {
      setState({
        isPlaying: true,
        currentlyPlayingIndex: index
      });
    } //adds active classname to new current active list


    document.getElementById("".concat(playInfo.state.currentlyPlayingIndex)).classList.add("is-active"); //displays loading and error elements

    loadingEl.style.display = "block";
    errorEl.textContent = "";
    audioEl.play().then(function () {
      loadingEl.style.display = "none";
      errorEl.textContent = "";
    }).catch(function () {
      errorEl.textContent = "Something went wrong, try again";
    });
  }; // plays or pauses song


  var handlePlay = function handlePlay() {
    state.isPlaying = !state.isPlaying; //displays loading and error elements

    if (state.isPlaying) {
      loadingEl.style.display = "block";
      errorEl.textContent = "";
    }

    togglePlayPause();
    return audioEl.paused ? audioEl.play().then(function () {
      loadingEl.style.display = "none";
      errorEl.textContent = "";
    }).catch(function () {
      errorEl.textContent = "Something went wrong, try again";
    }) : audioEl.pause();
  }; // moves song forwards


  var handleNext = function handleNext() {
    var currentlyPlayingIndex = state.currentlyPlayingIndex === _song.songList.length - 1 ? 0 : state.currentlyPlayingIndex + 1;
    songMove(currentlyPlayingIndex);
  }; // moves song backwards


  var handlePrev = function handlePrev() {
    var currentlyPlayingIndex = state.currentlyPlayingIndex === 0 ? _song.songList.length - 1 : state.currentlyPlayingIndex - 1;
    songMove(currentlyPlayingIndex);
  }; //shuffles song


  var handleShuffle = function handleShuffle() {
    state.isShuffled = !state.isShuffled;
    loadButton(state.isShuffled, buttonShuffleEl);
  }; //repeats song


  var handleRepeat = function handleRepeat() {
    state.isRepeated = !state.isRepeated;
    loadButton(state.isRepeated, buttonRepeatEl);
    audioEl.loop = true ? state.isRepeated : false;
  }; //renders playinfo module to the DOM


  var render = function render() {
    loadSongDetails(state);
    togglePlayPause();
    loadButton(state.isShuffled, buttonShuffleEl);
  }; //sets up even listseners for the play info module


  var listeners = function listeners() {
    buttonPlayEl.addEventListener("click", handlePlay);
    buttonNextEl.addEventListener("click", handleNext);
    buttonPrevEl.addEventListener("click", handlePrev);
    buttonShuffleEl.addEventListener("click", handleShuffle);
    buttonRepeatEl.addEventListener("click", handleRepeat);
  }; //initialize module


  var init = function init() {
    render();
    listeners();
  }; //Utilities


  var getRandomIndex = function getRandomIndex() {
    return Math.floor(Math.random() * _song.songList.length);
  };

  return {
    init: init,
    handleNext: handleNext,
    setState: setState,
    state: state
  };
}();

var _default = playInfo;
exports.default = _default;
},{"./song.js":"js/modules/song.js","./playlist.js":"js/modules/playlist.js"}],"js/modules/trackbar.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _playinfo = _interopRequireDefault(require("./playinfo.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// IIFE for trackbar module
var trackBar = function () {
  // cache the DOM
  var trackContainerEl = document.querySelector("#js-track-container"),
      audioEl = document.querySelector("#js-audio"),
      trackBarEl = document.querySelector("#js-track-bar"),
      currentTimeEl = document.querySelector("#js-current-time"),
      loadingEl = document.querySelector("#js-music-loading"),
      errorEl = document.querySelector("#js-music-error"); //state

  var state = {
    currentTime: 0,
    totalTime: 0,
    fillWidth: 0
  }; //handles progress on song time update

  var handleProgress = function handleProgress(e) {
    setState(e.srcElement);
  }; // sets music progress


  function setProgress(e) {
    var clickX = e.offsetX;
    var width = this.clientWidth;
    var duration = audioEl.duration;
    audioEl.currentTime = clickX / width * duration;
  } //handles the end of a song


  var handleEnd = function handleEnd() {
    _playinfo.default.handleNext();
  }; // renders to the DOM


  var render = function render() {
    trackBarEl.style.width = "".concat(state.fillWidth, "%");
    var seconds = parseInt(state.currentTime % 60);
    currentTimeEl.textContent = "".concat(parseInt(state.currentTime / 60 % 60), ":").concat(seconds < 10 ? "0" + seconds : seconds);
  }; // sets state and renders to the DOM


  var setState = function setState(obj) {
    var duration = obj.duration,
        currentTime = obj.currentTime;
    state.currentTime = currentTime;
    state.totalTime = duration;
    state.fillWidth = state.currentTime / state.totalTime * 100;
    render();
  }; //sets up event listeners


  var listeners = function listeners() {
    audioEl.addEventListener("timeupdate", function (e) {
      handleProgress(e);
    });
    audioEl.addEventListener("ended", handleEnd);
    trackContainerEl.addEventListener("click", setProgress);
  }; // initialize module


  var init = function init() {
    render();
    listeners();
  };

  return {
    init: init
  };
}();

var _default = trackBar;
exports.default = _default;
},{"./playinfo.js":"js/modules/playinfo.js"}],"app.js":[function(require,module,exports) {
"use strict";

var _playinfo = _interopRequireDefault(require("./js/modules/playinfo.js"));

var _trackbar = _interopRequireDefault(require("./js/modules/trackbar.js"));

var _playlist = _interopRequireDefault(require("./js/modules/playlist.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.addEventListener("load", function () {
  _playinfo.default.init();

  _trackbar.default.init();

  _playlist.default.init();
});
},{"./js/modules/playinfo.js":"js/modules/playinfo.js","./js/modules/trackbar.js":"js/modules/trackbar.js","./js/modules/playlist.js":"js/modules/playlist.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49199" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","app.js"], null)
//# sourceMappingURL=/app.c328ef1a.js.map