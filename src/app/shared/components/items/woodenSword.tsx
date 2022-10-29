import PageType, { Item } from "../../config/pageInterface";
import woodenSwordIcon from "./../../../../assets/wooden_sword.png"

const WoodenSword: PageType = {
    typ: "Item",
    img: woodenSwordIcon,
    item: {
        name: "WoodenSword",
        power: 1,
        typ: "Sword"
    }
}

export default WoodenSword