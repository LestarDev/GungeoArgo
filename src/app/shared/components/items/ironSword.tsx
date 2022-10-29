import PageType from "../../config/pageInterface";
import ironSwordIcon from "./../../../../assets/iron_sword.png"

const IronSword: PageType = {
    typ: "Item",
    img: ironSwordIcon,
    item: {
        name: "IronSword",
        power: 2,
        typ: "Sword"
    }
}

export default IronSword