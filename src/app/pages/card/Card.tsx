import React, { useRef } from "react";
import usePlayer from "../../hook/usePlayer";
import Player from "../../shared/components/player";
import PageType from "../../shared/config/pageInterface";
import "./Card.css"

const Card = (card: PageType) => {

    let name: string = ""
    let value: string = ""

    let classNameHide = "";

    const player = usePlayer()

    const Swap = (card: PageType) => {

        const Tymczasowe: PageType = card;
    
        let playerPage: PageType;

        if(player.page1.typ=="Player"){
            playerPage=player.page1;
        } else if(player.page2.typ=="Player"){
            playerPage=player.page2;
        } else if(player.page3.typ=="Player"){
            playerPage=player.page3;
        } else if(player.page4.typ=="Player"){
            playerPage=player.page4;
        } else if(player.page5.typ=="Player"){
            playerPage=player.page5;
        } else if(player.page6.typ=="Player"){
            playerPage=player.page6;
        } else if(player.page7.typ=="Player"){
            playerPage=player.page7;
        } else if(player.page8.typ=="Player"){
            playerPage=player.page8;
        } else{
            playerPage=player.page9;
        }
        
        console.log(card.pageNr, playerPage.pageNr)

        player.setPage(card.pageNr!, playerPage)
    
        // player.setPage(playerPage.pageNr!, Tymczasowe)
    
    }

    switch(card.typ){
        case "Item":
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
                if(card.typ=="Player") return;
                if(card.typ=="Blank") Swap(card)
            }}/>
            <div>
                <p>{name}</p>
                <span className={classNameHide}>{value}</span>
            </div>
        </div>
    )
}

export default Card;