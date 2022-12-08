function updatePlanetStatus() {
    let planet = document.getElementById("greenplanet");
    planet.innerHTML = "<b>Red Alert</b>: hit by phaser fire!";
    updatePlanetStatus();
  }