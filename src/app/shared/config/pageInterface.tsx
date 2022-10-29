type Typ = "Money" | "Blank" | "Monster" | "Item" | "Player";

type Types = "Fire" | "Ice";

type ItemTyp = "Potion" | "Sword" | "Wand"

type MoneyTyp = "Coin" | "Rubin"

export interface Money {
    count: number,
    typ: MoneyTyp
}

export interface Monster {
    HP: number,
    name: string,
    subType?: Types
}

export interface Item {
    power: number,
    name: string,
    typ: ItemTyp,
    subType?: Types
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