class Shop {
  constructor() {
    this.sales = 0;
  }

  UpgradeTapPower (player) {
    if (player.OvoPoints < 1) {
      alert("You don't have enough Ovo Points!");
      return;
    }
    player.OvoPoints--;
    player.TapPower++;
  }
  
  UpgradeSkill (player, skill) {
    if (player.OvoPoints < 1) {
      alert("You don't have enough Ovo Points!");
      return;
    }
    document.getElementById("SkillButton").innerText = "Skill Ready to Use!";
    document.getElementById("SkillButton").style.backgroundColor = "#D81159";
    player.OvoPoints--;
    skill.level++;
  }
}

export default Shop;
