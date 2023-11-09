class Skill {
  constructor() {
    this.level = 0;
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
      document.getElementById("SkillButton").style.backgroundColor = "#FF8C42";
      player.TapPower *= this._multiplier;
      
      let durationInterval = setInterval(() => {
        console.log('lol');
        document.getElementById("SkillButton").innerText =
        "Duration: " + this._duration.toFixed(2);
        this._duration -= 0.01;
        if (this._duration <= 0) {
          clearInterval(durationInterval);
          this.Deactivate(player);
        }
      }, 10);
    }
  }
  
  Deactivate(player) {
    player.TapPower /= this._multiplier;
    document.getElementById("TapPowerDisplay").style.color = "black";
    this._cooldown = this._duration + 10;
    this._duration = 0;
    document.getElementById("SkillButton").style.backgroundColor = "#5E0827";
    
    let cooldownInterval = setInterval(() => {
      this._cooldown -= 0.01;
      document.getElementById("SkillButton").innerText =
        "Cooldown: " + this._cooldown.toFixed(2);
        if (this._cooldown <= 0) {
          clearInterval(cooldownInterval);
          document.getElementById("SkillButton").innerText =
            "Skill Ready to Use!";
      }
    }, 10);
  }
}

export default Skill;
