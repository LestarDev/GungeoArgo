import { useRef } from "react";
import PageType from "../../shared/config/pageInterface";
import "./Card.css"

const Card = (card: PageType) => {

    const  nameRef = useRef<HTMLParagraphElement>(null);
    const valueRef = useRef<HTMLSpanElement>(null);

    switch(card.typ){
        case "Item":
            nameRef.current!.innerHTML=card.item!.name
            valueRef.current!.innerHTML=card.item!.power+""
            break;
        case "Monster":
            nameRef.current!.innerHTML=card.monster!.name
            valueRef.current!.innerHTML=card.monster!.HP+""
            break;
        case "Money":
            nameRef.current!.innerHTML=card.money!.typ
            valueRef.current!.innerHTML=card.money!.count+""
        default:
            
    }

    return (
        <div className="card">
            <img src={card.img} alt={card.typ}/>
            <p ref={nameRef}></p>
            <span ref={valueRef}></span>
        </div>
    )
}

export default Card;