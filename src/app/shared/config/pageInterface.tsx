type Typ = "Money" | "Blank" | "Monster" | "Item" | "Player";

type MonsterTyp = "Fire" | "Ice";

type ItemTyp = "Potion" | "Sword" | "Wand"

type MoneyTyp = "Coin" | "Rubin"

interface Money {
    count: number,
    typ: MoneyTyp
}

interface Monster {
    HP: number,
    name: string,
    subType?: MonsterTyp
}

interface Item {
    power: number,
    name: string,
    typ: ItemTyp
}

interface PageType {
    typ: Typ,
    img: string,
    money?: Money,
    monster?: Monster,
    item?: Item
}

export default PageType