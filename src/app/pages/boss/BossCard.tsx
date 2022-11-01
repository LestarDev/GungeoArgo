import usePlayer from "../../hook/usePlayer"
import bossIcon from "./../../../assets/slime_king.png"
import "./BossCard.css"
import heartIcon from "./../../../assets/health.png"
import attackIcon from "./../../../assets/attack.png"
import fireIcon from "./../../../assets/fire_icon.png"
import iceIcon from "./../../../assets/snow_icon.png"
import sAbilityIcon from "./../../../assets/special_icon.png"
import React, { useRef } from "react"
import BossType, { typDmg } from "../../shared/config/bossInterface"
import Slime from "../../shared/components/monsters/slime"
import fireSlime from "../../shared/components/monsters/slimeFire"
import PageType from "../../shared/config/pageInterface"
import iceSlime from "../../shared/components/monsters/slimeIce"
import slimeBossNormalAttack from "./../../../assets/slime_attack.png"
import slimeBossFireAttack from "./../../../assets/fire_slime_attack.png"
import slimeBossIceAttack from "./../../../assets/ice_slime_attack.png"
import Blank from "../../shared/components/blank"

const BossCard = () => {

    const player = usePlayer()

    let classNameBoss: string = "bossAbsolut hideBoss"

    let icon: string = iceIcon

    if(player.isBoss) classNameBoss="bossAbsolut boss"

    if(player.currentBoss.subType=="Fire") icon=fireIcon 

    const bossRef = useRef<HTMLDivElement>(null);

    const bossAtackRef = useRef<HTMLDivElement>(null);

    const BossAtackIconRef = useRef<HTMLImageElement>(null);

    const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

    const hideSuperAttack = async () => {
        await delay(600)
        bossAtackRef.current!.className="hide"
        BossAtackIconRef.current!.src=Blank.img
    }

    return (
        <div className={classNameBoss} ref={bossRef}>
            <img src={bossIcon} alt="Boss" onClick={(e: React.MouseEvent)=>{
                let otherSubType: typDmg = "Ice";
                if(player.currentBoss.subType=="Ice") otherSubType="Fire"
                if(player.ATK>0) {
                    if(player.ATK<player.currentBoss.HP){
                        const untilSuperAbilityValue: number = player.currentBoss.untilSuperAbility==0 ? 0 : 1;
                        const thisTimeBoss: BossType = {
                            HP: player.currentBoss.HP-player.ATK,
                            ATK: player.currentBoss.ATK,
                            subType: otherSubType,
                            untilSuperAbility: player.currentBoss.untilSuperAbility-untilSuperAbilityValue,
                            name: player.currentBoss.name
                        }
                        player.setCurrentBoss(thisTimeBoss)
                    }else{
                        console.log("Finished Boss")
                    }
                } else {
                    const untilSuperAbilityValue: number = player.currentBoss.untilSuperAbility==0 ? 0 : 1;
                    const thisTimeBoss: BossType = {
                        HP: player.currentBoss.HP-1,
                        ATK: player.currentBoss.ATK,
                        subType: otherSubType,
                        untilSuperAbility: player.currentBoss.untilSuperAbility-untilSuperAbilityValue,
                        name: player.currentBoss.name
                    }
                    player.setCurrentBoss(thisTimeBoss)
                    player.substract("HP", 2)
                    
                }
                
                player.substract("ATK", player.ATK)

                if(player.currentBoss.untilSuperAbility==0){
                    let thisTimeBoss: BossType;
                    if(player.currentBoss.name=="Slime King"){
                        function randomIntFromInterval(min: number, max: number) { // min and max included 
                            return Math.floor(Math.random() * (max - min + 1) + min)
                        }
                        bossAtackRef.current!.className="bossAtackAnimation"
                        const randomAbilitiesNr: number = randomIntFromInterval(0, 3)
                        if(randomAbilitiesNr==1){
                            let delPage: number;

                            if(player.page1.typ=="Player"){
                                delPage = 1;
                            } else if(player.page2.typ=="Player"){         
                                delPage = 2;
                            } else if(player.page3.typ=="Player"){
                                delPage = 3;
                            } else if(player.page4.typ=="Player"){
                                delPage = 4;
                            } else if(player.page5.typ=="Player"){
                                delPage = 5;
                            } else if(player.page6.typ=="Player"){
                                delPage = 6;
                            } else if(player.page7.typ=="Player"){
                                delPage = 7;
                            } else if(player.page8.typ=="Player"){
                                delPage = 8;
                            } else{
                                delPage = 9;
                            }
                        
                            const Pages: number[] = [
                                1,2,3,4,5,6,7,8,9
                            ].filter(function(item) {
                                return item !== delPage
                            })
                        
                            const Slimes: PageType[] = [
                                Slime, fireSlime, fireSlime, iceSlime, iceSlime
                            ]

                            console.log("Slime")

                            const currentSlime: PageType = Slimes[Math.floor(Math.random()*Slimes.length)]

                            switch(currentSlime){
                                case iceSlime:
                                    BossAtackIconRef.current!.src=slimeBossIceAttack
                                    break;
                                case fireSlime:
                                    BossAtackIconRef.current!.src=slimeBossFireAttack
                                    break;
                                default:
                                    BossAtackIconRef.current!.src=slimeBossNormalAttack
                            }
                            hideSuperAttack()
                            player.setPage(Pages[Math.floor(Math.random()*Pages.length)], currentSlime)
                            thisTimeBoss = {
                                HP: player.currentBoss.HP-1,
                                ATK: player.currentBoss.ATK,
                                subType: player.currentBoss.subType,
                                untilSuperAbility: 5,
                                name: player.currentBoss.name
                            }
                        } else if(randomAbilitiesNr==2){
                            thisTimeBoss = {
                                HP: player.currentBoss.HP,
                                ATK: player.currentBoss.ATK,
                                subType: player.currentBoss.subType,
                                untilSuperAbility: 5,
                                name: player.currentBoss.name
                            }
                            console.log("HP")
                        } else {
                            thisTimeBoss = {
                                HP: player.currentBoss.HP-1,
                                ATK: player.currentBoss.ATK,
                                subType: player.currentBoss.subType,
                                untilSuperAbility: 5,
                                name: player.currentBoss.name
                            }
                        }
                        
                        player.setCurrentBoss(thisTimeBoss)
                    }
                }
                
                player.nextRound()
                

                
            }}/>
            <span>{player.currentBoss.name}</span>
            <div><span>{player.currentBoss.HP}</span><img src={heartIcon} alt="h" />
            <span>&nbsp;{player.currentBoss.ATK}</span><img src={attackIcon} alt="a" /></div>
            <div className="bossAbsolutIconTyp"><img src={icon} alt="t" /></div>
            <div className="bossAbsolutSuperAbility">{player.currentBoss.untilSuperAbility}<img src={sAbilityIcon} alt="s" /></div>
            <div className="hide" ref={bossAtackRef}>
                <img src={Blank.img} alt="" ref={BossAtackIconRef} />
            </div>
        </div>
    )
}

export default BossCard