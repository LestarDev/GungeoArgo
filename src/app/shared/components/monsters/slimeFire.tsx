import PageType from "../../config/pageInterface";
import fireSlimeIcon from "./../../../../assets/fire_slime.png"

const fireSlime: PageType = {
    typ: "Monster",
    img: fireSlimeIcon,
    monster: {
        HP: 2,
        name: "Fire Slime",
        subType: "Fire"
    }
}

export default fireSlime