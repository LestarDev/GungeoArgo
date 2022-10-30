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

    const player = usePlayer()

    const goldCoins: PageType[] = [
        GoldCoin1, GoldCoin2, GoldCoin3
    ]

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
        const randPage: PageType = randomItem();

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
                        player.addFire(v)
                        break;
                    case "Ice":
                        player.addIce(v)
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
                if(card.typ=="Player") {player.setBossValue(true); return};

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
            
                if(player.GOLD>=300) player.setBossValue(true)

                if(player.HP<=0) console.log("Dead")

            }}/>
            <div>
                <p>&nbsp;{name}</p>
                <div className={classNameIcon}><img className="heart" src={icon} alt="Heart" /></div>
                <span className={classNameHide}>{value}</span>

            </div>
            <div className={classNameTypeIcon}>
                <img src={typeIcon} alt="" />
            </div>
        </div>
    )
}

export default Card;