import React, { useRef } from "react";
import usePlayer from "../../hook/usePlayer";
import Blank from "../../shared/components/blank";
import GoldCoin1 from "../../shared/components/Money/goldCoin1";
import PageType from "../../shared/config/pageInterface";
import randomItem from "../../shared/config/randomItem";
import "./Card.css"
import attackIcon from "./../../../assets/attack.png"
import heartIcon from "./../../../assets/health.png"
import GoldCoin2 from "../../shared/components/Money/goldCoin2";
import GoldCoin3 from "../../shared/components/Money/goldCoin3";
import fireIcon from "./../../../assets/fire_icon.png"
import iceIcon from "./../../../assets/snow_icon.png"
import Slime from "../../shared/components/monsters/slime";
import fireSlime from "../../shared/components/monsters/slimeFire";
import iceSlime from "../../shared/components/monsters/slimeIce";
import BossType from "../../shared/config/bossInterface";
import slimeBossNormalAttack from "./../../../assets/slime_attack.png"
import slimeBossFireAttack from "./../../../assets/fire_slime_attack.png"
import slimeBossIceAttack from "./../../../assets/ice_slime_attack.png"


const Card = (card: PageType) => {

    const cardRef = useRef<HTMLDivElement>(null);

    const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

    let name: string = ""
    let value: string = ""
    let icon: string = ""
    let typeIcon: string = ""

    let classNameHide = "";

    let classNamePlayer = ""

    let classNameIcon = "";

    let classNameTypeIcon = "hide";

    const bossAtackRef = useRef<HTMLDivElement>(null);

    const BossAtackIconRef = useRef<HTMLImageElement>(null);

    const player = usePlayer()

    const goldCoins: PageType[] = [
        GoldCoin1, GoldCoin2, GoldCoin3
    ]

    const hideSuperAttack = async () => {
        await delay(600)
        bossAtackRef.current!.className="hide"
        BossAtackIconRef.current!.src=Blank.img
    }


    const Swap = (card: PageType) => {

        if(player.page1.typ=="Player"){
            player.setPage(card.pageNr!, player.page1)
            player.setPage(1, card)
            player.setPageNr(1, card.pageNr!)
        } else if(player.page2.typ=="Player"){
            player.setPage(card.pageNr!, player.page2)
            player.setPage(2, card)
            player.setPageNr(2, card.pageNr!)
        } else if(player.page3.typ=="Player"){
            player.setPage(card.pageNr!, player.page3)
            player.setPage(3, card)
            player.setPageNr(3, card.pageNr!)
        } else if(player.page4.typ=="Player"){
            player.setPage(card.pageNr!, player.page4)
            player.setPage(4, card)
            player.setPageNr(4, card.pageNr!)
        } else if(player.page5.typ=="Player"){
            player.setPage(card.pageNr!, player.page5)
            player.setPage(5, card)
            player.setPageNr(5, card.pageNr!)
        } else if(player.page6.typ=="Player"){
            player.setPage(card.pageNr!, player.page6)
            player.setPage(6, card)
            player.setPageNr(6, card.pageNr!)
        } else if(player.page7.typ=="Player"){
            player.setPage(card.pageNr!, player.page7)
            player.setPage(7, card)
            player.setPageNr(7, card.pageNr!)
        } else if(player.page8.typ=="Player"){
            player.setPage(card.pageNr!, player.page8)
            player.setPage(8, card)
            player.setPageNr(8, card.pageNr!)
        } else{
            player.setPage(card.pageNr!, player.page9)
            player.setPage(9, card)
            player.setPageNr(9, card.pageNr!)
        }

    }

    const getGold = (card: PageType) => {
        const GoldCoin: PageType = goldCoins[Math.floor(Math.random()*goldCoins.length)];
        const gold: PageType = {
            typ: GoldCoin.typ,
            img: GoldCoin.img,
            money: GoldCoin.money,
            pageNr: card.pageNr
        }
        return gold
    }

    const getRandomPage = (card: PageType) => {
        const randPage: PageType = randomItem(player.isBoss);

        const returnItem: PageType = {
            typ: randPage.typ,
            img: randPage.img,
            item: randPage.item,
            money: randPage.money,
            monster: randPage.monster,
            pageNr: card.pageNr
        };

        return returnItem;

    }

    const pickUp = async (card: PageType) => {


        switch(card.item?.typ){
            case "Sword":
                player.add("ATK", card.item!.power)
                if(card.item.subType) {
                    player.setPlayerDamageType(card.item.subType)
                } else {
                    player.setPlayerDamageType("Normal")
                }
                Swap(getRandomPage(card))
                break;
            case "Potion":
                if(player.HP+card.item!.power>15){
                    player.add("HP", 15-player.HP)
                }else {
                    player.add("HP", card.item!.power)
                }
                if(card.item!.name=="Heal Potion Big") player.restartFireAndIce()
                Swap(getRandomPage(card))
                break;
            case "Wand":
                break;
            default:

        }
    }

    const gain = (card: PageType) => {
        player.add("GOLD", card.money!.count)
        Swap(getRandomPage(card))
    }

    const fight = (card: PageType) => {
        if(card.monster?.subType) {
            if(card.monster.subType==player.DamageType) {player.substract("HP",1); Swap(card); return}
            
            if(card.monster.subType=="Fire" && player.DamageType=="Ice") {
                console.log("Double dmg, line 106 Card.tsx")   
            }

        }

        if(player.ATK>=card.monster!.HP) {
            player.substract("ATK", card.monster!.HP)
            // player.setPage(card.pageNr!, GoldCoin1)
            Swap(getGold(card))
            return
        } else {
            if(card.monster?.subType){
                const v: number = Math.floor(Math.random()*card.monster.HP)+1
                switch(card.monster.subType){
                    case "Fire":
                        if(player.RoundEffect.iced<v) player.addFire(v-player.RoundEffect.iced)
                        break;
                    case "Ice":
                        if(player.RoundEffect.untilFired<v) player.addIce(v-player.RoundEffect.untilFired)
                        break;
                    default:
                        console.log("Error, Cad.tsx Fight subtyp")
                }
            }
            const minusHp: number = card.monster!.HP-player.ATK;
            if(player.ATK==0){
                player.substract("HP", card.monster!.HP-player.ATK)
                Swap(getGold(card))
                return
            }             
            const minusHpMonster: PageType = {
                typ: "Monster",
                img: card.img,
                monster: {
                    name: card.monster!.name,
                    HP: minusHp,
                    subType: card.monster!.subType
                },
                pageNr: card.pageNr
            }
            player.substract("ATK", player.ATK)
            
            player.substract("HP", card.monster!.HP-player.ATK)
            
            Swap(minusHpMonster)
        }
        
    }

    switch(card.typ){
        case "Item":
            if(!card.item) player.setPage(card.pageNr!, Blank)
            name=card.item!.name
            value=card.item!.power+""
            classNameIcon="true"
            if(card.item!.typ=="Sword"){
                icon=attackIcon
            } else {
                icon=heartIcon
            }
            
            break;
        case "Monster":
            name=card.monster!.name
            value=card.monster!.HP+""
            classNameIcon="true"
            icon=heartIcon
            if(card.monster!.subType){
                if(card.monster!.subType=="Fire"){
                    typeIcon=fireIcon
                } else {
                    typeIcon=iceIcon
                }
                classNameTypeIcon="absolut"
            }
            break;
        case "Money":
            name=card.money!.typ
            value=card.money!.count+""
            break;
        case "Blank":
            name="Pusty"
            classNameHide = "hide"
            break;
        case "Player":
            name="Ty"
            value=player.ATK
            classNamePlayer="Player"
            classNameIcon="true"
            icon=attackIcon
            if(cardRef.current) cardRef.current!.style.transform="";
            break;
        default:
            
    }

    const check = async (card: PageType) => {
        await delay(100)
        
        if(card.typ=="Blank") Swap(getRandomPage(card))
        if(card.typ=="Item") pickUp(card)
        if(card.typ=="Money") gain(card)
        if(card.typ=="Monster") fight(card)

        cardRef.current!.style.transform="";

    }
    
    return (
        <div className="card" ref={cardRef}>
            <img className={classNamePlayer} src={card.img} alt={card.typ} onClick={(e: React.MouseEvent)=>{
                if(card.typ=="Player") return

                if(player.page1.typ=="Player"){
                    if(card.pageNr!=2 && card.pageNr!=4) return
                } else if(player.page2.typ=="Player"){
                    if(card.pageNr!=1 && card.pageNr!=3 && card.pageNr!=5) return
                } else if(player.page3.typ=="Player"){
                    if(card.pageNr!=2 && card.pageNr!=6) return
                } else if(player.page4.typ=="Player"){
                    if(card.pageNr!=1 && card.pageNr!=5 && card.pageNr!=7) return
                } else if(player.page5.typ=="Player"){
                    if(card.pageNr!=2 && card.pageNr!=4 && card.pageNr!=6 && card.pageNr!=8) return
                } else if(player.page6.typ=="Player"){
                    if(card.pageNr!=3 && card.pageNr!=5 && card.pageNr!=9) return
                } else if(player.page7.typ=="Player"){
                    if(card.pageNr!=4 && card.pageNr!=8) return
                } else if(player.page8.typ=="Player"){
                    if(card.pageNr!=5 && card.pageNr!=7 && card.pageNr!=9) return
                } else{
                    if(card.pageNr!=6 && card.pageNr!=8) return
                }
                
                cardRef.current!.style.transform="rotateY(360deg)";
                
                if(player.RoundEffect.untilFired>0) player.substract("HP", 1)
                if(player.RoundEffect.untilPoisonEffect>0) player.substract("HP", 1)
                if(player.RoundEffect.iced>0) player.substract("HP", 1)

                player.nextRound()
                
                if(player.RoundEffect.untilSuperAbility==0) {
                    player.add("ATK", 1)
                    player.restartSuperAbility()
                }

                check(card);

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
                                HP: player.currentBoss.HP,
                                ATK: player.currentBoss.ATK,
                                subType: player.currentBoss.subType,
                                untilSuperAbility: 5,
                                name: player.currentBoss.name
                            }
                        } else if(randomAbilitiesNr==2){
                            console.log("HP")
                            const addHP: number = player.currentBoss.HP==20 ? 0 : 1
                            thisTimeBoss = {
                                HP: player.currentBoss.HP+addHP,
                                ATK: player.currentBoss.ATK,
                                subType: player.currentBoss.subType,
                                untilSuperAbility: 5,
                                name: player.currentBoss.name
                            }
                        } else {
                            console.log("Add Fire/Ice")
                            const randomEffectValue = randomIntFromInterval(0, 3)
                            if(player.currentBoss.subType=="Fire"){
                                if(randomEffectValue>0) BossAtackIconRef.current!.src=fireIcon;            
                                player.addFire(randomAbilitiesNr)
                            } else {
                                if(randomEffectValue>0) BossAtackIconRef.current!.src=iceIcon
                                player.addIce(randomEffectValue)
                            }
                            thisTimeBoss = {
                                HP: player.currentBoss.HP,
                                ATK: player.currentBoss.ATK,
                                subType: player.currentBoss.subType,
                                untilSuperAbility: 5,
                                name: player.currentBoss.name
                            }
                        }
                        
                        player.setCurrentBoss(thisTimeBoss)
                    }
                }else{
                    player.nextBossRound()
                }

               

                if(player.GOLD>=300) player.setBossValue(true)

                if(player.currentBoss.HP<=0) player.setBossValue(false)

            }}/>
            <div>
                <p>&nbsp;{name}</p>
                <div className={classNameIcon}><img className="heart" src={icon} alt="Heart" /></div>
                <span className={classNameHide}>{value}</span>

            </div>
            <div className={classNameTypeIcon}>
                <img src={typeIcon} alt="" />
            </div>
            <div className="hide" ref={bossAtackRef}>
                <img src={Blank.img} alt="" ref={BossAtackIconRef} />
            </div>
        </div>
    )
}

export default Card;