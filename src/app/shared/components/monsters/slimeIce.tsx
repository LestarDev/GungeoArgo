import PageType from "../../config/pageInterface";
import iceSlimeIcon from "./../../../../assets/ice_slime.png"

const iceSlime: PageType = {
    typ: "Monster",
    img: iceSlimeIcon,
    monster: {
        HP: 2,
        name: "Ice Slime",
        subType: "Ice"
    }
}

export default iceSlime