import usePlayer from "../../hook/usePlayer"
import Blank from "../components/blank"
import NobleSword from "../components/items/fromBosses/nobleSword"
import HealPotion1 from "../components/items/healPotion1"
import HealPotion2 from "../components/items/healPotion2"
import HealPotionBig from "../components/items/healPotionBig"
import IronSword from "../components/items/ironSword"
import WoodenSword from "../components/items/woodenSword"
import GoldCoin1 from "../components/Money/goldCoin1"
import GoldCoin2 from "../components/Money/goldCoin2"
import GoldCoin3 from "../components/Money/goldCoin3"
import Skeleton from "../components/monsters/skeleton"
import Slime from "../components/monsters/slime"
import fireSlime from "../components/monsters/slimeFire"
import iceSlime from "../components/monsters/slimeIce"
import PageType from "./pageInterface"

function randomItem(isBoss: boolean): PageType {

    const Pages: PageType[] = !isBoss ? [
        Blank, Blank, Blank, Blank, Blank,
        GoldCoin1, GoldCoin1, GoldCoin1, GoldCoin2, GoldCoin2, GoldCoin3, 
        HealPotion1, HealPotion1, HealPotion2, HealPotionBig, 
        WoodenSword, WoodenSword, IronSword,
        // NobleSword,
        Slime, Slime, Slime, fireSlime, fireSlime, iceSlime, iceSlime 
        // Skeleton
    ]  :  [
        Blank, Blank, Blank, Blank, 
        GoldCoin1, GoldCoin1, GoldCoin2, GoldCoin3, 
        HealPotion1, HealPotion1, HealPotion2, HealPotionBig, 
        WoodenSword, WoodenSword, IronSword,
        Slime, Slime, fireSlime, iceSlime
    ]

    return (
        Pages[Math.floor(Math.random()*Pages.length)]
    )
}

export default randomItem