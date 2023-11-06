import Player from "./Classes/Player.js";
import Ovo from "./Classes/Ovo.js";
import Skill from "./Classes/Skill.js";
import Shop from "./Classes/Shop.js";

const TicksToHatchDisplay = document.getElementById("TicksToHatchDisplay");
const TapsToRewardDisplay = document.getElementById("TapsToRewardDisplay");
const OvoPointsDisplay = document.getElementById("OvoPointsDisplay");
const TapPowerDisplay = document.getElementById("TapPowerDisplay");

const OvoButton = document.getElementById("OvoButton");

class Program {

    static main() {
        this.ovo = new Ovo(10000);
        this.player = new Player();
        this.skill = new Skill();
        this.shop = new Shop();

        OvoButton.addEventListener("click", () => {this.ovo.Click(this.player)})
     
        this.Update();
    }

    static Update() {
        // Update the DOM
        TicksToHatchDisplay.innerText = this.ovo.ticksToHatch;
        TapsToRewardDisplay.innerText = this.ovo.tapsToReward;
        OvoPointsDisplay.innerText = this.player.OvoPoints;
        TapPowerDisplay.innerText = this.player.TapPower;
    }
}

Program.main()

window.Program = Program;

export default Program;