import PageType from "../../config/pageInterface";
import healPotionBigIcon from "./../../../../assets/potion_bigHP.png"

const HealPotionBig: PageType = {
    typ: "Item",
    img: healPotionBigIcon,
    item: {
        name: "Heal Potion Big",
        power: 4,
        typ: "Potion"
    }
}

export default HealPotionBig