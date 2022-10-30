type typDmg = "Normal" | "Fire" | "Ice";

interface BossType {
    HP: number,
    ATK: number,
    subType: typDmg,
    untilSuperAbility: number
}

export default BossType