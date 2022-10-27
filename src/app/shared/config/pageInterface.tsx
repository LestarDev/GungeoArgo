type Typ = "Money" | "Blank" | "Monster" | "Item" | "Player";

type MonsterTyp = "Fire" | "Ice";

type ItemTyp = "Potion" | "Sword" | "Wand"

type MoneyTyp = "Coin" | "Rubin"

export interface Money {
    count: number,
    typ: MoneyTyp
}

export interface Monster {
    HP: number,
    name: string,
    subType?: MonsterTyp
}

export interface Item {
    power: number,
    name: string,
    typ: ItemTyp
}

interface PageType {
    typ: Typ,
    img: string,
    money?: Money,
    monster?: Monster,
    item?: Item,
    pageNr?: number
}

export default PageType