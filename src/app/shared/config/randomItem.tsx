import Blank from "../components/blank"
import HealPotion2 from "../components/items/healPotion2"
import WoodenSword from "../components/items/woodenSword"
import GoldCoin1 from "../components/Money/goldCoin1"
import PageType from "./pageInterface"

function randomItem(): PageType {

    const Pages: PageType[] = [
        Blank, Blank, Blank, GoldCoin1, HealPotion2, WoodenSword
    ]

    return (
        Pages[Math.floor(Math.random()*Pages.length)]
    )
}

export default randomItem