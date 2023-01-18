function randomChoice(list) {
    let len = list.length;
    return list[Math.floor(len * Math.random())];
  }
  function makePhrase() {
    let words1 = [
      "24/7", "multi-Tier", "smoothly-optimized", "1080p", "4k", "front-end",
      "web-based", "free-body", "smart", "HHM", "critical-path", "dynamic", "Breaking Bad", "Better Call Saul"
    ];
    let words2 = [
      "empowered", "value-added", "oriented", "focused", "aligned", "sticky",
      "oriented", "centric", "distributed", "clustered", "branded", "positioned",
      "outside-the-box", "networked", "cooperative", "shared", "targeted",
      "leveraged"
    ];
    let words3 = [
      "process", "solution", "tipping-point", "strategy", "vision", "space",
      "architecture", "core competency", "mindshare", "portal", "vision",
      "paradigm", "mission"
    ];
    document.getElementById("word1").innerHTML = randomChoice(words1);
    document.getElementById("word2").innerHTML = randomChoice(words2);
    document.getElementById("word3").innerHTML = randomChoice(words3);
  }
  function init() {
    makePhrase();
  }
  window.onload = init;