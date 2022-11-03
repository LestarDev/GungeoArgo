export type typDmg = "Fire" | "Ice";

interface BossType {
    HP: number,
    ATK: number,
    subType: typDmg,
    untilSuperAbility: number,
    name: string
}

export default BossType