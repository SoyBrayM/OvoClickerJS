class Skill {
  constructor() {
    this.level = 0;
    this._duration = 0;
    this._cooldown = 0;
  }

  Activate(player) {
    if (this._cooldown > 0) {
      alert("Skill is on cooldown!");
      return;
    }
    
    setTimeout(() => {},  )
  }

  Deactivate() {
    this._duration = 0;
  }

  get Duration() {
    return this._duration;
  }

  set Duration(value) {
    this._duration = value;
  }

  get Cooldown() {
    return this._cooldown;
  }

  set Cooldown(value) {
    this._cooldown = value;
  }
}

export default Skill;
