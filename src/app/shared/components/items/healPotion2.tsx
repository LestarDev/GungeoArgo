import PageType from "../../config/pageInterface";
import healPotionIcon from "./../../../../assets/potion_smallHP.png"

const HealPotion2: PageType = {
    typ: "Item",
    img: healPotionIcon,
    item: {
        name: "Heal Potion",
        power: 2,
        typ: "Potion"
    }
}

export default HealPotion2