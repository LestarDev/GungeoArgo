import React, { useRef } from "react";
import usePlayer from "../../hook/usePlayer";
import Blank from "../../shared/components/blank";
import GoldCoin1 from "../../shared/components/Money/goldCoin1";
import PageType from "../../shared/config/pageInterface";
import randomItem from "../../shared/config/randomItem";
import "./Card.css"
import heartIcon from "./../../../assets/health.png"

const Card = (card: PageType) => {

    let name: string = ""
    let value: string = ""

    let classNameHide = "";

    let classNamePlayer = ""

    const player = usePlayer()

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
        const gold: PageType = {
            typ: GoldCoin1.typ,
            img: GoldCoin1.img,
            money: GoldCoin1.money,
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
                Swap(getRandomPage(card))
                break;
            case "Potion":
                player.add("HP", card.item!.power)
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
        let dmgTo: number = 0;
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
            const minusHp: number = card.monster!.HP-player.ATK;
            const minusHpMonster: PageType = {
                typ: "Monster",
                img: card.img,
                monster: {
                    name: card.monster!.name,
                    HP: minusHp,
                    subType: card.monster!.subType
                }
            }
            player.substract("ATK", player.ATK)
            if(card.monster!.HP>=player.HP){
                console.log("Dead")
            } else {
                player.substract("HP", card.monster!.HP)
            }
            player.setPage(card.pageNr!, minusHpMonster)
        }
        
    }

    switch(card.typ){
        case "Item":
            if(!card.item) player.setPage(card.pageNr!, Blank)
            name=card.item!.name
            value=card.item!.power+""
            break;
        case "Monster":
            name=card.monster!.name
            value=card.monster!.HP+""
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
            break;
        default:
            
    }

    return (
        <div className="card">
            <img className={classNamePlayer} src={card.img} alt={card.typ} onClick={(e: React.MouseEvent)=>{
                if(card.typ=="Player") return;
                
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
                
                if(card.typ=="Blank") Swap(getRandomPage(card))
                if(card.typ=="Item") pickUp(card)
                if(card.typ=="Money") gain(card)
                if(card.typ=="Monster") fight(card)
            }}/>
            <div>
                <p>&nbsp;{name}</p>
                <div className={classNamePlayer}><img className="heart" src={heartIcon} alt="Heart" /></div>
                <span className={classNameHide}>{value}</span>

            </div>
        </div>
    )
}

export default Card;