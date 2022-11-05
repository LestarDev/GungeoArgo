import PageType from "../../../config/pageInterface";
import nobleSwordIcon from "./../../../../../assets/master_sword.png"

const NobleSword: PageType = {
    typ: "Item",
    img: nobleSwordIcon,
    item:  {
        name: "Odin's Sword",
        power: 25,
        typ: "Sword",
        subType: "Ice"
    }
}

export default NobleSword