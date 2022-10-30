import BossType from "../../config/bosses/bossInterface";

const SlimeKing: BossType =  {
    HP: 20,
    ATK: 1,
    subType: "Normal",
    untilSuperAbility: 5
}


/* 

    Super Abilites:

    Change one Card to Slime [20% normal, 40% ice/fire]

    Set effect to Player [surrent one if Normal just add dmg]

*/

export default SlimeKing