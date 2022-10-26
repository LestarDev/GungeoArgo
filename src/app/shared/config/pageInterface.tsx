type Typ = "Money" | "Blank" | "Monster" | "Item" | "Player";

type SubTyp = "Fire" | "Ice";

type ItemTyp = "Potion" | "Sword" | "Wand"

interface Money {
    count: number,
    img: string
}

interface Monster {
    HP: number,
    subType?: SubTyp
}

interface Item {
    power: number,
    typ: ItemTyp
}

interface PageType {
    typ: Typ,
    money?: Money,
    monster?: Monster,
    item?: Item
}

export default PageType