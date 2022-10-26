import { useRef } from "react";
import usePlayer from "../../hook/usePlayer";
import PageType from "../../shared/config/pageInterface";
import "./Card.css"

const Card = (card: PageType) => {

    let name: string = ""
    let value: string = ""

    let classNameHide = "";

    const player = usePlayer()

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
            <img src={card.img} alt={card.typ}/>
            <div>
                <p>{name}</p>
                <span className={classNameHide}>{value}</span>
            </div>
        </div>
    )
}

export default Card;