class Skill {
  constructor() {
    this.level = 1;
    this._duration;
    this._cooldown;
    this._multiplier;
  }

  Activate(player) {
    console.log("Skill activated!");
    if (this.level == 0) {
      alert("Skill is level 0, upgrade it first to use it!");
      return;
    } else if (this._cooldown > 0) {
      alert("Skill is on cooldown!");
      return;
    } else if (this._duration > 0) {
      alert("Skill is already active!");
      return;
    } else {
      this._multiplier =
        Math.floor(Math.log(Math.floor((this.level + 4) / (Math.PI / 2)))) + 1;
      this._duration =
        (this._multiplier * this.level) /
          (this._multiplier * this._multiplier) +
        5;
      document.getElementById("TapPowerDisplay").style.color = "#D81159";
      player.TapPower *= this._multiplier;
      let durationInterval = setInterval(() => {
        this._duration -= 0.01;
        document.getElementById("SkillButton").innerText = "Cooldown: " + this._cooldown.toFixed(2);
        if (this._duration <= 0) {
          clearInterval(durationInterval);
        }
      }, 10);
    }
  }

  Deactivate(player) {
    player.TapPower /= this._multiplier;
    document.getElementById("TapPowerDisplay").style.color = "black";
    this._cooldown = this._duration + 10;
    this._duration = 0;

    let cooldownInterval = setInterval(() => {
      this._cooldown -= 0.01;
      document.getElementById("SkillButton").innerText = "Cooldown: " + this._cooldown.toFixed(2);
      if (this._cooldown <= 0) {
        clearInterval(cooldownInterval);
      }
    }, 10);
  }
}

export default Skill;
