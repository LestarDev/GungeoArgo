import React, { useRef } from "react";
import usePlayer from "../../hook/usePlayer";
import Blank from "../../shared/components/blank";
import Player from "../../shared/components/player";
import PageType from "../../shared/config/pageInterface";
import "./Card.css"

const Card = (card: PageType) => {

    let name: string = ""
    let value: string = ""

    let classNameHide = "";

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

    const pickUp = async (card: PageType) => {

        const blankPage: PageType = {
            typ: Blank.typ,
            img: Blank.img,
            pageNr: card.pageNr
        }

        switch(card.item?.typ){
            case "Sword":
                player.add("ATK", card.item!.power)
                player.setPage(card.pageNr!, Blank)
                Swap(blankPage)
                break;
            case "Potion":
                break;
            case "Wand":
                break;
            default:

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
            break;
        default:
            
    }

    return (
        <div className="card">
            <img src={card.img} alt={card.typ} onClick={(e: React.MouseEvent)=>{
                console.log(card.pageNr)
                if(card.typ=="Player") return;
                if(card.typ=="Blank") Swap(card)
                if(card.typ=="Item") pickUp(card)
            }}/>
            <div>
                <p>{name}</p>
                <span className={classNameHide}>{value}&nbsp;</span>
            </div>
        </div>
    )
}

export default Card;