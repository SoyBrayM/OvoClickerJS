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
    alert("YOU HAVE HATCHED THE OVO!");
  }
}

export default Ovo;
