import PageType from "../../../config/pageInterface";
import nobleSwordIcon from "./../../../../../assets/master_sword.png"

const NobleSword: PageType = {
    typ: "Item",
    img: nobleSwordIcon,
    item:  {
        name: "Odin's Sword",
        power: 15,
        typ: "Sword",
        subType: "Ice"
    }
}

export default NobleSword