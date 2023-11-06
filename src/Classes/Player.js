class Player {
  constructor() {
    this._tapPower = 1;
    this._ovoPoints = 0;
  }

  get TapPower() {
    return this._tapPower;
  }

  set TapPower(value) {
    this._tapPower = value;
  }

  get OvoPoints() {
    return this._ovoPoints;
  }

  set OvoPoints(value) {
    this._ovoPoints = value;
  }
}

export default Player;
