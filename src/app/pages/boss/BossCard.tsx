import usePlayer from "../../hook/usePlayer"
import bossIcon from "./../../../assets/slime_king.png"
import "./BossCard.css"
import heartIcon from "./../../../assets/health.png"
import attackIcon from "./../../../assets/attack.png"
import fireIcon from "./../../../assets/fire_icon.png"
import iceIcon from "./../../../assets/snow_icon.png"
import sAbilityIcon from "./../../../assets/special_icon.png"
import React from "react"
import BossType, { typDmg } from "../../shared/config/bossInterface"

const BossCard = () => {

    const player = usePlayer()

    let classNameBoss: string = "bossAbsolut hideBoss"

    let icon: string = iceIcon

    if(player.isBoss) classNameBoss="bossAbsolut boss"

    if(player.currentBoss.subType=="Fire") icon=fireIcon 

    return (
        <div className={classNameBoss}>
            <img src={bossIcon} alt="Boss" onClick={(e: React.MouseEvent)=>{
                let otherSubType: typDmg = "Fire";
                if(player.currentBoss.subType=="Ice") otherSubType="Ice"
                if(player.ATK>0) {
                    if(player.ATK<player.currentBoss.HP){
                        const thisTimeBoss: BossType = {
                            HP: player.currentBoss.HP-player.ATK,
                            ATK: player.currentBoss.ATK,
                            subType: otherSubType,
                            untilSuperAbility: player.currentBoss.untilSuperAbility
                        }
                        player.setCurrentBoss(thisTimeBoss)
                    }
                }

                player.nextRound()
            }}/>
            <span>Slime King</span>
            <div><span>{player.currentBoss.HP}</span><img src={heartIcon} alt="h" />
            <span>&nbsp;{player.currentBoss.ATK}</span><img src={attackIcon} alt="a" /></div>
            <div className="bossAbsolutIconTyp"><img src={icon} alt="t" /></div>
            <div className="bossAbsolutSuperAbility">{player.currentBoss.untilSuperAbility}<img src={sAbilityIcon} alt="s" /></div>
        </div>
    )
}

export default BossCard