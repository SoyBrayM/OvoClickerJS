import Program from "../index.js";

class Ovo {
  constructor(ticksToHatch) {
    this.ticksToHatch = ticksToHatch;
    this.tapsToReward = 10;
  }
  
  Click(player) {
    this.ticksToHatch -= player.TapPower;
    this.tapsToReward--;
    Program.Update();
    if (this.ticksToHatch <= 0) {
      this.Hatch();
    }
    if (this.tapsToReward <= 0) {
      this.tapsToReward = 10;

      alert("You have gained an Ovo Point!");
      player.OvoPoints++;

      Program.Update();
    }
  }

  Hatch() {
    document.body.innerHTML = "<h1>You have hatched the Ovo!\nContratulations</h1>";
  }
}

export default Ovo;
