import Blank from "../components/blank"
import HealPotion2 from "../components/items/healPotion2"
import IronSword from "../components/items/ironSword"
import WoodenSword from "../components/items/woodenSword"
import GoldCoin1 from "../components/Money/goldCoin1"
import Slime from "../components/monsters/slime"
import PageType from "./pageInterface"

function randomItem(): PageType {

    const Pages: PageType[] = [
        Blank, Blank, Blank, GoldCoin1, HealPotion2, WoodenSword, Slime, IronSword
    ]

    return (
        Pages[Math.floor(Math.random()*Pages.length)]
    )
}

export default randomItem