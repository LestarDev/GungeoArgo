import PageType from "../../config/pageInterface";
import healPotionIcon from "./../../../../assets/potion_smallHP.png"

const HealPotion1: PageType = {
    typ: "Item",
    img: healPotionIcon,
    item: {
        name: "Heal Potion",
        power: 1,
        typ: "Potion"
    }
}

export default HealPotion1